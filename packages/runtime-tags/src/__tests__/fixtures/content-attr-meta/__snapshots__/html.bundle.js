// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<meta property=og:image:width content=1200><meta property=og:image:height${_attr("content", 630)}>${_el_resume($scope0_id, "a")}<button>resize</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
