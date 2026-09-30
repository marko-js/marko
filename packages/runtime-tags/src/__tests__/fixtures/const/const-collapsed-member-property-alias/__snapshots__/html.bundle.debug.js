// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const xs = input.list || [];
	const many = xs.length > 1;
	_html(`<p>${_text_resume($scope0_id, "#text/0", many ? xs.join() : "none", $sg__input_list)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
