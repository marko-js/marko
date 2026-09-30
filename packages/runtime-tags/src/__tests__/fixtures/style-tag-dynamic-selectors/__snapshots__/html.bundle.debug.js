// v:template.marko.css
var v_template_marko_default = "\n  .card {\n    color: var(--M___tests__-1btemplate-1amarko_0);\n    padding: calc(var(--M___tests__-1btemplate-1amarko_1) * 1px);\n  }\n  .card:hover {\n    color: var(--M___tests__-1btemplate-1amarko_2);\n  }\n  @media (min-width: 600px) {\n    .card { color: var(--M___tests__-1btemplate-1amarko_3) }\n  }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_color__OR__input_pad__OR__input_hover__OR__input_wide = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M___tests__-1btemplate-1amarko_0:${_escape_style_value(input.color)};--M___tests__-1btemplate-1amarko_1:${_escape_style_value(input.pad)};--M___tests__-1btemplate-1amarko_2:${_escape_style_value(input.hover)};--M___tests__-1btemplate-1amarko_3:${_escape_style_value(input.wide)};`)}${_el_resume($scope0_id, "#style/0", $sg__input_color__OR__input_pad__OR__input_hover__OR__input_wide)}<div class=card>Card</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
