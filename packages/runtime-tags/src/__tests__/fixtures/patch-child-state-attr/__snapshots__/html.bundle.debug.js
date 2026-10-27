// tags/counter/index.marko
const $template$1 = "<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>";
const $walks$1 = "Eb%c%l l";
const $setup$1 = [[], ["__tests__/tags/counter/index.marko_0"]];
_shells({ "__tests__/tags/counter/index.marko": "__tests__/tags/counter/index.marko !__tests__/tags/counter/index.marko_0;Eb%c%l ;<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>" });
var counter_default = _template("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let spins = 0;
	_html(`<section><p>Value ${_patch_text($scope0_id, "#text/0", input.value, 2, $scope0_reason, 0)} (spun ${_text_resume($scope0_id, "#text/1", spins, 2)})</p><button class=spin>spin</button>${_el_resume($scope0_id, "#button/2")}</section>`);
	_script($scope0_id, "__tests__/tags/counter/index.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter/index.marko_fill0", spins, 1);
	$scope0_page && _scope($scope0_id, { spins }, "__tests__/tags/counter/index.marko", 0, { spins: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}<button class=inc>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `E l/${_w0}& l`)($walks$1)};${((_w0) => `<main><h1> </h1>${_w0}<button class=inc>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	counter_default({ value: count });
	_patch_child_end();
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
