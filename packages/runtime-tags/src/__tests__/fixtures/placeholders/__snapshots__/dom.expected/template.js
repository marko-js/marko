export const _template_ = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script></script><style></style></div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1), next(1), over(1), replace, over(2), replace, over(1), replace, over(1), get, over(1), get, out(1) */"%bD lDb%c%b%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_x_ = /* @__PURE__ */_$.value("input_x", (_scope, input_x) => {
  _$.data(_scope["#text/0"], input_x);
  _$.data(_scope["#text/1"], input_x);
  _$.data(_scope["#text/2"], input_x);
  _$.html(_scope, input_x, "#text/3");
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_x_(_scope, input.x));
export function _setup_(_scope) {
  _$.html(_scope, "Hello HTML <span>hi</span>", "#text/4");
  _$.textContent(_scope["#script/5"], `
    ${"'Hello <b> </script>'"}
  `);
  _$.textContent(_scope["#style/6"], `
    ${".test { content: 'Hello <b> </style>' }"}
  `);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);