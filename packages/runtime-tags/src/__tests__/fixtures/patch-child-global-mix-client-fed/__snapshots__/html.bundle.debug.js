// tags/gm/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/gm/index.marko": "__tests__/tags/gm/index.marko;D ;<p> </p>" });
var gm_default = _template("__tests__/tags/gm/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const z = input.v + $global$1.flag;
	_html(`<p>${_patch_text($scope0_id, "#text/0", z + $global$1.mark, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/gm/index.marko_0_input_v#3_$global_flag#5", $scope0_id, _client_guard($scope0_reason, 0));
	_fill_global_subscribe("__tests__/tags/gm/index.marko_0_z#4_$global_mark#7", $scope0_id);
	_patch_write($scope0_id, "PatchWrite:input_v", input.v, 1);
	_patch_write($scope0_id, "PatchWrite:z", z, 1);
	$scope0_page && _scope($scope0_id, {
		input_v: _unfilled_if($scope0_reason, 0) && input.v,
		z: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z
	}, "__tests__/tags/gm/index.marko", 0, {
		input_v: ["input.v"],
		z: "1:8"
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& D m`)("D l")};${((_w0) => `<main>${_w0}<button> </button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	gm_default({ v: count });
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
