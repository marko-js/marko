// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/template.marko_2_input_fail#0:4/subscribe"));
const $try_content__setup = $try_content__input_fail;
const $catch_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:3/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _attr_input_value($scope, "#input/1", $scope._.input_label, $valueChange), 0, "__tests__/template.marko_1_input_label#0:3/subscribe"), 0));
const $catch_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/1"));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b> </b><input>", "D l ", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_fail($scope, input.fail);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
function $valueChange(v) {
	console.log("changed", v);
}
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
