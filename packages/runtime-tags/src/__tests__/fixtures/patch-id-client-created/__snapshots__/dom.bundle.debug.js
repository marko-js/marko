// template.marko
const $template = "<button>add</button><!><!>";
const $walks = " b%c";
const $for_content__input_prefix__OR__headingId = /*@__PURE__*/ _fill_join_for("__tests__/template.marko_fill0", "input_prefix", /*@__PURE__*/ _or(5, ($scope) => _attr($scope["#input/2"], "title", $scope._.input_prefix + " " + $scope.headingId)), "#text/1");
const $for_content__input_prefix = /*@__PURE__*/ _for_closure("#text/1", $for_content__input_prefix__OR__headingId);
const $for_content__headingId = /*@__PURE__*/ _const("headingId", ($scope) => {
	_attr($scope["#h2/0"], "id", $scope.headingId);
	_attr($scope["#input/2"], "aria-describedby", $scope.headingId);
	$for_content__input_prefix__OR__headingId($scope);
});
const $for_content__setup = ($scope) => {
	$for_content__input_prefix._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__headingId($scope, _id($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/1", "<h2> </h2><input>", " D l ", $for_content__setup);
const $items = _let("items/6", ($scope) => $for($scope, [$scope.items, "key"]));
const $input_items = $items;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, { key: "c" }]);
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_prefix($scope, input.prefix);
};
const $input_prefix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_prefix", $for_content__input_prefix);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
