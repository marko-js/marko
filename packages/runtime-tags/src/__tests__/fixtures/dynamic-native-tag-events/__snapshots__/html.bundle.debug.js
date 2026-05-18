// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = "span";
	_dynamic_tag($scope0_id, "#text/0", tagName, {
		class: "A",
		onClick: _resume(function() {
			tagName = tagName === "span" ? "div" : "span";
		}, "__tests__/template.marko_0/onClick", $scope0_id)
	}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("body content");
	}, $scope0_id));
	writeScope($scope0_id, { tagName }, "__tests__/template.marko", 0, { tagName: "1:6" });
	_resume_branch($scope0_id);
}, 1);
