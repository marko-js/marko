// tags/gm/index.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var gm_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$2 = $global();
	const z = input.v + $global$2.flag;
	_html(`<p>${_patch_text($scope0_id, "a", z + $global$2.mark, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("b0", $scope0_id, $cg__input_v);
	_fill_global_subscribe("b1", $scope0_id);
	$cg__input_v && _patch_write($scope0_id, "wd", input.v, 1);
	_client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_write($scope0_id, "we", z, 1);
	$scope0_page && _scope($scope0_id, {
		d: _unfilled_if($scope0_reason, 0) && input.v,
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z
	});
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& D m`)("D l")};${((_w0) => `<main>${_w0}<button> </button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a");
	gm_default({ v: $global$1.brand });
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		d: count,
		a: _existing_scope($childScope)
	});
}, 1);
