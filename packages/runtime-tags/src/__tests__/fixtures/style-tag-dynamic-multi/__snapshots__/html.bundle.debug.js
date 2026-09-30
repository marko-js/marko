// v:template.marko.css
var v_template_marko_default = "\n  .a { color: var(--M___tests__-1btemplate-1amarko_0); width: var(--M___tests__-1btemplate-1amarko_1) }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_color__OR__input_width = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M___tests__-1btemplate-1amarko_0:${_escape_style_value(input.color)};--M___tests__-1btemplate-1amarko_1:${_escape_style_value(input.width)};`)}${_el_resume($scope0_id, "#style/0", $sg__input_color__OR__input_width)}<header class=a>Header</header><main class=a>Main</main>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
