import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let message = {
    text: "hi"
  };
  let show = true;
  _$.write(`<button>hide</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.resumeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(message.text)}${_$.markResumeNode($scope1_id, "#text/0")}`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "8:2");
      return 0;
    }
  }, $scope0_id, "#text/1", 1, /* state: show */1, 0, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    message_text: message?.text
  }, "__tests__/template.marko", 0, {
    message_text: ["message.text", "1:6"]
  });
  _$.resumeClosestBranch($scope0_id);
});