// tags/child.marko
const $template = "<em> </em><p> </p><!><button class=t>t</button>";
const $walks = "D lD l%b b";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D lD l%b ;<em> </em><p> </p><!><button class=t>t</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $cg__input_a = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<em>${_patch_text($scope0_id, "a", input.a, void 0, $scope0_reason, 1)}</em><p>${_patch_text($scope0_id, "b", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</i>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b0");
	$cg__input_a && _patch_write($scope0_id, "xh", input.b, !(_filled_guard($scope0_reason, 2) && $cg__input_a));
	_patch_join_init($scope0_id, "b2", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && "h", _filled_guard($scope0_reason, 1) && "g");
	_patch_fill($scope0_id, "vb3", open, 1);
	_scope($scope0_id, {
		g: input.a,
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		i: open
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.x,
		b: "n0"
	});
	_patch_child_end();
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: "m0",
		b: input.y
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
