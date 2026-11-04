// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	_client_guard($scope0_reason, 1);
	const $fg__input_outer = _filled_guard($scope0_reason, 0), $fg__input_inner = _filled_guard($scope0_reason, 1), $wi__input_inner = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let on = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_outer && _patch_render($scope0_id, "a1", "e");
	$fg__input_inner && _patch_subscribers($scope0_id, "a3", "f");
	_scope($scope0_id, {
		e: input.outer,
		f: input.inner,
		g: count,
		h: on,
		j: $wi__input_inner && $input_inner__closures
	}) || ($fg__input_outer && _patch_write($scope0_id, "xe", input.outer, !_server_guard($scope0_reason, 0)), $fg__input_inner && _patch_write($scope0_id, "xf", input.inner, !_server_guard($scope0_reason, 1)));
}, 1);
