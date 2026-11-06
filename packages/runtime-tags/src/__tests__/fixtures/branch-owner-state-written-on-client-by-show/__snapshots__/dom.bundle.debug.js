// template.marko
const $template = "<div></div><p>shown</p><!><!>";
const $walks = " c%c";
const $if_content__open = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/1"], $scope._.open));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope._, !$scope._.open);
}));
const $if_content__setup = ($scope) => {
	$if_content__open._($scope);
	$if_content__setup__script($scope);
};
const $show = /*@__PURE__*/ _show("#text/1");
const $open = /*@__PURE__*/ _let("open/5", ($scope) => {
	_attr_class($scope["#div/0"], `c${$scope.open}`);
	$show($scope, $scope.open);
	$if_content__open($scope);
});
function $setup($scope) {
	$open($scope, true);
}
const $if = /*@__PURE__*/ _if("#div/0", "<button> </button>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
