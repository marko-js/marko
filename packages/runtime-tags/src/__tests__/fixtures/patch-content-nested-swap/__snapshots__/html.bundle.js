// template.marko
_shells({
	a: "a !a2;D%b D ;<main><!><button> </button></main>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html(`<button>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a0", "g");
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.content,
		h: count
	}) || $fg__input_content && $ui__input_show && _patch_write($scope0_id, "xg", input.content, !_server_guard($scope0_reason, 2));
}, 1);
