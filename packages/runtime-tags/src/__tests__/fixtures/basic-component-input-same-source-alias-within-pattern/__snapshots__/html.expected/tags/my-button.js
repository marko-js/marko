import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/my-button.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    onClick,
    value: {
      text
    }
  } = input;
  const {
    value: {
      text: textAlias
    }
  } = input;
  _$.write(`<button>${_$.escapeXML(text)}${_$.markResumeNode($scope0_id, "#text/1")} <!>${_$.escapeXML(textAlias)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _$.writeScope($scope0_id, {
    onClick
  }, "__tests__/tags/my-button.marko", 0, {
    onClick: "1:10"
  });
});