// template.marko
_shells({ a: "a !; ;<div>t</div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<div${_attr_class(x + input.w)}>t</div>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {
		e: input.w,
		f: _write_if($scope0_reason, 1) && x
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
