// tags/child.marko
const $template$1 = "<p> </p><!><button class=t>t</button>";
const $walks$1 = "D l%b b";
const $setup$2 = [[], ["b1"]];
_shells({ b: "b !b1;D l%b ;<p> </p><!><button class=t>t</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<p>${_text_resume($scope0_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<div></div>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	$cg__input_a && _patch_write($scope0_id, "xg", input.b, !(_filled_guard($scope0_reason, 2) && $cg__input_a));
	_patch_init_entry($scope0_id, "b3", [_filled_guard($scope0_reason, 1) && "f", _filled_guard($scope0_reason, 2) && "g"], $scope0_reason, 0);
	_patch_fill($scope0_id, "vb4", open, 1);
	_scope($scope0_id, {
		f: input.a,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		i: open
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 1));
});

// tags/mid.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason(16 | ((2 | _mask_group($scope0_reason, 0)) << 1 | _mask_group($scope0_reason, 0) << 5));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: $global$1.x,
		b: input.b
	});
	_patch_child_end();
	_fill_global_subscribe("c0", $scope0_id);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button class=n>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	mid_default({ b: n });
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: n,
		a: _existing_scope($childScope)
	});
}, 1);
