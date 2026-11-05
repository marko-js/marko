// template.marko
_shells({
	a: "a !a3;D%b ;<main><!><button>t</button></main>",
	a2: "a2 a6; ;<a>go</a>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_attrs = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs({
				...input.attrs,
				class: "off"
			}, "a", $scope1_id, "a")}>go</a>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_patch_render($scope1_id, "a1", _filled_guard($scope0_reason, 1) && ">f");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$fg__input_attrs && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: input.attrs,
		g: on
	}) || $fg__input_attrs && _patch_write($scope0_id, "xf", input.attrs, !_server_guard($scope0_reason, 1));
}, 1);
