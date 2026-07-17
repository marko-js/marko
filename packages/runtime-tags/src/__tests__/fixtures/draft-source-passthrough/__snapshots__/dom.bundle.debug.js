// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $list = /*@__PURE__*/ _draft("list/4", ($scope) => $for($scope, [$scope.list]));
const $input_items = $list;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
