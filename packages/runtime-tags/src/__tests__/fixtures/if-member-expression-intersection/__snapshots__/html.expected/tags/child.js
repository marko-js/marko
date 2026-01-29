import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let hide = true;
  let text = "";
  const id = _._id();
  _._html(`<div${_._attr("id", id)}>`);
  _._if(() => {
    if (!hide && text.length) {
      const $scope1_id = _._scope_id();
      _._html(`<div>${_._escape(text)}${_._el_resume($scope1_id, "#text/0")}</div>`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/tags/child.marko", "6:4");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* hide, text */1, /* hide, text */1, "</div>", 1);
  _._script($scope0_id, "__tests__/tags/child.marko_0_id");
  _._scope($scope0_id, {
    hide,
    text,
    text_length: text?.length,
    id
  }, "__tests__/tags/child.marko", 0, {
    hide: "1:6",
    text: "2:6",
    text_length: ["text.length", "2:6"],
    id: "3:5"
  });
  _._resume_branch($scope0_id);
});