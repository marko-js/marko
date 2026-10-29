// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $for_content__input_label__OR__count__OR__item = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_label#0:6_count#0:7_item#2/init", 4, ($scope) => _text($scope["#text/0"], $scope._.input_label + " " + $scope.item + ": " + $scope._.count), 2);
const $for_content__input_label__OR__item__script = _script("__tests__/template.marko_1_input_label#0:6_item#2", ($scope) => document.body.dataset[$scope.item] = $scope._.input_label);
const $for_content__input_label__OR__item = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_label#0:6_item#2/init", 3, $for_content__input_label__OR__item__script);
const $for_content__input_label = /*@__PURE__*/ _for_closure("#text/0", ($scope) => {
	$for_content__input_label__OR__count__OR__item($scope);
	$for_content__input_label__OR__item($scope);
});
const $for_content__setup = ($scope) => {
	$for_content__input_label._($scope);
	$for_content__count._($scope);
};
const $for_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _for_closure("#text/0", $for_content__input_label__OR__count__OR__item));
_fill_run("__tests__/template.marko_fill1", "item", /*@__PURE__*/ _fill_mark("item", $for_content__input_label__OR__count__OR__item));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__input_label__OR__count__OR__item($scope);
	$for_content__input_label__OR__item($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$for_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_label($scope, input.label);
};
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", $for_content__input_label));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
