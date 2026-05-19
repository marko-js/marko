// tags/checkbox.marko
var checkbox_default = _template("__tests__/tags/checkbox.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "checkbox",
		...input
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/checkbox.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/checkbox.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	const $childScope = _peek_scope_id();
	checkbox_default({
		checked,
		checkedChange: _resume((_new_checked) => {
			checked = _new_checked;
		}, "__tests__/template.marko_0/checkedChange", $scope0_id)
	});
	_html(`<span>${_escape(String(checked))}${_el_resume($scope0_id, "#text/1")}</span>`);
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
