// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_if($scope0_reason, 0);
	_write_guard($scope0_reason, 0);
	const $fg__input_on = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_on && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.on,
		f: open
	}) || $fg__input_on && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 0));
}, 1);
