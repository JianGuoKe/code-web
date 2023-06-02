import BlocklyComponent, {
  Block,
  Category,
  Field,
  Shadow,
  Value,
} from "./Blockly";

import "./blocks";
import "./generator/generator";
const win = global as any;

export default function CodeEditor(props: {
  defaultCode: string | undefined;
  onCodeChange: (code: string) => void;
  trashcan?: boolean;
  horizontalLayout?: boolean;
}) {
  const { onCodeChange, defaultCode, ...rest } = props;

  function saveCode() {
    props.onCodeChange && props.onCodeChange(win.generateXml());
  }

  // https://blog.csdn.net/benwdm/article/details/84910517
  return (
    <BlocklyComponent
      readOnly={false}
      trashcan={true}
      {...rest}
      media={(process.env.PUBLIC_PATH || "") + "static/media/"}
      move={{
        scrollbars: true,
        drag: true,
        wheel: true,
      }}
      initialXml={
        props.defaultCode ||
        `
<xml xmlns="https://developers.google.com/blockly/xml">
<block type="controls_repeat_ext" x="275" y="45">
  <value name="TIMES">
    <shadow type="math_number">
     <field name="NUM">5</field>
    </shadow>
  </value>
  <statement name="DO">
    <block type="moveRight"/>
  </statement>
</block>
</xml>
`
      }
      addChangeListener={saveCode}
    >
      <Category name="移动" categorystyle="procedure_category">
        <Block type="movenUp" />
        <Block type="moveDown" />
        <Block type="moveLeft" />
        <Block type="moveRight" />
        <Block type="agentMoveUp" />
        <Block type="agentMoveDown" />
        <Block type="agentMoveLeft" />
        <Block type="agentMoveRight" />

        <Block type="moveDirection" />

        <Block type="moveForward" />
        <Block type="moveBackward" />
        <Block type="moveAway" />
        <Block type="moveToward" />

        <Block type="turn" />
        <Block type="turnRandom" />
        <Block type="turnRight" />
        <Block type="turnLeft" />
      </Category>

      <Category name="动作" categorystyle="procedure_category">
        <Block type="wait" />
        <Block type="attack" />
        <Block type="addScore" />
        <Block type="arrowDown" />
        <Block type="arrowUp" />
        <Block type="clickDown" />
        <Block type="clickUp" />

        <Block type="use" />
        <Block type="destroyBlock" />
        <Block type="placeBlock" />
        <Block type="placeDirection" />
        <Block type="placeInFront" />

        <Block type="tillSoil" />
        <Block type="playSound" />
      </Category>

      <Category name="角色" categorystyle="procedure_category">
        <Block type="flashEntity" />
        <Block type="explodeEntity" />

        <Block type="spawnEntity" />
        <Block type="spawnEntityAt" />
        <Block type="destroyEntity" />
        <Block type="drop" />

        <Block type="ifBlockAhead" />
        <Block type="repeat" />
        <Block type="repeatRandom" />
      </Category>

      <Category name="事件" categorystyle="procedure_category">
        <Block type="registerEventCallback" />
        <Block type="onEventTriggered" />
        <Block type="isEventTriggered" />
      </Category>

      <Category name="环境" categorystyle="procedure_category">
        <Block type="startDay" />
        <Block type="startNight" />
      </Category>

      <Category name="逻辑" categorystyle="logic_category">
        <Block type="controls_ifelse" />
        <Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>

        <Block type="logic_compare" />
        <Block type="logic_operation" />
        <Block type="logic_operation" />
        <Block type="logic_negate" />
        <Block type="logic_boolean" />
        <Block type="logic_null" disabled="true" />
        <Block type="logic_ternary" />
      </Category>

      <Category name="文本" categorystyle="text_category">
        <Block type="text"></Block>
        <Block type="text_multiline"></Block>
        <Block type="text_charAt">
          <Value name="VALUE">
            <Block type="variables_get">
              <Field name="VAR">text</Field>
            </Block>
          </Value>
        </Block>
      </Category>
    </BlocklyComponent>
  );
}
