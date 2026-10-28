// template.marko
_shells({ a: "a !a1; D l%;<button> </button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_page_render();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$global();
	let s = 0;
	_html(`<button>${_text_resume($scope0_id, "b", s)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.a,
		g: s
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.a, !_server_guard($scope0_reason, 0));
}, 1);
