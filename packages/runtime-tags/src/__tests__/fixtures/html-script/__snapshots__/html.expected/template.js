import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<script${_._attr_nonce()} type=importmap>
  {
    "imports": {
      "${_._escape_script(count)}": "https://markojs.com",
    }
  }
</script>${_._el_resume($scope0_id, "#script/0")}<div>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});