// template.marko
_shells({
	a0: "a0; b ;<label>body</label><input>",
	a: "a;b%;<!><!><!>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id("A");
		_html(`<label${_attr("for", uid, $scope1_id, "a", 0, 0)}>body</label>${_el_mark($scope1_id, "a", 0)}<input${_attr("id", uid, $scope1_id, "b", 0, 0)}>${_el_mark($scope1_id, "b", 0)}`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "a", Tag, { content: Body }, 1, 0, 0, $wg__input_items, $scope0_reason, 0);
		!$cg__input_items && _unfilled_if() && _patch_write($scope0_id, "we", Body);
		$cg__input_items && _patch_render($scope2_id, "a1");
		_write_if($scope0_reason, 0) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 0);
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && Body });
}, 1);
