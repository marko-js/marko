// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !;D ;<p> </p>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a__OR__input_b = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.a + input.b + $global$1.g, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/child.marko_0_input_a#3_input_b#4_$global_g#6", $scope0_id, $cg__input_a__OR__input_b);
	$cg__input_a__OR__input_b && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_a#3_input_b#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_a: _unfilled_if($scope0_reason, 0) && input.a,
		input_b: _unfilled_if($scope0_reason, 0) && input.b
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.x,
		b: "n" + n
	});
	_patch_child_end();
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	child_default({
		a: "m" + n,
		b: input.y
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
