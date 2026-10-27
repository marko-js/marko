// tags/card.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fn = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_script($scope0_id, "b1", 0, _filled_guard($scope0_reason, 0), "f");
	$cg__input_fn && _patch_write($scope0_id, "wd", open, 1);
	$cg__input_fn && _patch_init($scope0_id, "b2");
	_scope($scope0_id, {
		d: _unfilled_if($scope0_reason, 0) && open,
		f: g
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", g, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& bD l`)("")};${((_w0) => `${_w0}<button>more</button><span> </span>`)("")}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(($scope0_page ? 3 : 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "a0", $scope0_id) });
	_patch_child_end();
	_html(`<button>more</button>${_el_resume($scope0_id, "b")}<span>${_patch_text($scope0_id, "c", input.x, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.label,
		h: n,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0));
}, 1);
