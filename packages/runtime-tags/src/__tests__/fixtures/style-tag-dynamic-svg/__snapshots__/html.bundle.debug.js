// v:template.marko.css
var v_template_marko_default = "\n    circle {\n      fill: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0);\n    }\n  ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let color = input.color;
	_html(`<svg>${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:${_escape_style_value(color)};`)}${_el_resume($scope0_id, "#style/0")}<circle cx=5 cy=5 r=4></circle></svg><button>update</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
