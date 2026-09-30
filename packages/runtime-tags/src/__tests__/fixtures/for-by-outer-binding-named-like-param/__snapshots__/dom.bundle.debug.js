// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__key_id = ($scope, key_id) => _text($scope["#text/0"], key_id);
const $for_content__$params = ($scope, $params2) => $for_content__key_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#text/0", "<span> </span>", "D ", 0, $for_content__$params);
const $input_items__OR__key = /*@__PURE__*/ _or(5, ($scope) => $for($scope, [$scope.input_items, $scope.key]));
const $key = /*@__PURE__*/ _const("key", $input_items__OR__key);
function $setup($scope) {
	$key($scope, "id");
}
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__OR__key);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
