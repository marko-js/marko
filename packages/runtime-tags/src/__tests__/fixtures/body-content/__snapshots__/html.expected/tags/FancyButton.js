import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/FancyButton.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    content,
    ...attrs
  } = input;
  _$.write(`<button${_$.attrs(attrs, "#button/0", $scope0_id, "button")}>`);
  _$.dynamicTag($scope0_id, "#text/1", content, {}, 0, 0, _$.serializeGuard($serialize, /* content */0));
  _$.write(`</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/FancyButton.marko_0_attrs");
  _$.writeScope($scope0_id, {
    input
  }, "__tests__/tags/FancyButton.marko", 0, {
    input: "1:22"
  });
});