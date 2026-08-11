// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Note = { content: _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<span>note</span>");
	}, $scope0_id) };
	_html("<div id=plain>");
	_attr_content("a", $scope0_id, Note, 0);
	_html("</div><div id=commented></div><div id=withBody>body wins</div>");
}, 1);
