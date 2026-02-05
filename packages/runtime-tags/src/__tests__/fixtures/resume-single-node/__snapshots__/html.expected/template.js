import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let itemId = 0;
  let items = [0];
  _._for_of(items, () => {
    const $scope1_id = _._scope_id();
    _._html("<div>a</div>");
    _._if(() => {
      if ((items.length > 1)) {
        const $scope2_id = _._scope_id();
        _._html("<div>b</div>");
        _._scope($scope2_id, {}, "__tests__/template.marko", "6:4");
        return 0;
      }
    }, $scope1_id, "#text/0", 1, /* items */1, /* items */1, 0, 1);
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "4:2");
  }, 0, $scope0_id, "#text/0");
  _._html(`<button>More</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_itemId_items");
  _._scope($scope0_id, {
    itemId,
    items,
    items_length: items?.length
  }, "__tests__/template.marko", 0, {
    itemId: "1:6",
    items: "2:6",
    items_length: ["items.length", "2:6"]
  });
  _._resume_branch($scope0_id);
});