// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: "a1 a4;D%c%;<p><!> <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_html(`<p>${_text_mark($scope1_id, "a", label, 1, $scope0_reason, 1)} ${_text_mark($scope1_id, "b", 0, 2)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.title,
		g: count
	}) || $fg__input_title && $ui__input_show && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 1));
}, 1);
