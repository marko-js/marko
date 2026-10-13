// tags/counter-box/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko;D ;<span> </span>" });
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<span>${_patch_text($scope0_id, "#text/0", count)}</span>`);
	const $return = count;
	const $valueChange = _patch_bind($scope0_id, "PatchBind:#TagVariableChange", input.onChange || void 0, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		input_onChange: input.onChange,
		"#TagVariableChange": $valueChange
	}, "__tests__/tags/counter-box/index.marko", 0, { input_onChange: ["input.onChange"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_onChange", input.onChange);
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b b`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `0${_w0}&D l b b`)("D l")};${((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = "a";
	let last = "none";
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	let count = counter_box_default({ onChange: mode === "a" ? _resume(function(v) {
		last = "a" + v;
	}, "__tests__/template.marko_0/onChange", $scope0_id) : _resume(function(v) {
		last = "b" + v;
	}, "__tests__/template.marko_0/onChange2", $scope0_id) });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#5/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", last)}</p><button class=mode>b</button>${_el_resume($scope0_id, "#button/3")}<button class=set>set</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", mode, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", last, 1);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
