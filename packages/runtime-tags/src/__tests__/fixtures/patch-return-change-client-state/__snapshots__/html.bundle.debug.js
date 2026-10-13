// tags/counter-box/index.marko
const $template$1 = "<span> </span><button class=mode>b</button>";
const $walks$1 = "D l b";
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko !__tests__/tags/counter-box/index.marko_0;D l ;<span> </span><button class=mode>b</button>" });
_client_return("__tests__/tags/counter-box/index.marko");
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "#text/0", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "#button/1")}`);
	const $return = mode;
	_script($scope0_id, "__tests__/tags/counter-box/index.marko_0");
	const $valueChange = _patch_bind($scope0_id, "PatchBind:#TagVariableChange", (mode === "a" ? input.onA : input.onB) || void 0, 0, 0);
	_patch_value($scope0_id, "PatchValue:__tests__/tags/counter-box/index.marko_fill0", mode, 1);
	$scope0_page ? _scope($scope0_id, {
		input_onA: input.onA,
		input_onB: input.onB,
		mode,
		"#TagVariableChange": $valueChange
	}, "__tests__/tags/counter-box/index.marko", 0, {
		input_onA: ["input.onA"],
		input_onB: ["input.onB"],
		mode: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_onA", input.onA), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:input_onB", input.onB));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=set>set</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `0${_w0}&D l b`)($walks$1)};${((_w0) => `${_w0}<p> </p><button class=set>set</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = "none";
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	let count = counter_box_default({
		onA: _resume(function(v) {
			last = "a" + v;
		}, "__tests__/template.marko_0/onA", $scope0_id),
		onB: _resume(function(v) {
			last = "b" + v;
		}, "__tests__/template.marko_0/onB", $scope0_id)
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#4/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", last)}</p><button class=set>set</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", last, 1);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
