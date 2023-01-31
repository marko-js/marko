import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, setSource as _setSource, contextClosure as _contextClosure, createRenderer as _createRenderer, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _other, attrs as _other_attrs, template as _other_template, walks as _other_walks } from "./components/other.marko";
const _other_attrs_inChild = _inChild(_other_attrs, "#childScope/0");
const _message$otherBody = _contextClosure("message", "packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko", [], (_scope, message) => _data(_scope["#text/0"], message));
const _otherBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_message$otherBody]);
const _setup = _scope => {
  _other(_scope["#childScope/0"]);
  _setSource(_scope["#childScope/0"], _other_attrs, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _otherBody)
  });
  _notifySignal(_scope, _other_attrs_inChild);
};
export const template = `${_other_template}`;
export const walks = /* beginChild, _other_walks, endChild */`/${_other_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/template.marko");