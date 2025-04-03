import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("Before");
  _$.tryContent($scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`Inside${_$.escapeXML((() => {
      throw new Error("ERROR!");
    })())}`);
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", err => {
        const $scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err.message)}${_$.markResumeNode($scope2_id, "#text/0")}`);
      }, $scope0_id)
    })
  });
  _$.write("After");
});