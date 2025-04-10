import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`${_$.commentSeparator(_$.serializeGuard($serialize, 0))}${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, 0))}<span>${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, 0))}<div></div></span><div><div>a</div>${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/2", _$.serializeGuard($serialize, 0))}Hello Text &lt;a/>${_$.commentSeparator(_$.serializeGuard($serialize, 0))}${_$.toString(input.x)}${_$.markResumeNode($scope0_id, "#text/3", _$.serializeGuard($serialize, 0))}Hello HTML <span>hi</span><script>
    ${_$.escapeScript("'Hello <b> </script>'")}
  </script><style>
    ${_$.escapeStyle(".test { content: 'Hello <b> </style>' }")}
  </style></div>`);
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});