// tags/counter-box/index.marko
const $template$1 = "<span> </span><button class=mode>b</button><button class=go>go</button>";
const $walks$1 = "D l b b";
const $setup$1 = [["__tests__/tags/counter-box/index.marko_0_input_onA#5_input_onB#6_mode#7/init"], ["__tests__/tags/counter-box/index.marko_0"]];
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko __tests__/tags/counter-box/index.marko_0_input_onA#5_input_onB#6_mode#7/init!__tests__/tags/counter-box/index.marko_0;D l b ;<span> </span><button class=mode>b</button><button class=go>go</button>" });
_stateful_return("__tests__/tags/counter-box/index.marko");
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_onA = _server_guard($scope0_reason, 0), $sg__input_onB = _server_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "#text/0", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "#button/1")}<button class=go>go</button>${_el_resume($scope0_id, "#button/2")}`);
	const $return = mode;
	_script($scope0_id, "__tests__/tags/counter-box/index.marko_0_input_onA#5_input_onB#6_mode#7");
	_script($scope0_id, "__tests__/tags/counter-box/index.marko_0");
	($sg__input_onA || $sg__input_onB) && _patch_effect($scope0_id, "PatchQueuedEffect:__tests__/tags/counter-box/index.marko_0_input_onA#5_input_onB#6_mode#7", $sg__input_onA && "input_onA", $sg__input_onB && "input_onB");
	const $valueChange = (mode === "a" ? input.onA : input.onB) || void 0;
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter-box/index.marko_fill0", mode, 1);
	$scope0_page ? _scope($scope0_id, {
		input_onA: input.onA,
		input_onB: input.onB,
		mode,
		"#TagVariableChange": $valueChange
	}, "__tests__/tags/counter-box/index.marko", 0, {
		input_onA: ["input.onA"],
		input_onB: ["input.onB"],
		mode: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_onA", input.onA, !$sg__input_onA), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_onB", input.onB, !$sg__input_onB));
	return $return;
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<button class=set>set</button>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_p = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.p, !$sg__input_p) : _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !$sg__input_p));
	let last = "none";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 1);
			let count = counter_box_default({
				onA: _bind_resume(function(v) {
					last = input.p + "a" + v;
				}, "__tests__/template.marko_1/onA", $scope1_id),
				onB: _bind_resume(function(v) {
					last = input.p + "b" + v;
				}, "__tests__/template.marko_1/onB", $scope1_id)
			});
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_count#7/var");
			_html(`<button class=set>set</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_p#0:5/init");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", last)}</p>`);
	$scope0_page && _scope($scope0_id, { input_p: input.p }, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1);
