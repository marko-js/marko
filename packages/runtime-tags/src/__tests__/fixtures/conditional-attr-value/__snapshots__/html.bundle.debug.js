// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_fallback = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div title=${input.x ? "active" : "idle"} data-n=${input.y ? "1" : "2"}${input.z ? " aria-hidden" : ""}${input.x ? " lang=en" : _attr("lang", input.fallback)} class=${input.x ? "on" : "off"}${input.y ? " style=color:red" : _attr_style(input.s)}${_attr_and("data-and", input.z, " data-and=true")}${_attr_and("data-and-dyn", input.x, " data-and-dyn=on")}${_attr_or("data-or", input.x, " data-or=fallback")}${_attr_or("data-or-dyn", input.z, " data-or-dyn=q")}${_attr_nullish("data-nullish", input.s, " data-nullish=none")}${_attr_nullish("data-nullish-dyn", input.z, " data-nullish-dyn=q")}${_attr("data-and-expr", input.z && input.fallback)}>content</div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 1))}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {
		input_x: $si__input_fallback && input.x,
		input_y: _serialize_if($scope0_reason, 4) && input.y,
		input_z: $si__input_fallback && input.z,
		input_fallback: _serialize_if($scope0_reason, 0) && input.fallback,
		input_s: _serialize_if($scope0_reason, 2) && input.s
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_y: ["input.y"],
		input_z: ["input.z"],
		input_fallback: ["input.fallback"],
		input_s: ["input.s"]
	});
}, 1);
