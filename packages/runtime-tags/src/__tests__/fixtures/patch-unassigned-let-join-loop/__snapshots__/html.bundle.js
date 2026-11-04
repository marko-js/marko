// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a1: "a1 a4;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _server_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let x = input.a;
	_html("<ul>");
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xc", i, !$sg__input_items);
		_html(`<li>${_text_mark($scope1_id, "a", x + input.b + i)}</li>`);
		_patch_render($scope1_id, "a0", [_filled_guard($scope0_reason, 3) && ">f", _filled_guard($scope0_reason, 2) && "c"]);
		_scope($scope1_id, {
			c: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 2);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: input.b,
		g: _write_if($scope0_reason, 0) && x
	}) || $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 3));
}, 1);
