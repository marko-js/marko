// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_opts = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const nullish = input.opts ?? {
		label: "nullish",
		size: 1
	};
	const falsy = input.opts || {
		label: "falsy",
		size: 2
	};
	const guarded = input.opts && {
		label: "guarded",
		size: 3
	};
	_html(`<div>${_text_resume($scope0_id, "#text/0", nullish.label, $sg__input_opts)}/${_text_resume($scope0_id, "#text/1", nullish.size, $sg__input_opts * 2)} ${_text_resume($scope0_id, "#text/2", falsy.label, $sg__input_opts * 2)}/${_text_resume($scope0_id, "#text/3", falsy.size, $sg__input_opts * 2)} ${_text_resume($scope0_id, "#text/4", guarded?.label, $sg__input_opts * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
