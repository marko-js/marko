// template.marko
_shells({ a: "a !a1;D l D ;<p> </p><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	const x = input.a + count;
	_html(`<p>${_text_mark($scope0_id, "a", x + $global$1.suffix)}</p><button>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", $fg__input_a && "f");
	_scope($scope0_id, {
		f: input.a,
		g: count,
		i: x
	}) || $fg__input_a && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 0));
}, 1);
