// template.marko
_shells({ a: "a !a1;D bD l ;<main><div></div><span> </span><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main><div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<span>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 1)}</span><button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_title && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: input.title,
		h: show
	}) || $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 0));
}, 1);
