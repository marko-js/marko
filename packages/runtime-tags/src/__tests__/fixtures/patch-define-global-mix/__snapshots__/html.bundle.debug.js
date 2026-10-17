// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Badge_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)($Badge_content__walks, $Badge_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($Badge_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const Badge = { content: _content_elide("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.value + $global$1.flag, void 0, (2 | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_fill_global_subscribe("__tests__/template.marko_1_$global_flag#0:8_input_value#3", $scope1_id, _client_guard($scope1_reason, 0));
		_patch_write($scope1_id, "PatchWrite:input_value", input.value, 1);
		_scope($scope1_id, { input_value: _unfilled_if($scope1_reason, 0) && input.value }, "__tests__/template.marko", "1:2", { input_value: ["input.value", "1:15"] });
	}, $scope0_id) };
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Badge.content({ value: count });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1);
