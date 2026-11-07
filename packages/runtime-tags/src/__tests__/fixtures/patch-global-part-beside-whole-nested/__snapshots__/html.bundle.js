// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", $global$1.meta.title + ":" + $global$1.meta.flag, 1, 4, 0)}</p>`);
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_fill_global_subscribe("a1", $scope0_id, $cg__input_show);
	_fill_global_subscribe("a2", $scope0_id, $cg__input_show);
	_scope($scope0_id, {});
}, 1);
