// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_dynamic_tag($scope0_id, "a", T, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0);
	_scope($scope0_id, {}) || _content_withhold(input.fmt);
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	"~a1": "~a1;D ;<p> </p>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)("b%c")};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	a0: "a0,<i>prefix</i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.more) {
			const $scope2_id = _scope_id();
			_html("<i>prefix</i>");
			_write_if($scope0_reason, 0) && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	const Body = { content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a2");
	}, $scope0_id, 2) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	outer_default({ fmt: Body });
	_patch_child_end();
	_scope($scope0_id, {
		h: $wi__input_label && $input_label__closures,
		b: _existing_scope($childScope)
	});
}, 1);
