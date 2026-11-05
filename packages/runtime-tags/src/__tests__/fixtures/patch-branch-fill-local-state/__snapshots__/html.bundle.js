// template.marko
_shells({
	a: "a !a4;D%bD l ;<main><!><em> </em><button id=c>+</button></main>",
	a3: "a3 !a0;D l ;<p> </p><button id=n>n</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_text_mark($scope1_id, "a", input.title + "@0")}</p><button id=n>n</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_patch_render($scope1_id, "a1", _filled_guard($scope0_reason, 1) && ">g");
			_patch_fill($scope1_id, "va2", n, 1);
			_scope($scope1_id, {
				c: n,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_html(`<em>${_text_mark($scope0_id, "b", count)}</em><button id=c>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_title && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a5", "g");
	_scope($scope0_id, {
		g: input.title,
		h: count
	}) || $fg__input_title && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 1));
}, 1);
