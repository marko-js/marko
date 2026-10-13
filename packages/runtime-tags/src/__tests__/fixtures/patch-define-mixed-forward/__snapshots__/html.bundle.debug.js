// template.marko
const $Kid_content__walks = "D l";
const $Kid_content__template = "<span> </span>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Kid_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Kid_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content !;${_w0};${_w1}`)($Kid_content__walks, $Kid_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Kid_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Kid_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Kid = { content: _content_elide("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<span>${_patch_text($scope1_id, "#text/0", input.a + input.b, void 0, $scope1_reason, 0)}</span>`);
		_patch_write($scope1_id, "PatchWrite:input_a", input.a, 1);
		_patch_write($scope1_id, "PatchWrite:input_b", input.b, 1);
		_client_guard($scope1_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#3_input_b#4/init");
		$scope1_page ? _scope($scope1_id, {
			input_a: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && input.a,
			input_b: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 2)) && input.b
		}, "__tests__/template.marko", "1:2", {
			input_a: ["input.a", "1:13"],
			input_b: ["input.b", "1:13"]
		}) : (_filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 2) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", input.a), _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill2", input.b));
	}, $scope0_id) };
	let s = 1;
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Kid.content({
		a: s,
		b: input.x
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", s, 1);
	$scope0_page && _scope($scope0_id, {
		s,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { s: "4:6" });
}, 1);
