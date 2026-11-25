// template.marko
function $text() {
	return "HI";
}
_resume("a0", $text);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const text = $text;
	{
		const $scope1_id = _scope_id();
		const run = _resume_scoped(function() {
			((el) => el())(_el_read_error).innerHTML = text();
		}, "a1", $scope1_id);
		_html(`<div></div>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, {
			b: run,
			_: _scope_with_id($scope0_id)
		});
	}
	_scope($scope0_id, { b: text });
}, 1);
