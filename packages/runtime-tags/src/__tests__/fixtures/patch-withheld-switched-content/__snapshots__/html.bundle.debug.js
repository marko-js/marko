// tags/inner.marko
const $template$2 = "<p><!></p>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/inner.marko": "__tests__/tags/inner.marko;D%;<p><!></p>" });
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</p>");
	_scope($scope0_id, {}, "__tests__/tags/inner.marko", 0);
});

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>switch</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], ["__tests__/tags/card.marko_0"]], ["#childScope/1>", $setup$2]);
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content",
	"__tests__/tags/card.marko": /*@__PURE__*/ (() => `__tests__/tags/card.marko${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)("D%l")};${((_w0) => `<button>switch</button>${_w0}`)($template$2)}`)()
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Other = { content: _content_resume("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	let c = input.content;
	_html(`<button>switch</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	inner_default({ content: c });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", c, 1);
	_scope($scope0_id, {
		Other,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/card.marko", 0, { Other: "1:9" }) || _content_withhold(input.content);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:3/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_label/4": $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
