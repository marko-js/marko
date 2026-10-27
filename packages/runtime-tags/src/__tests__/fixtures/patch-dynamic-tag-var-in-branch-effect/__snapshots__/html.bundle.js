// template.marko
_shells({
	a0: "a0",
	a: "a !a4;b%;<!><!><!>",
	a3: "a3;b1;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputtype_scope = _peek_scope_id();
			let el = _dynamic_tag($scope1_id, "a", input.type, {}, 2, _content_resume("a0", () => {
				_scope_id();
				_scope_reason();
				_html("body");
			}, $scope1_id), void 0, void 0, $scope0_reason, 1, void 0, void 0, void 0, "a1");
			_var($scope1_id, "b", $inputtype_scope, "a1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				c: el,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a4", $wg__input_show);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.type }) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va5", input.type, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.type));
}, 1);
