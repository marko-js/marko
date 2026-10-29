// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko;b%;<!><!><!>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_dynamic_tag($scope0_id, "#text/0", T, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0);
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0) || _content_withhold(input.fmt);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)("b%c")};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<i>prefix</i>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.more) {
			const $scope2_id = _scope_id();
			_html("<i>prefix</i>");
			_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_label#0:5/subscribe");
	}, $scope0_id, 2) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	outer_default({ fmt: Body });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
