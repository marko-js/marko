// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)($Panel_content__walks);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}&%b l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let n = 0;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__value = _write_guard($scope1_reason, 0);
		_html(`<p>${_text_resume($scope1_id, "#text/0", value + input.title, $wg__input_title || $wg__value)}</p>`);
		_subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, {
			value: $wi__input_title && value,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { value: "2:17" }), "__tests__/template.marko_1_input_title#0:5/subscribe", $wg__input_title || $wg__value);
		$wg__input_title || $wg__value || _resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Panel.content({ value: "s" });
	_dynamic_tag($scope0_id, "#text/1", input.dyn ? Panel : null, { value: n });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Panel", Panel, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		input_dyn: input.dyn,
		n,
		Panel,
		"ClosureScopes:input_title/10": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_dyn: ["input.dyn"],
		n: "1:6",
		Panel: "2:9"
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.dyn, !_server_guard($scope0_reason, 1)), _content_withhold(input.dyn));
}, 1);
