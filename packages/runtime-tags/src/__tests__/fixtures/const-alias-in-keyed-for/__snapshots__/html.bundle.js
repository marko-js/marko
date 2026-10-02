// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of([{
		id: 1,
		n: "a"
	}], (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", item.n)}</span>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
