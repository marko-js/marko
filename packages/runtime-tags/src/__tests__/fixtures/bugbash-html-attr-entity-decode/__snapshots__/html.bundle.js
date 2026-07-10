// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=a${_attr("title", input.a)}></div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}<div id=b${_attr("title", input.b)}></div>${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}<div id=c${_attr("title", input.c)}></div>${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 3))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
