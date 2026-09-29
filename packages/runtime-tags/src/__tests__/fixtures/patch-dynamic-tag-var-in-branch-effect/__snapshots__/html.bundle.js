// template.marko
_shells({
	a: "a !a3;b%;<!><!><!>",
	a0: "a0;b1;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $tag = input.type;
			const $inputtype_scope = _peek_scope_id();
			let el = _dynamic_tag($scope1_id, "a", $tag, {}, _content_resume("a1", () => {
				_scope_id();
				_scope_reason();
				_html("body");
			}, $scope1_id), void 0, void 0, _patch_dynamic_tag($scope1_id, "a", $tag, 0, "a1", "a2", $scope0_reason, 1));
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "c", el);
			_var($scope1_id, "b", $inputtype_scope, "a2");
			_scope($scope1_id, {
				c: el,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	_script($scope0_id, "a3", $sg__input_show);
	$scope0_page && _scope($scope0_id, { e: input.type });
}, 1, 1);
