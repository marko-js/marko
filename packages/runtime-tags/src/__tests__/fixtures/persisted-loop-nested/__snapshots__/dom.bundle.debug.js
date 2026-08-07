// template.marko
const $template = "<main><!><button class=o>o</button><button class=i>i</button></main>";
const $walks = "D%b b l";
const $for_content2__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/2"], $scope._._.input_note), ($scope) => $scope._._), _closure);
const $for_content2__setup = ($scope) => {
	$for_content2__input_note($scope);
	$for_content2__o._($scope);
};
const $for_content2__o = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.o));
const $for_content2__i = ($scope, i) => _text($scope["#text/1"], i);
const $for_content2__$params = ($scope, $params3) => $for_content2__i($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<div><!><!>: <!></div>", "D%b%c%", $for_content2__setup, $for_content2__$params);
const $for_content__inner = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__for($scope, [$scope._.inner]));
const $for_content__setup = $for_content__inner;
const $for_content__$params = ($scope, $params2) => $for_content__o($scope, $params2[0]);
const $for_content__o = /*@__PURE__*/ _const("o", $for_content2__o);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $outer = /*@__PURE__*/ _let("outer/6", ($scope) => $for($scope, [$scope.outer]));
const $inner = /*@__PURE__*/ _let("inner/7", $for_content__inner);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$outer($scope, [...$scope.outer, "b"]);
	});
	_on($scope["#button/2"], "click", function() {
		$inner($scope, [...$scope.inner, "y"]);
	});
});
function $setup($scope) {
	$outer($scope, ["a"]);
	$inner($scope, ["x"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note__closure = /*@__PURE__*/ _closure($for_content2__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
