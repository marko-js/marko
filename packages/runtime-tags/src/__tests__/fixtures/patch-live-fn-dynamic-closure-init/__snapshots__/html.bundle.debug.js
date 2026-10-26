// tags/panel.marko
const $template$1 = "<!><!><output> </output>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%bD ;<!><!><output> </output>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell !__tests__/tags/panel.marko_2; D ;<button class=read> </button>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 0), $scope0_page = _page_render(), $sg__input_a = _server_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "__tests__/tags/panel.marko_0/f", $scope0_id);
	let out = "";
	_if(() => {
		if (input.y) {
			const $scope1_id = _scope_id();
			_for_of([1], (i) => {
				const $scope2_id = _scope_id();
				_html(`<button class=read>${_patch_text($scope2_id, "#text/1", f(), void 0, $scope0_reason, 0)}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/tags/panel.marko_2");
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_a ? "__tests__/tags/panel.marko_2_f#0:6/init" : "__tests__/tags/panel.marko_2_f#0:6/subscribe");
				$scope0_page && _subscribe($wi__input_a && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "4:4"), $cg__input_a && "__tests__/tags/panel.marko_2_f#0:6/subscribe");
			}, 0, $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/panel.marko_2*shell", 0, 0);
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 1);
	_html(`<output>${_patch_text($scope0_id, "#text/1", out, void 0, 0, 0, 1)}</output>`);
	$scope0_page ? _scope($scope0_id, {
		input_a: input.a,
		f,
		"ClosureScopes:f/8": $wi__input_a && $f2__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	}) : _filled_guard($scope0_reason, 0) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", f, !$sg__input_a) : _patch_write($scope0_id, "PatchWrite:f", f, !$sg__input_a));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	panel_default({
		a: input.a,
		y
	});
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
