// template.marko
_shells({ a: "a !a0;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "b", input.content + ":0")}</p><button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_content && "f");
	_scope($scope0_id, {
		f: input.content,
		g: count
	}) || $fg__input_content && _patch_write($scope0_id, "xf", input.content, !_server_guard($scope0_reason, 0));
}, 1);
