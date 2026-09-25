// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
function $setup($scope) {
	$button($scope["#childScope/0"], {
		a11yText: "label",
		id: "kept"
	});
}
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $else_content__input_button_a11yText = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _attr($scope["#div/0"], "aria-label", $scope._.a11yText));
const $else_content__setup = ($scope) => {
	$else_content__input_button_a11yText._($scope);
	$else_content__rest._($scope);
};
const $else_content__rest__script = _script("__tests__/tags/child.marko_1_rest#6", ($scope) => _attrs_script($scope, "#div/0"));
const $else_content__rest = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	_attrs_partial_content($scope, "#div/0", $scope._.rest, { "aria-label": 1 });
	$else_content__rest__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", 0, 0, "<div></div>", " ", $else_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$button($scope, input.button);
};
const $button = ($scope, button) => {
	(({ a11yText, ...rest }) => $rest($scope, rest))(button || {});
	$a11yText($scope, button?.a11yText);
};
const $rest = /*@__PURE__*/ _const("rest", $else_content__rest);
const $a11yText = /*@__PURE__*/ _const("a11yText", $else_content__input_button_a11yText);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, "b%c", 0, $input);
