// template.marko
_shells({
	a: "a; b%;<h2>Fields</h2><!><!>",
	a0: "a0; D l ;<label> </label><input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const headingId = _id("A");
	_html(`<h2${_attr("id", headingId, $scope0_id, "a", 0, 0)}>Fields</h2>${_el_resume($scope0_id, "a", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id("B");
		_html(`<label${_attr("for", uid, $scope1_id, "a", 0, 0)}>${_text_resume($scope1_id, "b", item.key, void 0, $scope0_reason, 0)}</label>${_el_resume($scope1_id, "a", 0)}<input${_attr("id", uid, $scope1_id, "c", 0, 0)}${_attr("aria-describedby", headingId, $scope1_id, "c", 0, 0)}>${_el_resume($scope1_id, "c", 0)}`);
		_scope($scope1_id, {});
	}, "key", $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && headingId });
}, 1);
