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
	_html_opens("__tests__/template.marko:4:1"), _html(`<div>${_escape(nullish.label)}${_el_resume($scope0_id, "#text/0", $sg__input_opts)}/${_sep($sg__input_opts)}${_escape(nullish.size)}${_el_resume($scope0_id, "#text/1", $sg__input_opts)} ${_sep($sg__input_opts)}${_escape(falsy.label)}${_el_resume($scope0_id, "#text/2", $sg__input_opts)}/${_sep($sg__input_opts)}${_escape(falsy.size)}${_el_resume($scope0_id, "#text/3", $sg__input_opts)} ${_sep($sg__input_opts)}${_escape(guarded?.label)}${_el_resume($scope0_id, "#text/4", $sg__input_opts)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
