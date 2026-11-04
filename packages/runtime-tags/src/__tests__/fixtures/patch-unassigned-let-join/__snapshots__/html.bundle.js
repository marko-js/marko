// template.marko
_shells({ a: "a;D lD ;<p> </p><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.a;
	_html(`<p>${_text_mark($scope0_id, "a", x)}</p><p>${_text_mark($scope0_id, "b", x + input.b)}</p>`);
	_patch_render($scope0_id, "a0", $fg__input_b && "f");
	_scope($scope0_id, {
		f: input.b,
		g: _write_if($scope0_reason, 1) && x
	}) || $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 1));
}, 1);
