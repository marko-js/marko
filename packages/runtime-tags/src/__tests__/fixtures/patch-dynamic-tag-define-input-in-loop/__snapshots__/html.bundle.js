// template.marko
_shells({
	a1: "a1;D ;<h5> </h5>",
	a0: "a0;D ;<h4> </h4>",
	a: "a; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a0", ({ record }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_text_resume($scope1_id, "a", record.name, void 0, 4, 0)}</h4>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a1", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_text_resume($scope3_id, "a", record.name, void 0, 4, 0)}</h5>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "a", row.useA ? Card : Other, { record: row.record }, 1, 0, 0, $wg__input_rows, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a2");
		_write_if($scope0_reason, 0) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && Card,
		f: _unfilled_if($scope0_reason, 0) && Other
	});
}, 1);
