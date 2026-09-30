// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let pending = input.value;
	_await($scope0_id, "a", input.value, (value) => {
		_scope_id();
		_html("Resolved without reading the value");
	}, 0);
	_await($scope0_id, "b", pending, (letValue) => {
		_scope_id();
		_html("Resolved without reading the let");
	}, 0);
}, 1);
