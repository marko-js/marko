// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a ? null : 1, _serialize_guard($scope0_reason, 1))}</div><div>${_text_resume($scope0_id, "b", input.b ? true : "x<y", _serialize_guard($scope0_reason, 2))}</div><div>before mid ${_text_resume($scope0_id, "c", `${input.c}`, _serialize_guard($scope0_reason, 3) * 2)} end after</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
