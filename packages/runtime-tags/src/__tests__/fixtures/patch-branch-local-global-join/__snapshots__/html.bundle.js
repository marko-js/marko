// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = $global$1.g + "!";
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b + c, 1, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
			_fill_global_subscribe("b0", $scope1_id);
			_client_guard($scope0_reason, 0) && _patch_write($scope1_id, "wb", c, 1);
			_client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_init($scope1_id, "b1");
			_scope($scope1_id, {
				b: _unfilled_if($scope0_reason, 0) && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}) || (_filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb4", input.a) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "vb3", input.a, !_server_guard($scope0_reason, 3))), _filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "vb6", input.b) : _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vb5", input.b, !_server_guard($scope0_reason, 4))));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | (_mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
