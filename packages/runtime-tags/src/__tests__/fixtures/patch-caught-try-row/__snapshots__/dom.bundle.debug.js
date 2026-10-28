// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
function check(fail) {
	if (fail) throw new Error("down");
}
const $try_content__row_fail = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_row_fail#1:4/init", /*@__PURE__*/ _closure_get("row_fail/6", ($scope) => _text($scope["#text/1"], check($scope._.row_fail)), 0, "__tests__/template.marko_3_row_fail#1:4/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__row_fail($scope);
	_text($scope["#text/0"], $scope._["#LoopKey"]);
};
const $catch_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $catch_content = _content("__tests__/template.marko_2*content", "Unavailable <!>", "b%", $catch_content__setup);
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<p><!><!></p>", "D%b%", $try_content__setup, 0, $catch_content);
const $for_content__setup = $for_content__try;
const $for_content__$params = ($scope, $params2) => $for_content__row_fail($scope, $params2[0]?.fail);
const $for_content__row_fail__closure = /*@__PURE__*/ _closure($try_content__row_fail);
const $for_content__row_fail = /*@__PURE__*/ _const("row_fail", $for_content__row_fail__closure);
const $for = /*@__PURE__*/ _for_of("#main/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "key"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
