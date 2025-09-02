import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/counter.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    "countChange": $countChange,
    count
  } = input;
  let x = count;
  _$.write(`<button${_$.attr("id", input.id)}${_$.attr("data-internal", x)}>`);
  _$.dynamicTag($scope0_id, "#text/1", input.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.content */0));
  _$.write(`</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/counter.marko_0_x");
  _$.writeScope($scope0_id, {
    $countChange: _$.serializeIf($serialize, /* input.count */2) && $countChange,
    count: _$.serializeIf($serialize, /* input.countChange */1) && count,
    x,
    "TagVariableChange:x": $countChange
  }, "__tests__/tags/counter.marko", 0, {
    $countChange: 0,
    count: "1:10",
    x: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});