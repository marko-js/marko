// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_text_resume($scope0_id, "a", input.x, $wg__input_x * 2)}<span>${_text_resume($scope0_id, "b", input.x, $wg__input_x)}<div></div></span><div><div>a</div>${_text_resume($scope0_id, "c", input.x, $wg__input_x)}Hello Text &lt;a/>${_html_resume($scope0_id, "d", input.x, $wg__input_x * 2)}Hello HTML <span>hi</span><script${_attr_nonce()}>${_escape_script(`
    ${_to_text("'Hello <b> <\/script>'")}
  `)}<\/script><style${_attr_nonce()}>${_escape_style(`
    ${_to_text(".test { content: 'Hello <b> </style>' }")}
  `)}</style></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
