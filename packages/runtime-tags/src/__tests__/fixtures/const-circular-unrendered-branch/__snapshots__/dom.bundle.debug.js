// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
const $if_content__a = /*@__PURE__*/ _const("a", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	$if_content__b($scope, $scope.a);
});
const $if_content__b = ($scope) => {
	_text($scope["#text/1"], $scope.a);
	_assert_hoist($scope.a);
};
const $if_content__setup = ($scope) => $if_content__a($scope, _hoist_read_error());
const $if = /*@__PURE__*/ _if("#text/1", "<div><!><!></div>", "D%b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
