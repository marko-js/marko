// template.marko
_shells({ a: "a !;D lD ;<p> </p><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_resume($scope0_id, "a", x)}</p><p>${_text_resume($scope0_id, "b", x + input.w)}</p>`);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", x, 1);
	_scope($scope0_id, {
		f: input.w,
		g: _write_if($scope0_reason, 1) && x
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
