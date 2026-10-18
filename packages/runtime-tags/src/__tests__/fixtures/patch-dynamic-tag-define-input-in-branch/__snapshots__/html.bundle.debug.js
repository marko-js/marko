// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/template.marko_2*content", ({ record }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<h4>${_patch_text($scope2_id, "#text/0", record.name)}</h4>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ record }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<h5>${_patch_text($scope3_id, "#text/0", record.name)}</h5>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.useA ? Card : Other, { record: input.record }, 0, 0, $wg__input_useA__OR__input_record, void 0, 1, $scope0_reason, 2);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	_patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	$scope0_page ? _scope($scope0_id, {
		input_useA: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.useA,
		input_record: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.record,
		Card: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && Card,
		Other: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && Other
	}, "__tests__/template.marko", 0, {
		input_useA: ["input.useA"],
		input_record: ["input.record"],
		Card: "1:9",
		Other: "4:9"
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.useA, !_server_guard($scope0_reason, 5)), _client_guard($scope0_reason, 4) && _content_withhold(input.useA), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.record, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 4) && _content_withhold(input.record));
}, 1);
