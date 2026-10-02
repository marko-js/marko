// template.marko
const $template = "<div><!> <!> <!></div><button>inc</button>";
const $walks = "D%c%c%l b";
const $obj = /*@__PURE__*/ _let("obj/6", ($scope) => {
	$p($scope, $scope.obj);
	$obj_a($scope, $scope.obj?.a);
});
const $p = ($scope) => {
	_text($scope["#text/1"], JSON.stringify($scope.obj));
};
const $obj_a__script = _script("__tests__/template.marko_0_obj_a#7", ($scope) => _on($scope["#button/3"], "click", function() {
	$obj($scope, { a: $scope.obj_a + 1 });
}));
const $obj_a = /*@__PURE__*/ _const("obj_a", ($scope) => {
	_text($scope["#text/0"], $scope.obj_a);
	$obj_a__script($scope);
});
function $setup($scope) {
	$obj($scope, { a: 1 });
}
const $user_name = ($scope, user_name) => _text($scope["#text/2"], user_name);
const $input = ($scope, input) => $user($scope, input.user);
const $user = ($scope, user) => $user_name($scope, user?.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
