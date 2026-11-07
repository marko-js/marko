// template.marko
_shells({ a: "a !a2; D l%;<button> </button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_page_render();
	_write_guard($scope0_reason, 0);
	const $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$global();
	let s = 0;
	_html(`<button>${_text_mark($scope0_id, "b", s)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_fill_global_subscribe("a1", $scope0_id, 1);
	_script($scope0_id, "a2");
	$fg__input_a && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, {
		f: input.a,
		g: s
	}) || $fg__input_a && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 0));
}, 1);
