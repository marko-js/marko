// template.marko
_shells({ a: "a !;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const y = input.a + "!";
	_html(`<p>${_text_resume($scope0_id, "a", y + input.b)}</p>`);
	_scope($scope0_id, {
		e: input.b,
		g: _write_if($scope0_reason, 1) && y
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va0", input.b, !_server_guard($scope0_reason, 1));
}, 1);
