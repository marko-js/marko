import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<!>${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/0")}<span>${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/1")}<div></div></span><div><div>a</div>${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/2")}Hello Text &lt;a/><!>${_$.toString(input.x)}${_$.markResumeNode($scope0_id, "#text/3")}Hello HTML <span>hi</span><script>
    ${_$.escapeScript("'Hello <b> </script>'")}
  </script><style>
    ${_$.escapeStyle(".test { content: 'Hello <b> </style>' }")}
  </style></div>`);
});