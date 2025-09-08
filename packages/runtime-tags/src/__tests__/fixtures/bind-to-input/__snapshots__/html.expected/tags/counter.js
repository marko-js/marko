import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/counter.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const {
    "countChange": $countChange,
    count
  } = input;
  let x = count;
  _._html(`<button${_._attr("id", input.id)}${_._attr("data-internal", x)}>`);
  _._dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _._serialize_guard($serialize, /* input.content */0));
  _._html(`</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/counter.marko_0_x");
  _._scope($scope0_id, {
    $countChange: _._serialize_if($serialize, /* input.count */2) && $countChange,
    count: _._serialize_if($serialize, /* input.countChange */1) && count,
    x,
    "TagVariableChange:x": $countChange || void 0
  }, "__tests__/tags/counter.marko", 0, {
    $countChange: 0,
    count: "1:10",
    x: "3:6"
  });
  _._resume_branch($scope0_id);
});