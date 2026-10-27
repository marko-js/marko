// tags/echo.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/echo.marko": "__tests__/tags/echo.marko;D ;<em> </em>" });
var echo_default = _template("__tests__/tags/echo.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.text, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/echo.marko", 0);
});

// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=inc> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<span> </span>${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D l/${_w0}&/${_w1}&`)("D l", $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$2], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `D l/${_w0}&/${_w1}&`)("D l", $walks$1)};${((_w0, _w1) => `<span> </span>${_w0}${_w1}`)($template$2, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Foo = { label: input.label };
	_html(`<span>${_patch_text($scope0_id, "#text/0", Foo.label, void 0, $scope0_reason, 0)}</span>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	echo_default({ text: Foo.label });
	const $childScope2 = _patch_child($scope0_id, "#childScope/2");
	counter_default({});
	$scope0_page && _scope($scope0_id, {
		"#childScope/1": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
