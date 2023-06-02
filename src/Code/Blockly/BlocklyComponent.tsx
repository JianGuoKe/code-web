/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, { useState } from "react";
import "./BlocklyComponent.less";
import { useEffect, useRef } from "react";

import Blockly, { WorkspaceSvg, svgResize } from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import locale from "blockly/msg/zh-hans";
import "blockly/blocks";
const win = global as any;

Blockly.setLocale(locale);

function BlocklyComponent(props: any) {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<WorkspaceSvg>();
  const [large, setLarge] = useState<boolean | null>(null);

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    if (primaryWorkspace.current || !blocklyDiv.current) {
      return;
    }
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });
    if (initialXml) {
      try {
        Blockly.Xml.domToWorkspace(
          Blockly.utils.xml.textToDom(initialXml),
          primaryWorkspace.current!
        );
      } catch (e) {
        console.error(e);
      }
    }
    props.addChangeListener &&
      primaryWorkspace.current.addChangeListener(props.addChangeListener);
    win.primaryWorkspace = primaryWorkspace;
    win.svgResize = (large = false) => {
      setLarge(large);
    };
    win.generateXml = () => {
      const dom = Blockly.Xml.workspaceToDom(primaryWorkspace.current!, true);
      const xml = Blockly.utils.xml.domToText(dom);
      return xml;
    };
    win.generateCode = () => {
      var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
      // console.log(code);
      return code;
    };
    win.undo = () => {
      primaryWorkspace.current?.undo(false);
    };
    win.redo = () => {
      primaryWorkspace.current?.undo(true);
    };
    // return () => {
    //   props.addChangeListener &&
    //     primaryWorkspace.current?.removeChangeListener(props.addChangeListener);
    // };
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  useEffect(() => {
    if (large) {
      primaryWorkspace.current && svgResize(primaryWorkspace.current);
    } else {
      setTimeout(() => {
        primaryWorkspace.current && svgResize(primaryWorkspace.current);
      }, 300);
    }
  }, [large]);

  return (
    <React.Fragment>
      {/* <button onClick={generateCode}>Convert</button> */}
      <div
        ref={blocklyDiv}
        id="code-blockly"
        style={large ? { height: 687 } : undefined}
      />
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;
