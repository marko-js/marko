// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "a", $global$1.value, (unused) => {
		_scope_id();
		_html("Resolved without reading the value");
	}, 0);
}, 1);
