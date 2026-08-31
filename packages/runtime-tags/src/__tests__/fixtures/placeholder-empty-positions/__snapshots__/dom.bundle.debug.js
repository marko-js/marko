// template.marko
const $template = "<div>d</div><!><!><!><input> <button>set</button>";
const $walks = "b%b%b%b b b b";
const $for_content__a = /*@__PURE__*/ _for_closure("#text/2", ($scope) => _text($scope["#text/0"], $scope._.a));
const $for_content__setup = $for_content__a;
const $if_content__a = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.a));
const $if_content__setup = $if_content__a;
const $a = /*@__PURE__*/ _let("a/6", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	_attr_input_value($scope, "#input/3", $scope.a, $valueChange($scope));
	_text($scope["#text/4"], $scope.a);
	$if_content__a($scope);
	$for_content__a($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", " ", " ", $if_content__setup);
const $for = /*@__PURE__*/ _for_of("#text/2", "<!> tail", "%", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/3");
	_on($scope["#button/5"], "click", function() {
		$a($scope, "filled");
	});
});
function $setup($scope) {
	$a($scope, "");
	$if($scope, true ? 0 : 1);
	$for($scope, [[1]]);
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_a) => {
	$a($scope, _new_a);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
