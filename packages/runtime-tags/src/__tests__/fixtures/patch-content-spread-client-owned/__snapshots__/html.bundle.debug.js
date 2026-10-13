// tags/frag-host.marko
const $template$1 = "<section></section><div id=partial></div>";
const $walks$1 = " b b";
_shells({ "__tests__/tags/frag-host.marko": "__tests__/tags/frag-host.marko !__tests__/tags/frag-host.marko_0_input_mode#5_one#6_two#7; b ;<section></section><div id=partial></div>" });
var frag_host_default = _template("__tests__/tags/frag-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_mode = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const one = { content: _content_resume("__tests__/tags/frag-host.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<em>one</em>");
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/tags/frag-host.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<strong>${_patch_text($scope1_id, "#text/0", input.b, void 0, $scope0_reason, 0)}</strong>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/frag-host.marko", "2:2"), "__tests__/tags/frag-host.marko_1_input_b#0:4/subscribe");
	}, $scope0_id) };
	_html("<section");
	_patch_attrs_content({ content: input.mode ? one : two }, "#section/0", $scope0_id, "section", void 0, void 0, $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "#section/0")}<div id=partial`);
	_patch_attrs_partial_content({ content: input.mode ? two : one }, { id: 1 }, "#div/1", $scope0_id, "div", void 0, void 0, $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/tags/frag-host.marko_0_input_mode#5_one#6_two#7");
	_patch_write($scope0_id, "PatchWrite:one", one, 1);
	_patch_write($scope0_id, "PatchWrite:two", two, 1);
	_client_guard($scope0_reason, 1) && _patch_init($scope0_id, "__tests__/tags/frag-host.marko_0_input_mode#5_one#6_two#7/init");
	$scope0_page ? _scope($scope0_id, {
		input_b: input.b,
		one: $wi__input_mode && one,
		two: $wi__input_mode && two,
		"ClosureScopes:input_b/9": _write_if($scope0_reason, 0) && $input_b__closures
	}, "__tests__/tags/frag-host.marko", 0, {
		input_b: ["input.b"],
		one: "1:9",
		two: "2:9",
		"EventAttributes:#section/0": ["...{ content: input.mode ? one : two }", "3:13"],
		"EventAttributes:#div/1": ["...{ content: input.mode ? two : one }", "4:9"]
	}) : _filled_guard($scope0_reason, 0) && _content_withheld("__tests__/tags/frag-host.marko_1*content") && _patch_value($scope0_id, "PatchValue:__tests__/tags/frag-host.marko_fill0", input.b);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>toggle</button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	frag_host_default({
		mode,
		b: input.b
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", mode, 1);
	$scope0_page && _scope($scope0_id, {
		mode,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
