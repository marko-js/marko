// tags/gm-badge/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/gm-badge/index.marko": "__tests__/tags/gm-badge/index.marko;D ;<p> </p>" });
var gm_badge_default = _template("__tests__/tags/gm-badge/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.value + $global$1.flag, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/gm-badge/index.marko_0_input_value#3_$global_flag#5", $scope0_id, $cg__input_value);
	$cg__input_value && _patch_write($scope0_id, "PatchWrite:input_value", input.value, 1);
	$scope0_page && _scope($scope0_id, { input_value: _unfilled_if($scope0_reason, 0) && input.value }, "__tests__/tags/gm-badge/index.marko", 0, { input_value: ["input.value"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	gm_badge_default({ value: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
