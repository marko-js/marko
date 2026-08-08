// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $name__script = _script("__tests__/tags/child.marko_0_name#3", ($scope) => {
	_lifecycle($scope, { onDestroy: function() {
		console.log(`lifecycle ${$scope.name} destroyed`);
	} });
	$signal($scope, 0).onabort = () => console.log(`effect ${$scope.name} destroyed`);
});
const $name = /*@__PURE__*/ _const("name", ($scope) => {
	_text($scope["#text/0"], $scope.name);
	$signalReset($scope, 0);
	$name__script($scope);
});
const $input = ($scope, input) => $name($scope, input.name);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<div></div>";
const $walks = " b";
const $for_content__item = ($scope, item) => $name($scope["#childScope/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__for($scope, [$scope._.items]));
const $if_content__setup = ($scope) => {
	$if_content__items._($scope);
	$name($scope["#childScope/0"], "outer");
};
const $if = /*@__PURE__*/ _if("#div/0", /*@__PURE__*/ ((_w0) => `<section>${_w0}<!></section>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/1", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $items = /*@__PURE__*/ _let("items/2");
function $setup($scope) {
	$show($scope, true);
	$items($scope, ["a", "b"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
