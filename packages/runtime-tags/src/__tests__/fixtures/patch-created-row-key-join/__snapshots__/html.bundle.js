// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a0: "a0 !;D%;<li><!></li>",
	a1: "a1 a6 a7!a3; D ;<button> </button>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let m = 1;
		_patch_value($scope1_id, "a2", m);
		_html("<li>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_resume($scope2_id, "b", item.id + n + m)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a3");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 2);
		_html("</li>");
		_patch_value($scope1_id, "a4", n, 1);
		_scope($scope1_id, {
			M: item?.id,
			c: n,
			d: m,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 1), void 0, void 0, "a0", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, { e: _unfilled_if($scope0_reason, 1) && input.show });
}, 1, 0);
