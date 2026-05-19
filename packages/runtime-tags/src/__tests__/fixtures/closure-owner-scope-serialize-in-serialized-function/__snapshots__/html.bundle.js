// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const text = _resume(function() {
		return "HI";
	}, "a0");
	{
		const $scope1_id = _scope_id();
		const run = _resume(function() {
			((el) => el())(_el_read_error).innerHTML = text();
		}, "a1", $scope1_id);
		_html(`<div></div>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, {
			b: run,
			_: _scope_with_id($scope0_id)
		});
	}
	writeScope($scope0_id, { b: text });
}, 1);
