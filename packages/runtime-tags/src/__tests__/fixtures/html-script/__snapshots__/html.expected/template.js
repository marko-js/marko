import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<script type=importmap>
  {
    "imports": {
      "${_$.escapeScript(count)}": "https://markojs.com",
    }
  }
</script>${_$.markResumeNode($scope0_id, "#script/0")}<div>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});