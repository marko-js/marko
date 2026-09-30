// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let pending = input.value;
	_await($scope0_id, "#text/0", input.value, (value) => {
		const $scope1_id = _scope_id();
		_html("Resolved without reading the value");
	}, 0);
	_await($scope0_id, "#text/1", pending, (letValue) => {
		const $scope2_id = _scope_id();
		_html("Resolved without reading the let");
	}, 0);
}, 1);
