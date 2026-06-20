// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.url)}>link</a>${_el_resume($scope0_id, "#a/0", _serialize_guard($scope0_reason, 1))}<div${_attr("data-x", input.data)}></div>${_el_resume($scope0_id, "#div/1", _serialize_guard($scope0_reason, 2))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
