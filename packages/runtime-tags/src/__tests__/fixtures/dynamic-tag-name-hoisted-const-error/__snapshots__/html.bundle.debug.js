// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $Tag_getter = _hoist($scope0_id, "__tests__/template.marko_0_Tag#4/hoist");
	_dynamic_tag($scope0_id, "#text/0", input.show ? $Tag_getter : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("body");
	}, $scope0_id), 0, _write_guard($scope0_reason, 0));
	const Tag = "span";
	_scope($scope0_id, { Tag }, "__tests__/template.marko", 0, { Tag: "2:8" });
	_assert_hoist(Tag);
}, 1);
