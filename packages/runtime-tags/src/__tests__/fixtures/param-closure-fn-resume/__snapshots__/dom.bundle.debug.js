// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__bar = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.bar("foo")));
const $if_content__setup = $if_content__bar;
const $bar2 = /*@__PURE__*/ _const("bar", $if_content__bar);
const $input_c = /*@__PURE__*/ _const("input_c", ($scope) => $bar2($scope, $bar($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_c($scope, input.c);
	$input_show($scope, input.show);
};
const $bar = ($scope) => function(test) {
	return $scope.input_c + test;
};
_resumed["__tests__/tags/child.marko_0/bar"] = $bar;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $input_show($scope["#childScope/0"], $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$input_c($scope["#childScope/0"], "c");
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
