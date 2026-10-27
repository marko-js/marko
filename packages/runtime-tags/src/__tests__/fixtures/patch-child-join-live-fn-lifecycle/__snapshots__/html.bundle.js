// tags/child.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_b = _server_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $sg__input_a = _server_guard($scope0_reason, 1), $cg__input_b = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.a, !$sg__input_a);
	const fmt = _bind_resume(() => input.a + "!", "b0", $scope0_id);
	_html(`<p>${_patch_text($scope0_id, "a", fmt() + input.b, void 0, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "b1", 1, (_filled_guard($scope0_reason, 2) || _filled_guard($scope0_reason, 1)) && ($cg__input_b || $cg__input_a ? 2 : 1), _filled_guard($scope0_reason, 2) && "e", _filled_guard($scope0_reason, 1) && "f");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	_scope($scope0_id, {
		d: input.a,
		e: input.b,
		f: fmt
	}) || (_filled_guard($scope0_reason, 2) && ($cg__input_a ? _patch_fill($scope0_id, "vb2", input.b, !$sg__input_b) : _patch_write($scope0_id, "xe", input.b, !$sg__input_b)), _filled_guard($scope0_reason, 1) && ($cg__input_b ? _patch_fill($scope0_id, "vb3", fmt, !$sg__input_a) : _patch_write($scope0_id, "xf", fmt, !$sg__input_a)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l")};${((_w0, _w1) => `${_w0}${_w1}<button>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
