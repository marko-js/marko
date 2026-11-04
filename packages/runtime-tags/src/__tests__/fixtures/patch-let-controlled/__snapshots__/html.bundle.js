// template.marko
_shells({ a: "a !;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_w = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_mark($scope0_id, "a", x + input.w)}</p>`);
	_patch_render($scope0_id, "a1", [$fg__input_w && "e", _filled_guard($scope0_reason, 0) && "d"]);
	_patch_let_change($scope0_id, "va2", x, 0, 1, $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.w,
		f: _write_if($scope0_reason, 1) && x
	}) || $fg__input_w && _patch_write($scope0_id, "xe", input.w, !_server_guard($scope0_reason, 1));
}, 1);
