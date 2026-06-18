// tags/checkbox.marko
var checkbox_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "checkbox",
		...input
	}, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	const $childScope = _peek_scope_id();
	checkbox_default({
		checked,
		checkedChange: _resume((_new_checked) => {
			checked = _new_checked;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_escape(String(checked))}${_el_resume($scope0_id, "b")}</span>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
