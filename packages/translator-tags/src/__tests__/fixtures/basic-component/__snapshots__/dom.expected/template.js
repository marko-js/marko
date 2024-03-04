import { setup as _counter, template as _counter_template, walks as _counter_walks } from "./components/counter.marko";
const _setup = _scope => {
  _counter(_scope["#childScope/0"]);
};
export const template = `<div>${_counter_template}</div>`;
export const walks = /* next(1), beginChild, _counter_walks, endChild, out(1) */`D/${_counter_walks}&l`;
export const setup = _setup;
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-component/template.marko");