import "./foo";
import { b as c } from "./bar";
import bazComp from "./components/baz.marko";
import { setup as _bazComp, template as _bazComp_template, walks as _bazComp_walks } from "./components/baz.marko";
import { data as _data, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup = _scope => {
  _bazComp(_scope["#childScope/0"]);
  _bazComp(_scope["#childScope/1"]);
  _bazComp(_scope["#childScope/2"]);
  _data(_scope["#text/3"], c);
};
export const template = `<!>${_bazComp_template}${_bazComp_template}${_bazComp_template}<!>`;
export const walks = /* beginChild, _bazComp_walks, endChild, beginChild, _bazComp_walks, endChild, beginChild, _bazComp_walks, endChild, replace, over(1) */`D/${_bazComp_walks}&/${_bazComp_walks}&/${_bazComp_walks}&%b`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/import-tag/template.marko");