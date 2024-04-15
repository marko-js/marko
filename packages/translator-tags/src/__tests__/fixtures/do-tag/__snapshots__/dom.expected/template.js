function fromStatic() {
  console.log("from static");
}
import { value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _fromConst = /* @__PURE__ */_value("fromConst", (_scope, fromConst) => fromConst(_scope));
const _setup = _scope => {
  console.log("from block");
  fromStatic(_scope);
  _fromConst(_scope, function () {
    console.log("from const");
  });
};
export const template = "<!><!>";
export const walks = /*  */"DD";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");