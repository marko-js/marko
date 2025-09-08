import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/2counters.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  let count1 = input.count1;
  let count2 = input.count2;
  _._html(`<button>${_._escape(count1)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}<button>${_._escape(count2)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/tags/2counters.marko_0_count2");
  _._script($scope0_id, "__tests__/tags/2counters.marko_0_count1");
  _._scope($scope0_id, {
    input_count1: _._serialize_if($serialize, /* input.count1Change */1) && input.count1,
    input_count1Change: _._serialize_if($serialize, /* input.count1 */0) && input.count1Change,
    input_count2: _._serialize_if($serialize, /* input.count2Change */3) && input.count2,
    input_count2Change: _._serialize_if($serialize, /* input.count2 */2) && input.count2Change,
    count1,
    count2,
    "TagVariableChange:count1": input.count1Change || void 0,
    "TagVariableChange:count2": input.count2Change || void 0
  }, "__tests__/tags/2counters.marko", 0, {
    input_count1: ["input.count1"],
    input_count1Change: ["input.count1Change"],
    input_count2: ["input.count2"],
    input_count2Change: ["input.count2Change"],
    count1: "1:6",
    count2: "2:6"
  });
  _._resume_branch($scope0_id);
});