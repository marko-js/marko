// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("__tests__/template.marko_1*content", ({ x }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let l = String(x);
		_html(`<button>${_text_resume($scope1_id, "#text/1", l)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { l }, "__tests__/template.marko", "1:2", { l: "2:8" });
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_2*content", ({ x }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<b>B</b>");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.flag ? B : A, { x: input.a }, 0, 0, $wg__input_flag__OR__input_a, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_flag", input.flag, 1);
	_patch_write($scope0_id, "PatchWrite:input_a", input.a, 1);
	_patch_write($scope0_id, "PatchWrite:A", A, 1);
	_patch_write($scope0_id, "PatchWrite:B", B, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_flag#3_input_a#4_A#5_B#6/init");
	$scope0_page ? _scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.flag,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a,
		A: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && A,
		B: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && B
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"],
		A: "1:9",
		B: "5:9"
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.flag, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
