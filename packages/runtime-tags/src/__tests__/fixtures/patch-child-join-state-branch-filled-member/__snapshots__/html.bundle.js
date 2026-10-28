// tags/child.marko
const $template = "<!><!><!><button class=t>t</button>";
const $walks = "b%b%b b";
const $setup$1 = [[], ["b3"]];
_shells({
	b: "b !b3;b%b%b ;<!><!><!><button class=t>t</button>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "b0", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && ">g", _filled_guard($scope0_reason, 4) && ">h");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["b1"], $scope0_reason, 2);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "b2");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b3");
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "vb6", input.b) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.b, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3)));
	_patch_fill($scope0_id, "vb7", open, 1);
	_scope($scope0_id, {
		g: input.a,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		i: open
	}) || _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb5", input.a) : _patch_fill($scope0_id, "vb4", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b b`)($walks)};${((_w0) => `<!>${_w0}<button class=n>+</button><button class=s>s</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(574 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		show: s
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "b")}<button class=s>s</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: n,
		h: s,
		a: _existing_scope($childScope)
	});
}, 1);
