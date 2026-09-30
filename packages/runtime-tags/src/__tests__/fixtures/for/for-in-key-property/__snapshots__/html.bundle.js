// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { ab: 1 };
	_for_in(obj, (key) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(key)}:${_escape(key.length)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	_scope($scope0_id, { b: obj });
}, 1);
