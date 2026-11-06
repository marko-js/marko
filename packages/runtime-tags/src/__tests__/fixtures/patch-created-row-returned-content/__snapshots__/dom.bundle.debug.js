// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $for_content__input_tag__OR__L = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_tag#0:4_L#3/setup", 4, ($scope) => $for_content__dynamicTag($scope, $scope._.input_tag, ($_) => ({ content: $scope.L })), 1, "#scopeOffset/1");
const $for_content__input_tag = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_tag#0:4/setup", "#text/0", $for_content__input_tag__OR__L);
const $for_content__setup = ($scope) => {
	$for_content__input_tag._($scope);
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $for_content__L);
};
const $for_content__L = /*@__PURE__*/ _const("L", $for_content__input_tag__OR__L);
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&b%c`)(""), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_tag($scope, input.tag);
};
const $input_tag = /*@__PURE__*/ _const("input_tag", $for_content__input_tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/maker.marko
const $template = "";
const $walks = "";
const $Label_content__setup__script = _script("__tests__/tags/maker.marko_1", ($scope) => _on($scope["#em/0"], "click", function() {
	document.title = "made";
}));
const $Label_content__setup = $Label_content__setup__script;
const $Label_content = _content("__tests__/tags/maker.marko_1*content", "<em>made</em>", " ", $Label_content__setup);
const $Label = /*@__PURE__*/ _const("Label", ($scope) => _return($scope, $scope.Label));
function $setup($scope) {
	$Label($scope, { content: $Label_content($scope) });
}
var maker_default = /*@__PURE__*/ _template("__tests__/tags/maker.marko", "", "", /*@__PURE__*/ _return_setup($setup));
