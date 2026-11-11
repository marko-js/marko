// template.marko
_shells({
	a: "a !a3;D%b ;<main><!><button>+</button></main>",
	a2: "a2 a5;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title2 = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_title = _filled_guard($scope0_reason, 1);
			const label = "[" + input.title + "]";
			$fg__input_title && _patch_write($scope1_id, "xb", label, !$sg__input_title);
			_html(`<p>${_text_mark($scope1_id, "a", label + " #0")}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_patch_render($scope1_id, "a1", $fg__input_title && "b");
			_scope($scope1_id, {
				b: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$fg__input_title2 && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.title,
		g: count
	}) || $fg__input_title2 && $ui__input_show && _patch_write($scope0_id, "xf", input.title, !$sg__input_title);
}, 1);
