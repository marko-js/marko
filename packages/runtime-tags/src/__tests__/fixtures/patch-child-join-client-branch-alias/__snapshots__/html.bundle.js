// tags/child.marko
const $template = "<em> </em><!><!>";
const $walks = "D l%c";
const $setup$1 = [[], []];
_shells({
	b: "b !;D l%;<em> </em><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.a, void 0, $scope0_reason, 3)}</em>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["b1"], $scope0_reason, 4);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b
	}) || (_filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb3", input.a) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 3))), _filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "vb5", input.b) : _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 5))));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(2622 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(614 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b,
		show: s
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
