// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "^__tests__/tags/child.marko !;D ;<span> </span>" });
_stateful_return("__tests__/tags/child.marko");
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = input.v;
	const $return = x;
	_html(`<span>${_text_resume($scope0_id, "#text/0", x)}</span>`);
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", _resume(function(v) {
		x = x === v ? x : v;
	}, "__tests__/tags/child.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", x, 1);
	$scope0_page && _scope($scope0_id, {
		x,
		"#TagVariableChange": $valueChange2
	}, "__tests__/tags/child.marko", 0, { x: "1:6" });
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&D l b`)("D l")};${((_w0) => `${_w0}<p> </p><button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	let c = child_default({ v: input.v });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_c#7/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", c)}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		c,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { c: "1:8" });
}, 1);
