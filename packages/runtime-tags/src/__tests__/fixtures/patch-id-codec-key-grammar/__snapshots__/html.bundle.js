// template.marko
_shells({
	a: "a; b%;<h1>Keys</h1><!><!>",
	a0: "a0; b ;<label>Key</label><input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const heading = _id("A");
	_html(`<h1${_patch_attr($scope0_id, "aa$id", "id", heading, 0, 0)}>Keys</h1>${_el_resume($scope0_id, "a", 0)}`);
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const uid = _id("B");
		_html(`<label${_patch_attr($scope1_id, "aa$for", "for", uid, 0, 0)}>Key</label>${_el_resume($scope1_id, "a", 0)}<input${_patch_attr($scope1_id, "ab$id", "id", uid, 0, 0)}${_patch_attr($scope1_id, "ab$aria-labelledby", "aria-labelledby", heading, 0, 0)}>${_el_resume($scope1_id, "b", 0)}`);
		$scope0_page && _scope($scope1_id, {});
	}, (key) => key, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && heading });
}, 1);
