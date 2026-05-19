// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = "span";
	_dynamic_tag($scope0_id, "a", tagName, {
		class: "A",
		onClick: _resume(function() {
			tagName = tagName === "span" ? "div" : "span";
		}, "a0", $scope0_id)
	}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("body content");
	}, $scope0_id));
	writeScope($scope0_id, { b: tagName });
	_resume_branch($scope0_id);
}, 1);
