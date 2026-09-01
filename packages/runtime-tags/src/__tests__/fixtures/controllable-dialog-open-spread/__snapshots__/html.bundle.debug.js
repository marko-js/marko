// tags/my-dialog.marko
var my_dialog_default = _template("__tests__/tags/my-dialog.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<dialog");
	_attrs_content(input, "#dialog/0", $scope0_id, "dialog");
	_html(`</dialog>${_el_resume($scope0_id, "#dialog/0")}`);
	_script($scope0_id, "__tests__/tags/my-dialog.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/tags/my-dialog.marko", 0, {
		"ControlledHandler:#dialog/0": ["...input", "1:12"],
		"EventAttributes:#dialog/0": ["...input", "1:12"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const $childScope = _peek_scope_id();
	my_dialog_default({
		open,
		openChange: _resume((_new_open) => {
			open = _new_open;
		}, "__tests__/template.marko_0/openChange", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "#text/1", String(open))}</span>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
