// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.a ? null : 1, _serialize_guard($scope0_reason, 1))}</div><div>${_text_resume($scope0_id, "#text/1", input.b ? true : "x<y", _serialize_guard($scope0_reason, 2))}</div><div>before mid ${_text_resume($scope0_id, "#text/2", `${input.c}`, _serialize_guard($scope0_reason, 3) * 2)} end after</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
