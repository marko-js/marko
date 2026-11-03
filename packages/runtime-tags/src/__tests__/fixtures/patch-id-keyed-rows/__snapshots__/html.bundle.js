// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0; D l ;<label> </label><input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id("A");
		_html(`<label${_attr("for", uid, $scope1_id, "aa$for", 0, 0)}>${_text_resume($scope1_id, "b", item.key, 1, $scope0_reason, 0)}</label>${_el_resume($scope1_id, "a", 0)}<input${_attr("id", uid, $scope1_id, "ac$id", 0, 0)}>${_el_resume($scope1_id, "c", 0)}`);
		_scope($scope1_id, {});
	}, "key", $scope0_id, "a", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
