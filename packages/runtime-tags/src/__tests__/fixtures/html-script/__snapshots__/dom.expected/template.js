export const _template_ = "<script type=importmap></script><div> </div>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#script/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/2", (_scope, count) => {
  _$.textContent(_scope["#script/0"], `
  {
    "imports": {
      "${count}": "https://markojs.com",
    }
  }
`);
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);