// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_attrs = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_attrs && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: input.attrs,
		f: on
	}) || $fg__input_attrs && _patch_write($scope0_id, "xe", input.attrs, !_server_guard($scope0_reason, 0));
}, 1);
