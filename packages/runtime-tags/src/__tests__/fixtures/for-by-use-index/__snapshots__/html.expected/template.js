import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let messages = ["hello"];
  let last = undefined;
  _._html("<div>");
  _._for_of(messages, (message, index) => {
    const $scope1_id = _._scope_id();
    _._html(`<button>${_._unescaped(message)}${_._el_resume($scope1_id, "#text/1")}</button>${_._el_resume($scope1_id, "#button/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1_messages_index");
    _._scope($scope1_id, {
      index,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "4:4", {
      index: "4:17"
    });
  }, f => f, $scope0_id, "#div/0", /* messages */1, /* messages */1, /* messages */1, "</div>", 1);
  _._if(() => {
    if (last !== undefined) {
      const $scope2_id = _._scope_id();
      _._html(`<div>${_._escape(last)}${_._el_resume($scope2_id, "#text/0")}</div>`);
      _._scope($scope2_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "15:2");
      return 0;
    }
  }, $scope0_id, "#text/1", 1, /* last */1, /* last */1, 0, 1);
  _._scope($scope0_id, {
    messages,
    last
  }, "__tests__/template.marko", 0, {
    messages: "1:6",
    last: "2:6"
  });
  _._resume_branch($scope0_id);
});