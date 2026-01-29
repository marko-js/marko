import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const spreadAttrs = {
    nonce: "override-spread"
  };
  let mounted = false;
  _._html(`<script${_._attr_nonce()} type=magic>
  A
</script><script type=magic nonce=override>
  B
</script><script${_._attrs({
    nonce: _.$global().cspNonce,
    type: "magic",
    ...spreadAttrs
  }, "#script/1", $scope0_id, "script")}>
  C
</script>${_._el_resume($scope0_id, "#script/1")}`);
  _._if(() => {
    if (mounted) {
      const $scope1_id = _._scope_id();
      _._html(`<script${_._attr_nonce()} type=magic>
    D
  </script>`);
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