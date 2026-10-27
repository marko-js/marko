// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", input.a + input.b, void 0, (_filled_guard($scope0_reason, 4) && !$cg__input_items || _filled_guard($scope0_reason, 5) && !$cg__input_items ? _mask_group($scope0_reason, 2) : 1) << 1, 0)}</p>`);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
		_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 3);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_items ? _patch_fill($scope0_id, "vb3", input.a) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 4))), _filled_guard($scope0_reason, 5) && ($cg__input_items ? _patch_fill($scope0_id, "vb5", input.b) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 5))));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=l>l</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(158 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 11));
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: input.b,
		items: list
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: list,
		a: _existing_scope($childScope)
	});
}, 1);
