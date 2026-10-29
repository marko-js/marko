// tags/outer.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_dynamic_tag($scope0_id, "a", T, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0);
	_scope($scope0_id, {}) || _content_withhold(input.fmt);
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	"~a0": "~a0;D ;<p> </p>",
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (v) => {
		const $scope1_id = _scope_id();
		const Body = { content: _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<p>${_text_resume($scope2_id, "a", v + input.label, 1, $scope0_reason, 0)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_items__OR__input_label && _scope_with_id($scope1_id) }));
		}, $scope1_id, 2) };
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		outer_default({ fmt: Body });
		_patch_child_end();
		_scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && v,
			_: $wi__input_items__OR__input_label && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, (v) => v, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
