// template.marko
const $template = "<p></p><button>inc</button>";
const $walks = " b b";
const $for_content__show = /*@__PURE__*/ _show("#text/3", "#text/1");
const $for_content__input_show = /*@__PURE__*/ _for_closure("#p/0", ($scope) => $for_content__show($scope, $scope._.input_show), 6);
const $for_content__setup = ($scope) => {
	$for_content__input_show._($scope);
	$for_content__n._($scope);
};
const $for_content__n = /*@__PURE__*/ _for_closure("#p/0", ($scope) => _text($scope["#text/0"], $scope._.n), 7);
const $for_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]);
const $n = /*@__PURE__*/ _let("n/5", $for_content__n);
const $for = /*@__PURE__*/ _for_of_unkeyed("#p/0", "<!><!><!><!><!>", "%b%b%b%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$for($scope, [[1, 2]]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_show($scope, input.show);
const $input_show = /*@__PURE__*/ _const("input_show", $for_content__input_show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
