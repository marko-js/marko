// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${input.x ? " title=active" : " title=idle"}${input.y ? " data-n=1" : " data-n=2"}${input.z ? " aria-hidden" : ""}${input.x ? " lang=en" : _attr("lang", input.fallback)}${input.x ? " class=on" : " class=off"}${input.y ? " style=color:red" : _attr_style(input.s)}>content</div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		d: _serialize_if($scope0_reason, 3) && input.x,
		e: _serialize_if($scope0_reason, 4) && input.y,
		g: _serialize_if($scope0_reason, 1) && input.fallback,
		i: _serialize_if($scope0_reason, 2) && input.s
	});
}, 1);
