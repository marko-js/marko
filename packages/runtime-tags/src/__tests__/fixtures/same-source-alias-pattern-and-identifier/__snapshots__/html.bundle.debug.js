// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a_b = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { a: { b } } = input;
	const { a } = input;
	const { b: c } = a;
	_html(`<button>${_escape(b)}${_el_resume($scope0_id, "#text/0", $sg__input_a_b)} ${_sep($sg__input_a_b)}${_escape(c)}${_el_resume($scope0_id, "#text/1", $sg__input_a_b)}</button>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
