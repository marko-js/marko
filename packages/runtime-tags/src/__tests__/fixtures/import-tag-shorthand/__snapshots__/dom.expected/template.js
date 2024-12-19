export const _template_ = `<!>${_BazComp_template}${_BazComp_template}<!>`;
export const _walks_ = /* beginChild, _BazComp_walks, endChild, beginChild, _BazComp_walks, endChild */`D/${_BazComp_walks}&/${_BazComp_walks}&D`;
import BazComp from "./tags/baz.marko";
import { _setup_ as _BazComp, _template_ as _BazComp_template, _walks_ as _BazComp_walks } from "./tags/baz.marko";
export function _setup_(_scope) {
  _BazComp(_scope["#childScope/0"]);
  _BazComp(_scope["#childScope/1"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);