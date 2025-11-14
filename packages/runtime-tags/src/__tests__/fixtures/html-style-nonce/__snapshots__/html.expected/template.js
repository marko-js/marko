import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const spreadAttrs = {
    nonce: "override-spread"
  };
  _._html(`<style${_._attr_nonce()}>
  A {}
</style><style nonce=override>
  B {}
</style><style${_._attrs({
    nonce: _.$global().cspNonce,
    ...spreadAttrs
  }, "#style/0", $scope0_id, "style")}>
  C {}
</style>${_._el_resume($scope0_id, "#style/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_spreadAttrs");
  _._scope($scope0_id, {
    spreadAttrs
  }, "__tests__/template.marko", 0, {
    spreadAttrs: "10:8"
  });
});