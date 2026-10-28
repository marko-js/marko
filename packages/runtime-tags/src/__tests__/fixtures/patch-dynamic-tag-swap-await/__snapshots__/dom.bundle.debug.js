// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $inputas_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $inputas_content__input_p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_p#0:5/init", _closure_resume("__tests__/template.marko_1_input_p#0:5/subscribe", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_p", /*@__PURE__*/ _closure_get("input_p/6", ($scope) => $inputas_content__await_promise($scope, $scope._.input_p)), 0)));
const $inputas_content__setup = ($scope) => {
	$inputas_content__input_p($scope);
	$await_content($scope);
};
const $inputas_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $inputas_content__setup);
_content_resume($inputas_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputas_content);
const $input_as = ($scope, input_as) => $dynamicTag($scope, input_as, ($_) => ({ class: "box" }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_as($scope, input.as);
	$input_p($scope, input.p);
};
const $input_p__closure = /*@__PURE__*/ _closure($inputas_content__input_p);
const $input_p = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_p", $input_p__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
