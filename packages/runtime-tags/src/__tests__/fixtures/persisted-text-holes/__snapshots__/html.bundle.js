// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_escape(input.title)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1><p>${_escape(input.body)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</p></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
