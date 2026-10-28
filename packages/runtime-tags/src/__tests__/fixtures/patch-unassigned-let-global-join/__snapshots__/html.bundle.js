// template.marko
_shells({ a: "a !;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = $global().v;
	_html(`<p>${_text_resume($scope0_id, "a", x + input.w)}</p>`);
	_fill_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, {
		d: input.w,
		e: _write_if($scope0_reason, 0) && x
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.w, !_server_guard($scope0_reason, 0));
}, 1);
