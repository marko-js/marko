// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1 a4;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let x = input.a;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", x + input.b)}</p>`);
			_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 3) && ">f");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 2);
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: input.b,
		g: _write_if($scope0_reason, 0) && x
	}) || $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 3));
}, 1);
