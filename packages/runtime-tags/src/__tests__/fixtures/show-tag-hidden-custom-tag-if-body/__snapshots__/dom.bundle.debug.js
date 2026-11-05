// tags/conditional.marko
const $template$1 = "<!><!><i>tail</i>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if = /*@__PURE__*/ _if("#text/0", "<b>B</b>");
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => $input_on($scope, input.on);
var conditional_default = /*@__PURE__*/ _template("__tests__/tags/conditional.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=t>t</button><button id=i>i</button><div id=c>x <!>${_w0}<!> y</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b bDb%b/${_w0}&%l`)("b%c");
const $show = /*@__PURE__*/ _show("#text/4", "#text/2");
const $visible = /*@__PURE__*/ _let("visible/5", ($scope) => $show($scope, $scope.visible));
const $inner = /*@__PURE__*/ _let("inner/6", ($scope) => $input_on($scope["#childScope/3"], $scope.inner));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$visible($scope, !$scope.visible);
	});
	_on($scope["#button/1"], "click", function() {
		$inner($scope, !$scope.inner);
	});
});
function $setup($scope) {
	$visible($scope, false);
	$inner($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
