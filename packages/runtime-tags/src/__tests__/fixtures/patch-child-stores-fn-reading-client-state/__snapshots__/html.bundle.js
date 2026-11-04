// tags/card.marko
const $setup$1 = [[], []];
_shells({ b: "b !," });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_fn = _server_guard($scope0_reason, 0), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_script($scope0_id, "b1", 0, $sg__input_fn && 2, "c");
	_patch_render($scope0_id, "b2", $fg__input_fn && "c");
	_patch_fill($scope0_id, "vb3", open, 1);
	_scope($scope0_id, {
		c: input.fn,
		d: _write_if($scope0_reason, 0) && open,
		f: g
	}) || $fg__input_fn && _patch_write($scope0_id, "xc", input.fn, !$sg__input_fn);
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& bD l`)("")};${((_w0) => `${_w0}<button>more</button><span> </span>`)("")}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(($scope0_page ? 3 : 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "a0", $scope0_id) });
	_patch_child_end();
	_html(`<button>more</button>${_el_mark($scope0_id, "b")}<span>${_text_mark($scope0_id, "c", input.x, 1, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", $fg__input_label && "f");
	_scope($scope0_id, {
		f: input.label,
		h: n,
		a: _existing_scope($childScope)
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
