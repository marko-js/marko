export const $template = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script></script><style></style></div>";
export const $walks = /* replace, over(1), next(1), get, out(1), next(1), over(1), replace, over(2), replace, over(1), replace, over(1), get, over(1), get, out(1) */"%bD lDb%c%b%b b l";
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_x = /* @__PURE__ */_._const("input_x", $scope => {
  _._text($scope["#text/0"], $scope.input_x);
  _._text($scope["#text/1"], $scope.input_x);
  _._text($scope["#text/2"], $scope.input_x);
  _._html($scope, $scope.input_x, "#text/3");
});
export function $setup($scope) {
  _._html($scope, "Hello HTML <span>hi</span>", "#text/4");
  _._text_content($scope["#script/5"], `
    ${"'Hello <b> </script>'"}
  `);
  _._text_content($scope["#style/6"], `
    ${".test { content: 'Hello <b> </style>' }"}
  `);
}
export const $input = /* @__PURE__ */_._const("input", $scope => $input_x($scope, $scope.input.x));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);