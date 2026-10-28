// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $n = ($scope, n) => _text($scope["#text/0"], n);
const $input_count = ($scope, input_count) => $n($scope, input_count + 10);
const $input$1 = ($scope, input) => $input_count($scope, input.count);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_count($scope["#childScope/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
