// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a0: "a0;D%b%;<li><!><!></li>",
	a1: "a1; ;<ul></ul>",
	a2: "a2;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.id, void 0, $scope0_reason, 0)}`);
		_if(() => {
			if (item.children.length) {
				const $scope2_id = _scope_id();
				_html("<ul>");
				_for_of(item.children, (child) => {
					const $scope3_id = _scope_id();
					_html(`<li>${_patch_text($scope3_id, "a", child, void 0, $scope0_reason, 0)}</li>`);
					_scope($scope3_id, {});
				}, 0, $scope2_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a2", $scope0_reason, 0);
				_html(`</ul>${_el_resume($scope2_id, "a", $sg__input_items)}`);
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["a1"], $scope0_reason, 0);
		_html("</li>");
		_scope($scope1_id, { f: _source_if($scope0_reason, 0) && item?.children });
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
