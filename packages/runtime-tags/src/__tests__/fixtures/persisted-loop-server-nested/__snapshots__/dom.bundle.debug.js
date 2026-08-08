// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content2__item = /*@__PURE__*/ _resume("__tests__/template.marko_2_item/init", /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.item)));
const $for_content2__setup = $for_content2__item;
const $for_content2__s = ($scope, s) => _text($scope["#text/1"], s);
const $for_content2__$params = ($scope, $params3) => $for_content2__s($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<li><!><!></li>", "D%b%", $for_content2__setup, $for_content2__$params);
const $for_content__input_list = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_list", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__for($scope, [$scope._.input_list])));
const $for_content__setup = $for_content__input_list;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content2__item);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, "b"]);
}));
function $setup($scope) {
	$items($scope, ["a"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_list($scope, input.list);
const $input_list = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_list", $for_content__input_list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
