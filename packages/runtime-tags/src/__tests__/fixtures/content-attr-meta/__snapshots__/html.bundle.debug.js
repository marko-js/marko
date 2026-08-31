// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let height = 630;
	_html(`<meta property=og:image:width content=1200><meta property=og:image:height${_attr("content", height)}>${_el_resume($scope0_id, "#meta/0")}<button>resize</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
