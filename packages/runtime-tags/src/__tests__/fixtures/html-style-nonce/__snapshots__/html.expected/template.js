import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const spreadAttrs = {
    nonce: "override-spread"
  };
  let mounted = false;
  _._html(`<style${_._attr_nonce()}>
  A {}
</style><style nonce=override>
  B {}
</style><style${_._attrs({
    nonce: _.$global().cspNonce,
    ...spreadAttrs
  }, "#style/1", $scope0_id, "style")}>
  C {}
</style>${_._el_resume($scope0_id, "#style/1")}`);
  _._if(() => {
    if (mounted) {
      const $scope1_id = _._scope_id();
      _._html(`<style${_._attr_nonce()}>
    D {}
  </style>`);
      _._scope($scope1_id, {}, "__tests__/template.marko", "17:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, /* mounted */1, /* mounted */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._script($scope0_id, "__tests__/template.marko_0_spreadAttrs");
  _._scope($scope0_id, {
    spreadAttrs
  }, "__tests__/template.marko", 0, {
    spreadAttrs: "10:8"
  });
  _._resume_branch($scope0_id);
});