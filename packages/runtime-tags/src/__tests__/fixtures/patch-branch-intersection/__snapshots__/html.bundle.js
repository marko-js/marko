// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: "a1 a5;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.title + " #0")}</p>`);
			_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 1) && ">f");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, {
		f: input.title,
		g: count
	}) || $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 1));
}, 1);
