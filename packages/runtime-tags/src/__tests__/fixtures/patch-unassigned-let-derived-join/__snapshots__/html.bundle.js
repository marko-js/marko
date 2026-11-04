// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const y = input.a + "!";
	_html(`<p>${_text_mark($scope0_id, "a", y + input.b)}</p>`);
	_patch_render($scope0_id, "a0", $fg__input_b && "e");
	_scope($scope0_id, {
		e: input.b,
		g: _write_if($scope0_reason, 1) && y
	}) || $fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 1));
}, 1);
