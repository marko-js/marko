// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onChange = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_onChange && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: input.onChange,
		f: open
	}) || $fg__input_onChange && _patch_write($scope0_id, "xe", input.onChange, !_server_guard($scope0_reason, 0));
}, 1);
