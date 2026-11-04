// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input && "d");
	_scope($scope0_id, {
		d: input,
		e: count
	}) || $fg__input && _patch_write($scope0_id, "xd", input, !_server_guard($scope0_reason, 0));
}, 1);
