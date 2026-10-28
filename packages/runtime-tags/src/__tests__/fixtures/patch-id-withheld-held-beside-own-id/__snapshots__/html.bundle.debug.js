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
const $template$1 = /*@__PURE__*/ ((_w0) => `<input><label>own</label><button>clear</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b b b/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], ["__tests__/tags/card.marko_0"]], ["#childScope/3>", $setup$2]);
_shells({ "__tests__/tags/card.marko": /*@__PURE__*/ (() => `__tests__/tags/card.marko${_shell_marker($setup$1)};${((_w0) => ` b b b/${_w0}&`)("D%l")};${((_w0) => `<input><label>own</label><button>clear</button>${_w0}`)($template$2)}`)() });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const own = _id("own");
	let c = input.content;
	_html(`<input${_attr("id", own, $scope0_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope0_id, "#input/0", 0)}<label${_attr("for", own, $scope0_id, "PatchAttr:#label/1 for", 0, 0)}>own</label>${_el_resume($scope0_id, "#label/1", 0)}<button>clear</button>${_el_resume($scope0_id, "#button/2")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/3", 0);
	inner_default({ content: c });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", c, 1);
	_scope($scope0_id, { "#childScope/3": _existing_scope($childScope) }, "__tests__/tags/card.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; b D ;<input><label> </label>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content; b D ;<input><label> </label>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("uid");
			_html(`<input${_attr("id", uid, $scope2_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope2_id, "#input/0", 0)}<label${_attr("for", uid, $scope2_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope2_id, "#text/2", row.id, 1, $scope0_reason, 0)}</label>${_el_resume($scope2_id, "#label/1", 0)}`);
			_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
		}, $scope1_id, 2) });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
