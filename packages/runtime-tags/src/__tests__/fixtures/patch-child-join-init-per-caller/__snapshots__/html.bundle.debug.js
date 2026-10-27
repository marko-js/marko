// tags/child.marko
const $template$1 = "<p> </p><!><button class=t>t</button>";
const $walks$1 = "D l%b b";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;D l%b ;<p> </p><!><button class=t>t</button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<div></div>${_el_resume($scope1_id, "#div/0")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5");
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/child.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	$cg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 2) && $cg__input_a));
	_patch_join_init($scope0_id, "__tests__/tags/child.marko_0_input_a#5_input_b#6/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && "input_a", _filled_guard($scope0_reason, 2) && "input_b");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_a: input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.a,
		b: input.b
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
