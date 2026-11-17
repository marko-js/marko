// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const x = _id();
	const y = input.id || _id();
	_html(`<div>${_escape(x.length)} ${_text_mark($scope0_id, "b", y.length, _write_guard($scope0_reason, 0) * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
