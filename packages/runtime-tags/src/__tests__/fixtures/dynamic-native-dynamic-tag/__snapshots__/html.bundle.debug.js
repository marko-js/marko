// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = "span";
	let className = "A";
	_dynamic_tag($scope0_id, "#text/0", tagName, { class: className }, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("body content");
	}, $scope0_id));
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_tagName");
	writeScope($scope0_id, {
		tagName,
		className
	}, "__tests__/template.marko", 0, {
		tagName: "1:6",
		className: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
