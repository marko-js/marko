// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Note = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html_opens("__tests__/template.marko:2:3"), _html("<span>note</span>");
	}) };
	_html_opens("__tests__/template.marko:4:1"), _html("<div id=plain>");
	_attr_content("#div/0", $scope0_id, Note, 0);
	_html_opens("__tests__/template.marko:5:1", "__tests__/template.marko:6:1"), _html("</div><div id=commented></div><div id=withBody>body wins</div>");
}, 1);
