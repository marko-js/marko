// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.a ? null : 1, _write_guard($scope0_reason, 1))}</div><div>${_text_mark($scope0_id, "b", input.b ? true : "x<y", _write_guard($scope0_reason, 2))}</div><div>before mid ${_text_mark($scope0_id, "c", `${input.c}`, _write_guard($scope0_reason, 3) * 2)} end after</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
