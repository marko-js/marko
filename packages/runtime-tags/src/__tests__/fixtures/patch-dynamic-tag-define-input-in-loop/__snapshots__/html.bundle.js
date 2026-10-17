// template.marko
_shells({
	a0: "a0,",
	a1: "a1,",
	a: "a; ;<main></main>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a1", ({ record }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_patch_text($scope1_id, "a", record.name)}</h4>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a0", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_patch_text($scope3_id, "a", record.name)}</h5>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "a", row.useA ? Card : Other, { record: row.record }, 0, 0, $wg__input_rows, void 0, 1, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a")}`);
	_patch_write($scope0_id, "we", Card, 1);
	_patch_write($scope0_id, "wf", Other, 1);
	$scope0_page && _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && Card,
		f: _unfilled_if($scope0_reason, 0) && Other
	});
}, 1);
