// template.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
const $a = /*@__PURE__*/ _const("a", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	$b($scope, $scope.a);
});
const $b = ($scope) => {
	_text($scope["#text/1"], $scope.a);
	_assert_hoist($scope.a);
};
function $setup($scope) {
	$a($scope, _hoist_read_error());
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
