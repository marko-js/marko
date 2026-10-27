// template.marko
_shells({
	a: "a; b b%;<label>field</label><input><!><!>",
	a2: "a2; ;<style></style>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", 0, 0)}>field</label>${_el_resume($scope0_id, "a", 0)}<input${_attr("id", uid, $scope0_id, "b", 0, 0)}${_attr_class(uid, $scope0_id, "b", 0, 0)}>${_el_resume($scope0_id, "b", 0)}`);
	_for_to(360, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--idsa0:${_patch_style($scope1_id, "ya$--idsa0", input.color, $scope0_reason, 0)};`)}${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0))}`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a1");
		_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a2", 0, 0);
	_scope($scope0_id, {});
}, 1);
