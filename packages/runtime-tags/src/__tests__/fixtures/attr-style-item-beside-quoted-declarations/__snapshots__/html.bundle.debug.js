// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tint = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style(["content:'a;color:red'", { color: input.tint }])}></div>${_el_mark($scope0_id, "#div/0", $wg__input_tint)}<div${_attr_style(["background:url(data:image/png;color:x)", { color: input.tint }])}></div>${_el_mark($scope0_id, "#div/1", $wg__input_tint)}<div${_attr_style(["--note:a\\;color:b", { color: input.tint }])}></div>${_el_mark($scope0_id, "#div/2", $wg__input_tint)}<div${_attr_style([
		"--ratio: 16:9",
		"--frame: 4:3",
		{ color: input.tint }
	])}></div>${_el_mark($scope0_id, "#div/3", $wg__input_tint)}<div style=display:-webkit-box;display:flex></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
