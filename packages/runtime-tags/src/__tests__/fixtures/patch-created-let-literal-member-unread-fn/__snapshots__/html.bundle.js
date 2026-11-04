// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let o = {
				fn() {
					return "f:" + input.label;
				},
				label: input.label
			};
			_html(`<p>${_text_mark($scope1_id, "a", o.label, 1, $cg__input_label << 1, 0, 1)}</p>`);
			$cg__input_label && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
