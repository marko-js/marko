// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $await_content__n__OR__value = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_n#1:2_value#2/init", 3, ($scope) => _text($scope["#text/0"], $scope.value + $scope._.n));
const $await_content__n = /*@__PURE__*/ _closure_get("n/6", $await_content__n__OR__value);
const $await_content__setup = $await_content__n;
const $await_content__value = /*@__PURE__*/ _const("value", $await_content__n__OR__value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__input_p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_p#0:4/init", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__await_promise($scope, $scope._.input_p)));
const $for_content__setup = ($scope) => {
	$for_content__input_p._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__n($scope, $params2[0]);
const $for_content__n = /*@__PURE__*/ _const("n");
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
function $setup($scope) {
	$setup__script($scope);
	$for($scope, [[1, 2]]);
}
const $input = ($scope, input) => $input_p($scope, input.p);
const $input_p = /*@__PURE__*/ _const("input_p", $for_content__input_p);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
