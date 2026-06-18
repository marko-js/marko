// tags/my-dialog.marko
var my_dialog_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<dialog");
	_attrs_content(input, "a", $scope0_id, "dialog");
	_html(`</dialog>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const $childScope = _peek_scope_id();
	my_dialog_default({
		open,
		openChange: _resume((_new_open) => {
			open = _new_open;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_escape(String(open))}${_el_resume($scope0_id, "b")}</span>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
