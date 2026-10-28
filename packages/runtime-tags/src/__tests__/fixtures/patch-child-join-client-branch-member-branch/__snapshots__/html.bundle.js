// tags/child.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%b%;<!><!><!><!>",
	b1: "b1;D ;<p> </p>",
	b2: "b2;D ;<em> </em>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_other = _write_guard($scope0_reason, 7), $cg__input_a = _client_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "b0", $scope0_reason, 1, _filled_guard($scope0_reason, 5) && ">f", _filled_guard($scope0_reason, 6) && ">g");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 4);
	_if(() => {
		if (input.other) {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "a", input.a, void 0, $scope0_reason, 5)}</em>`);
			$cg__input_a && _patch_init($scope2_id, "b3");
			_scope($scope2_id, { _: _write_if($scope0_reason, 5) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_other, void 0, void 0, void 0, ["b2"], $scope0_reason, 7);
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "vb6", input.b) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.b, !(_filled_guard($scope0_reason, 6) && $cg__input_a));
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 5)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 7)) && input.b
	}) || _filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "vb5", input.a) : (_client_guard($scope0_reason, 6) || _client_guard($scope0_reason, 7)) && _patch_fill($scope0_id, "vb4", input.a, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=o>o</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	let o = true;
	_set_scope_reason(41918 | _mask_group($scope0_reason, 2) << 11);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		show: s,
		other: o
	});
	_patch_child_end();
	_set_scope_reason(33248 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 9 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 13));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b,
		show: input.show,
		other: o
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=o>o</button>${_el_resume($scope0_id, "d")}<button class=s>s</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		k: n,
		l: s,
		m: o,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
