// v:template.marko.css
var v_template_marko_default = "\n  .box { margin: var(--M___tests__-1btemplate-1amarko_0) var(--M___tests__-1btemplate-1amarko_1) }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_block__OR__input_inline = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M___tests__-1btemplate-1amarko_0:${_escape_style_value(input.block)};--M___tests__-1btemplate-1amarko_1:${_escape_style_value(input.inline)};`)}${_el_resume($scope0_id, "#style/0", $sg__input_block__OR__input_inline)}<div class=box>Hi</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
