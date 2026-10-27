// tags/card.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fn = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<p>${_patch_text($scope0_id, "a", g(), void 0, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "b1");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, $cg__input_fn ? "hb1" : "eb1", "g");
	$cg__input_fn && _patch_write($scope0_id, "we", open, 1);
	$cg__input_fn && _patch_init($scope0_id, "b2");
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && open,
		g
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", g, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& bD l`)("D l")};${((_w0) => `${_w0}<button>more</button><span> </span>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(($scope0_page ? 3 : 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "a0", $scope0_id) });
	_html(`<button>more</button>${_el_resume($scope0_id, "b")}<span>${_patch_text($scope0_id, "c", input.x, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		h: n,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0));
}, 1);
