// v:template.marko.css
var v_template_marko_default = "\n  .content {\n    color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-1btemplate-1amarko_0);\n  }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-1btemplate-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope0_id, "#style/0", _serialize_guard($scope0_reason, 0))}<div class=content>Hello</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
