// template.marko
const $template = "<div>x</div><!><!>";
const $walks = " b%c";
const $try_content__input_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_id#0:5/init", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_2_input_id#0:5/subscribe")));
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_1_input_id#0:5/subscribe"), 0);
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_1*content", "loading <!>", "b%", $placeholder_content__setup);
const $input_which__OR__input_id__script = _script("__tests__/template.marko_0_input_which#4_input_id#5", ($scope) => _attrs_script($scope, "#div/0"));
const $input_which__OR__input_id = /*@__PURE__*/ _fill("| __tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_which#4_input_id#5/init", 6, ($scope) => {
	$input_which__OR__input_id__script($scope);
	_attrs($scope, "#div/0", $scope.input_which ? {
		class: "one",
		title: $scope.input_id
	} : { class: "two" });
}));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_id);
const $input_id__closure = /*@__PURE__*/ _closure($placeholder_content__input_id, $try_content__input_id);
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_id", ($scope) => {
	$input_id__closure($scope);
	$input_which__OR__input_id($scope);
}, /*@__PURE__*/ _fill_mark("input_id", $input_id__closure));
const $try = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_id($scope, input.id);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
