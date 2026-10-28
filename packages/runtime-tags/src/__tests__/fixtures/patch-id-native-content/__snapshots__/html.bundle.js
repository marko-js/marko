// template.marko
_shells({
	a0: "a0",
	a: "a;b%b%;<!><!><!><!>",
	a1: "a1; ;<div></div>",
	a2: "a2 !a3; ;<section></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id("A");
		_html(`<label${_attr("for", uid, $scope1_id, "aa$for", 0, 0)}>body</label>${_el_resume($scope1_id, "a", 0)}<input${_attr("id", uid, $scope1_id, "ab$id", 0, 0)}>${_el_resume($scope1_id, "b", 0)}`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html("<div>");
		_attr_content("a", $scope2_id, Body, 0, 1, 0, 0);
		_html(`</div>${_el_resume($scope2_id, "a", 0)}`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html("<section");
		_attrs_content({ content: Body }, "a", $scope3_id, "section", 1, 1, 0, 0, 0);
		_html(`</section>${_el_resume($scope3_id, "a")}`);
		_script($scope3_id, "a3");
		_scope($scope3_id, {});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && Body });
}, 1);
