// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name } = input;
	_html(`<p>${_text_resume($scope0_id, "#text/0", name, _serialize_guard($scope0_reason, 0))}</p>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_name#3");
	writeScope($scope0_id, { name }, "__tests__/tags/child.marko", 0, { name: "1:9" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = ["a", "b"];
	_html("<div>");
	if (show) {
		const $scope1_id = _scope_id();
		_html("<section>");
		child_default({ name: "outer" });
		forOf(items, (item) => {
			const $scope2_id = _scope_id();
			child_default({ name: item });
		});
		_html("</section>");
	}
	_html("</div>");
}, 1);
