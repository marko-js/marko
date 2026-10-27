// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 1));
		const j = input.a + item;
		_html(`<p>${_patch_text($scope1_id, "a", j, void 0, $scope0_reason, 0)}</p>`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "b0", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "c");
		_scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "vb2", input.a) : $cg__input_items && _patch_write($scope0_id, "xe", input.a, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.x,
		items: input.items
	});
	_patch_child_end();
	_set_scope_reason(38 | _mask_group($scope0_reason, 2) << 3);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: "m0",
		items: input.items
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
