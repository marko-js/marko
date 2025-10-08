import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  let x = 0;
  const getMessage = _._resume(() => input.message, "__tests__/template.marko_0/getMessage", $scope0_id);
  _._html("<div>");
  _._if(() => {
    if (x) {
      const $scope1_id = _._scope_id();
      _._html(`<span>${_._escape(getMessage())}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($serialize, /* input.message */0))}</span>`);
      _._scope($scope1_id, {
        _: _._serialize_if($serialize, /* input.message */0) && _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "4:4");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* x */1, /* x */1, "</div>", 1);
  _._html(`<button>${_._escape(x)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    input_message: input.message,
    x,
    getMessage
  }, "__tests__/template.marko", 0, {
    input_message: ["input.message"],
    x: "1:6",
    getMessage: "2:8"
  });
  _._resume_branch($scope0_id);
});