// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<svg><style${_attr_nonce()}>.a{color:${_escape(input.value)}}</style>${_el_resume($scope0_id, "#style/0", $sg__input_value)}<script${_attr_nonce()} type=text/plain>&lt;${_escape(input.value)}<\/script>${_el_resume($scope0_id, "#script/1", $sg__input_value)}<foreignObject><style${_attr_nonce()}>${_escape_style(`.b{color:${_to_text(input.value)}}`)}</style>${_el_resume($scope0_id, "#style/2", $sg__input_value)}</foreignObject></svg><math><style${_attr_nonce()}>.c{color:${_escape(input.value)}}</style>${_el_resume($scope0_id, "#style/3", $sg__input_value)}<mi><style${_attr_nonce()}>${_escape_style(`.d{color:${_to_text(input.value)}}`)}</style>${_el_resume($scope0_id, "#style/4", $sg__input_value)}</mi></math>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
