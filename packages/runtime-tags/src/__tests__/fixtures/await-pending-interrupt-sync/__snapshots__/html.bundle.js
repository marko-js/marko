// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let showAsync = true;
	_await($scope0_id, "a", resolveAfter("ASYNC"), (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: ${_text_resume($scope1_id, "a", value, 2)}`);
		_scope($scope1_id, {});
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: showAsync });
}, 1);
