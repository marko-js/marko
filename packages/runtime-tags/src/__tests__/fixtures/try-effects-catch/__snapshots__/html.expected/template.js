import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  _$.tryContent($scope0_id, "#text/1", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(_$.escapeXML((() => {
      throw new Error("ERROR!");
    })()));
    _$.writeEffect($scope1_id, "__tests__/template.marko_1");
    _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "2:2");
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", err => {
        const $scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err.message)}${_$.markResumeNode($scope2_id, "#text/0")}`);
        _$.writeScope($scope2_id, {}, "__tests__/template.marko", "7:4");
      }, $scope0_id)
    })
  });
  const el2 = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});