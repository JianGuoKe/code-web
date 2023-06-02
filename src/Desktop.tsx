import { Button, notification, Space } from "antd";
import { useEffect } from "react";

let deferredPrompt: any = null;

// 安装完成后触发,即点击安装弹窗中的“安装”后被触发
window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
});

function addToDesktop() {
  // 调用prompt()方法触发安装弹窗
  deferredPrompt.prompt();
  deferredPrompt = null;
}

let init = false;

export function Desktop() {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (init) {
      return;
    }
    init = true;

    // 判断用户是否安装此应用：beforeinstallprompt,如果用户已经安装过了,那么该事件不会再次触发
    // 需要卸载，然后重新打开浏览器才能再次触发
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      api.success({
        key: "desktop",
        message: "桌面版",
        description: "安装桌面版提供更便捷的体验",
        btn: (
          <Space>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                api.destroy("desktop");
                addToDesktop();
              }}
            >
              安装桌面版
            </Button>
          </Space>
        ),
      });
    });
  }, [api]);

  return contextHolder;
}
