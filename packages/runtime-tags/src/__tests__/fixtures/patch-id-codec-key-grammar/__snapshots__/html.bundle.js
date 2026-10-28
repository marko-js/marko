// template.marko
_shells({
	a: "a; b%;<h1>Keys</h1><!><!>",
	a0: "a0; b ;<label>Key</label><input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const heading = _id("A");
	_html(`<h1${_attr("id", heading, $scope0_id, "aa$id", 0, 0)}>Keys</h1>${_el_resume($scope0_id, "a", 0)}`);
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const uid = _id("B");
		_html(`<label${_attr("for", uid, $scope1_id, "aa$for", 0, 0)}>Key</label>${_el_resume($scope1_id, "a", 0)}<input${_attr("id", uid, $scope1_id, "ab$id", 0, 0)}${_attr("aria-labelledby", heading, $scope1_id, "ab$aria-labelledby", 0, 0)}>${_el_resume($scope1_id, "b", 0)}`);
		_scope($scope1_id, {});
	}, (key) => key, $scope0_id, "b", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
	_scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && heading });
}, 1);
