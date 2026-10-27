// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a1: "a1 !a0; D ;<button class=r> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "we", item?.v, !$sg__input_items);
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "wg", i, !$sg__input_items);
		_html(`<button class=r>${_patch_text($scope1_id, "b", item.id, void 0, $scope0_reason, 0)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		$scope0_page && _scope($scope1_id, {
			e: item?.v,
			g: i,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	$scope0_page && _scope($scope0_id, { f: count });
}, 1);
