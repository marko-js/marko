// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Box = { content: _content_resume("__tests__/template.marko_1*content", ({ show, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let n = 0;
		_html(`<button>${_text_resume($scope1_id, "#text/1", show ? label + n : "-")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			show,
			label,
			n
		}, "__tests__/template.marko", "1:2", {
			show: "1:15",
			label: "1:21",
			n: "2:8"
		});
	}, $scope0_id, void 0, 1) };
	_dynamic_tag($scope0_id, "#text/0", Box, {
		show: input.show,
		label: input.label
	}, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0, 0, 0, 0);
	_scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		Box: _unfilled_if($scope0_reason, 0) && Box
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		Box: "1:9"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.label));
}, 1);
