import React, { useEffect, useState } from "react";
import "./App.less";
import {
  Button,
  Drawer,
  message,
  notification,
  Space,
  Switch,
  Tooltip,
} from "antd";
import CodeEditor from "./Code";
import Game from "./Game";
import { useLiveQuery } from "dexie-react-hooks";
import { state } from "./StateDexie";
import {
  CaretRightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  CloseOutlined,
  AppstoreAddOutlined,
  FastBackwardOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Cup from "./cup.svg";
import Keyboard from "./window.svg";
const win = global as any;

function App() {
  const options = useLiveQuery(() => state.getOptions());
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contextMsgHolder] = message.useMessage();
  const [debugMode, setDebugMode] = useState(false);

  function handleClose() {
    state.setCodeEditorVisible(false);
  }

  async function runScript() {
    try {
      win.sandbox(win.generateCode());
      state.setCodeEditorVisible(false);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "程序执行失败!" + (err as any)?.message,
      });
      // api.error({
      //   message: "程序执行失败",
      //   description: (err as any)?.message,
      // });
    }
  }

  useEffect(() => {
    if (!options || options?.classVisible === false) {
      return;
    }
    api.info({
      key: "class1",
      duration: null,
      message: "编程大冒险",
      description: "第一课:序列，拖动多个直行步骤，直到和助手汇合。",
      onClose: () => {
        state.setClassCupVisible(false);
      },
      btn: (
        <Space>
          <Tooltip title="每节课程都可自定义进行重复练习">
            <Button
              size="small"
              disabled
              icon={<AppstoreAddOutlined />}
              onClick={() => api.destroy("class1")}
            >
              开发课程
            </Button>
          </Tooltip>
        </Space>
      ),
    });
    return () => api.destroy("class1");
  }, [options, options?.classVisible, api]);

  return (
    <div className="code-app">
      <div className="code-app-logo">
        编程启蒙课
        <div>JIANGUOKE</div>
      </div>
      {options?.classVisible === false && (
        <img
          className="code-app-class"
          alt="课程目标"
          src={Cup}
          onClick={() => state.setClassCupVisible(true)}
        />
      )}
      {!options?.editorVisible && (
        <img
          className="code-app-code"
          alt="显示编辑器"
          src={Keyboard}
          onClick={() => state.switchCodeEditorVisible()}
        />
      )}
      <Game></Game>
      <Drawer
        className="code-app-editor"
        title={
          <span>
            编写代码
            <Button
              className="code-app-editor-size"
              size="small"
              type="text"
              icon={
                options?.size !== "large" ? (
                  <FullscreenOutlined />
                ) : (
                  <FullscreenExitOutlined />
                )
              }
              onClick={() => {
                const checked = options?.size === "large" ? false : true;
                win.svgResize(checked);
                state.setSize(checked ? "large" : "default");
              }}
            />
            <Button
              className="code-app-editor-undo"
              size="small"
              type="text"
              icon={<LeftOutlined />}
              onClick={() => {
                win.undo();
              }}
            />
            <Button
              className="code-app-editor-redo"
              size="small"
              type="text"
              icon={<RightOutlined />}
              onClick={() => {
                win.redo();
              }}
            />
          </span>
        }
        placement={options?.placement || "bottom"}
        mask={false}
        closable={false}
        size={options?.size}
        extra={
          <Space>
            {options?.closeEnabled && (
              <Button
                className="code-app-editor-close"
                icon={<CloseOutlined />}
                type="text"
                onClick={handleClose}
              ></Button>
            )}
            {options?.debugEnabled && (
              <Switch
                className="code-app-editor-debug"
                checkedChildren="调试"
                unCheckedChildren=""
                checked={debugMode}
                onChange={(checked) => setDebugMode(checked)}
              ></Switch>
            )}

            {options?.runEnabled !== false && (
              <Button
                className="code-app-editor-reset"
                icon={<FastBackwardOutlined />}
                type="default"
                onClick={() => win.reset()}
              >
                重置
              </Button>
            )}
            {options?.runEnabled !== false && (
              <Button
                className="code-app-editor-run"
                icon={<CaretRightOutlined />}
                type="primary"
                onClick={runScript}
              >
                运行
              </Button>
            )}
          </Space>
        }
        height={
          options?.placement === "bottom" || options?.placement === "top"
            ? options?.width
            : undefined
        }
        width={
          options?.placement !== "bottom" && options?.placement !== "top"
            ? options?.width
            : undefined
        }
        onClose={handleClose}
        open={options?.editorVisible}
        key={options?.placement}
      >
        <CodeEditor
          defaultCode={options?.codeText}
          onCodeChange={(code) => state.setCodeText(code)}
        ></CodeEditor>
      </Drawer>
      {contextHolder}
      {contextMsgHolder}
    </div>
  );
}

export default App;
