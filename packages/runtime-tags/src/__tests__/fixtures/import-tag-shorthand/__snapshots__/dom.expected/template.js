export const _template = `<!>${_BazComp_template}${_BazComp_template}<!>`;
export const _walks = /* beginChild, _BazComp_walks, endChild, beginChild, _BazComp_walks, endChild */`D/${_BazComp_walks}&/${_BazComp_walks}&D`;
import BazComp from "./tags/baz.marko";
import { _setup as _BazComp, _template as _BazComp_template, _walks as _BazComp_walks } from "./tags/baz.marko";
export function _setup(_scope) {
  _BazComp(_scope["#childScope/0"]);
  _BazComp(_scope["#childScope/1"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);