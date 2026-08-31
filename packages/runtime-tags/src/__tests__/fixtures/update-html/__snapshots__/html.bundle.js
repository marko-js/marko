// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`<em>Testing</em> ${_html_resume($scope0_id, "a", value, _serialize_guard($scope0_reason, 0) * 2)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
