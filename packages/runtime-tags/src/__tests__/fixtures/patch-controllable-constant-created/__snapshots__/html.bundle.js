// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1; b bD ;<textarea></textarea><select><option value=a>A</option><option value=b>B</option></select><p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<textarea>${_attr_textarea_value($scope1_id, "a", "hello", 0, 1, 0, 0)}</textarea>${_el_mark($scope1_id, "a", 0)}`);
			_attr_select_value($scope1_id, "b", "b", 0, () => {
				_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
			}, 1, 0, 0);
			_html(`${_el_mark($scope1_id, "b", 0)}<p>${_text_mark($scope1_id, "c", input.note, 1, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	$fg__input_note && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.note }) || $fg__input_note && $ui__input_show && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 1));
}, 1);
