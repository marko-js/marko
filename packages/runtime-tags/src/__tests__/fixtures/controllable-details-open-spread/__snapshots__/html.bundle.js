// tags/my-details.marko
var my_details_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<details${_attrs(input, "a", $scope0_id, "details")}><summary>s</summary></details>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const $childScope = _peek_scope_id();
	my_details_default({
		open,
		openChange: _resume((_new_open) => {
			open = _new_open;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "b", String(open))}</span>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
