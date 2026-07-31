// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html_opens("__tests__/template.marko:2:1", "__tests__/template.marko:2:17", "__tests__/template.marko:3:1", "__tests__/template.marko:4:3"), _html(`${_sep($sg__input_x)}${_escape(input.x)}${_el_resume($scope0_id, "#text/0", $sg__input_x)}<span>${_escape(input.x)}${_el_resume($scope0_id, "#text/1", $sg__input_x)}<div></div></span><div><div>a</div>${_escape(input.x)}${_el_resume($scope0_id, "#text/2", $sg__input_x)}Hello Text &lt;a/>${_sep($sg__input_x)}`), _html_raw("__tests__/template.marko:9:3"), _html(_unescaped(input.x)), _html(_el_resume($scope0_id, "#text/3", $sg__input_x)), _html_raw("__tests__/template.marko:11:3"), _html("Hello HTML <span>hi</span>"), _html_opens("__tests__/template.marko:12:3", "__tests__/template.marko:15:3"), _html(`<script${_attr_nonce()}>${_escape_script(`
    ${_to_text("'Hello <b> <\/script>'")}
  `)}<\/script><style${_attr_nonce()}>${_escape_style(`
    ${_to_text(".test { content: 'Hello <b> </style>' }")}
  `)}</style></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
