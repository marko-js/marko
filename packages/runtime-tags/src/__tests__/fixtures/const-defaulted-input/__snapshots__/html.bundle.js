// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<div>${_text_resume($scope0_id, "a", nullish.label, $sg__input_opts)}/${_text_resume($scope0_id, "b", nullish.size, $sg__input_opts * 2)} ${_text_resume($scope0_id, "c", falsy.label, $sg__input_opts * 2)}/${_text_resume($scope0_id, "d", falsy.size, $sg__input_opts * 2)} ${_text_resume($scope0_id, "e", guarded?.label, $sg__input_opts * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
