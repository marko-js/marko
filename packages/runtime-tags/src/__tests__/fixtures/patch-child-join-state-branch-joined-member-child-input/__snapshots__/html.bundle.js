// tags/cell.marko
const $template$1 = "<em> </em>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<em> </em>" });
var cell_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.v, void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["b>", $setup$2]);
_shells({
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&`)("D l")};${((_w0) => `<!><!>${_w0}`)($template$1)}`)(),
	c1: "c1;D ;<p> </p>"
});
var child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const c = input.a + "-" + input.d;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 2)}</p>`);
			_patch_join_init($scope1_id, "c0", $scope0_reason, 2, _filled_guard($scope0_reason, 4) && ">e", _filled_guard($scope0_reason, 7) && ">i");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 6), void 0, void 0, void 0, ["c1"], $scope0_reason, 6);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	cell_default({ v: c });
	_patch_child_end();
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "vc2", input.a) : _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.a, !(_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 5) || _client_guard($scope0_reason, 7))));
	$cg__input_a && _patch_write($scope0_id, "xf", input.d, !(_filled_guard($scope0_reason, 5) && $cg__input_a));
	_filled_guard($scope0_reason, 7) && $cg__input_show ? _patch_fill($scope0_id, "vc3", input.b) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xi", input.b, !(_filled_guard($scope0_reason, 7) && $cg__input_a));
	_patch_join_init($scope0_id, "c4", $scope0_reason, 0, _filled_guard($scope0_reason, 4) && "e", _filled_guard($scope0_reason, 5) && "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.d,
		i: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.b,
		b: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(43262 | _mask_group($scope0_reason, 3) << 9);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n,
		d: n,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 3) << 9 | _mask_group($scope0_reason, 4) << 11 | _mask_group($scope0_reason, 5) << 13 | _mask_group($scope0_reason, 4) << 15);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b,
		d: input.b,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
