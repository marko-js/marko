// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_sep($sg__input_x)}${_escape(input.x)}${_el_resume($scope0_id, "a", $sg__input_x)}<span>${_escape(input.x)}${_el_resume($scope0_id, "b", $sg__input_x)}<div></div></span><div><div>a</div>${_escape(input.x)}${_el_resume($scope0_id, "c", $sg__input_x)}Hello Text &lt;a/>${_sep($sg__input_x)}${_unescaped(input.x)}${_el_resume($scope0_id, "d", $sg__input_x)}Hello HTML <span>hi</span><script${_attr_nonce()}>
    ${_escape_script("'Hello <b> <\/script>'")}
  <\/script><style${_attr_nonce()}>
    ${_escape_style(".test { content: 'Hello <b> </style>' }")}
  </style></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
