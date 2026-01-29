import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let message = {
    text: "hi"
  };
  let show = true;
  _._html(`<button>hide</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(message.text)}${_._el_resume($scope1_id, "#text/0")}`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "8:2");
      return 0;
    }
  }, $scope0_id, "#text/1", 1, /* show */1, /* show */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    message_text: message?.text
  }, "__tests__/template.marko", 0, {
    message_text: ["message.text", "1:6"]
  });
  _._resume_branch($scope0_id);
});