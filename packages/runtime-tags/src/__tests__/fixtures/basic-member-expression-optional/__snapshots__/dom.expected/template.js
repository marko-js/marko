export const $template = "<div> </div><div> </div><button>Update</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD l b";
const names = ["Dylan", "Michael", "Ryan", "Luke"];
import * as _ from "@marko/runtime-tags/debug/dom";
const $index__script = _._script("__tests__/template.marko_0_index", ($scope, {
  index
}) => _._on($scope["#button/2"], "click", function () {
  $index($scope, index = index === names.length - 1 ? -1 : index + 1);
  $user($scope, index !== -1 && {
    id: index,
    name: names[index]
  });
}));
const $index = /* @__PURE__ */_._let("index/3", $index__script);
const $user = /* @__PURE__ */_._let("user/4", ($scope, user) => {
  $user_id($scope, user?.id);
  $user_name($scope, user?.name);
});
export function $setup($scope) {
  $index($scope, -1);
  $user($scope, undefined);
}
const $user_id = /* @__PURE__ */_._const("user_id", ($scope, user_id) => _._text($scope["#text/0"], user_id));
const $user_name = /* @__PURE__ */_._const("user_name", ($scope, user_name) => _._text($scope["#text/1"], user_name));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);