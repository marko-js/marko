// tags/picker.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0,",
	b1: "b1,",
	b: "b !;b%;<!><!><!>"
});
var picker_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("b1", ({ record }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_patch_text($scope1_id, "a", record.name)}</h4>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("b0", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_patch_text($scope2_id, "a", record.name)}</h5>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.useA ? Card : Other, { record: input.record }, 0, 0, $wg__input_useA__OR__input_record, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "wf", Card, 1);
	_patch_write($scope0_id, "wg", Other, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.useA,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.record,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && Card,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && Other
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb2", input.useA, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb3", input.record, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	picker_default({
		useA: input.useA,
		record: input.record
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
