// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["hello"];
	_html("<div>");
	_for_of(items, () => {
		const $scope1_id = _scope_id();
		_html(`<button>Test</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<div></div>${_el_resume($scope0_id, "b")}</div>`);
	_scope($scope0_id, { c: items });
}, 1);
