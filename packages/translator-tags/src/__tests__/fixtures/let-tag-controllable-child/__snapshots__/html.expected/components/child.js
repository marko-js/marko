import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const state = input.value;
  const _state_change = input.valueChange;
  const otherState = input["value"];
  const _otherState_change = input["value" + "Change"];
  _write(`<button>${_escapeXML(input.value)}${_markResumeNode(_scope0_id, "#text/1")}|<!>${_escapeXML(state)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/0")}<button>${_escapeXML(input.value)}${_markResumeNode(_scope0_id, "#text/4")}|<!>${_escapeXML(otherState)}${_markResumeNode(_scope0_id, "#text/5")}</button>${_markResumeNode(_scope0_id, "#button/3")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__otherState_change_otherState");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__state_change_state");
  _writeScope(_scope0_id, {
    "_state_change": _state_change,
    "state": state,
    "_otherState_change": _otherState_change,
    "otherState": otherState
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko");