// tags/outer.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%b%;<!><!><!><!>",
	b2: "b2 b6;D ;<p> </p>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $T__closures = /* @__PURE__ */ new Set();
	let T = input.tag;
	_dynamic_tag($scope0_id, "a", T, { title: T }, 0, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_text_resume($scope1_id, "a", T)}:${_text_resume($scope1_id, "b", input.label, _write_guard($scope0_reason, 1) * 2)}`);
		_subscribe($T__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ h: T }] : []));
	_if(() => {
		if (input.more) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", T)}</p>`);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["b2"], $scope0_reason, 2);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", T, 1);
	_scope($scope0_id, {
		f: input.label,
		h: _write_if($scope0_reason, 2) && T,
		i: $wi__input_label && $input_label__closures,
		j: $T__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb3", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.tag));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		tag: input.tag,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
