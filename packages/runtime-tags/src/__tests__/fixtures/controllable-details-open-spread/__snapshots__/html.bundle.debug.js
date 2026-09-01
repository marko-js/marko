// tags/my-details.marko
var my_details_default = _template("__tests__/tags/my-details.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<details${_attrs(input, "#details/0", $scope0_id, "details")}><summary>s</summary></details>${_el_resume($scope0_id, "#details/0")}`);
	_script($scope0_id, "__tests__/tags/my-details.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/tags/my-details.marko", 0, {
		"ControlledHandler:#details/0": ["...input", "1:13"],
		"EventAttributes:#details/0": ["...input", "1:13"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const $childScope = _peek_scope_id();
	my_details_default({
		open,
		openChange: _resume((_new_open) => {
			open = _new_open;
		}, "__tests__/template.marko_0/openChange", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "#text/1", String(open))}</span>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
