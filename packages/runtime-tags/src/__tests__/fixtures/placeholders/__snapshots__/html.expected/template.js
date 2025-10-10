import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`${_._sep(_._serialize_guard($scope0_reason, /* input.x */0))}${_._escape(input.x)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.x */0))}<span>${_._escape(input.x)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.x */0))}<div></div></span><div><div>a</div>${_._escape(input.x)}${_._el_resume($scope0_id, "#text/2", _._serialize_guard($scope0_reason, /* input.x */0))}Hello Text &lt;a/>${_._sep(_._serialize_guard($scope0_reason, /* input.x */0))}${_._unescaped(input.x)}${_._el_resume($scope0_id, "#text/3", _._serialize_guard($scope0_reason, /* input.x */0))}Hello HTML <span>hi</span><script>
    ${_._escape_script("'Hello <b> </script>'")}
  </script><style>
    ${_._escape_style(".test { content: 'Hello <b> </style>' }")}
  </style></div>`);
  _._serialize_guard($scope0_reason, /* input.x */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});