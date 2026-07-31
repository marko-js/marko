// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__item_name = ($scope, item_name) => _text($scope, "#text/0", item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div> </div>", "D ", 0, $for_content__$params);
const $input_items__OR__input_useKey = /*@__PURE__*/ _or(5, ($scope) => $for($scope, [$scope.input_items, $scope.input_useKey && "id"]));
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__OR__input_useKey);
const $input_useKey = /*@__PURE__*/ _const("input_useKey", $input_items__OR__input_useKey);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_useKey($scope, input.useKey);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
