// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tint = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style(["content:'a;color:red'", { color: input.tint }])}></div>${_el_mark($scope0_id, "a", $wg__input_tint)}<div${_attr_style(["background:url(data:image/png;color:x)", { color: input.tint }])}></div>${_el_mark($scope0_id, "b", $wg__input_tint)}<div${_attr_style(["--note:a\\;color:b", { color: input.tint }])}></div>${_el_mark($scope0_id, "c", $wg__input_tint)}<div${_attr_style([
		"--ratio: 16:9",
		"--frame: 4:3",
		{ color: input.tint }
	])}></div>${_el_mark($scope0_id, "d", $wg__input_tint)}<div style=display:-webkit-box;display:flex></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
