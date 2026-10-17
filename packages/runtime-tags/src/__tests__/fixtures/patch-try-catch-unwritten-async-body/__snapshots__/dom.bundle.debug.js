// template.marko
const $template = "<main><p> </p><!></main>";
const $walks = "E l%l";
const $catch_content = _content("__tests__/template.marko_2*content", "<s>caught</s>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em>static</em>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup__$global_promise = /*@__PURE__*/ _fill_global_join("promise", "__tests__/template.marko_1_$global_promise#0:9", ($scope) => $try_content__await_promise($scope, $scope.$global.promise));
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__setup__$global_promise($scope);
};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
