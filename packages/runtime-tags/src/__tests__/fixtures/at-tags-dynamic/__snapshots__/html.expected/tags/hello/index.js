import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/hello/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.resumeForOf(input.list.item, item => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<div class=item${_$.partialAttrs(item, {
      class: 1
    }, "#div/0", $scope1_id, "div")}>`);
    _$.dynamicTag($scope1_id, "#text/1", item.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.list.item */1));
    _$.write(`</div>${_$.markResumeNode($scope1_id, "#div/0")}`);
    _$.writeEffect($scope1_id, "__tests__/tags/hello/index.marko_1_item");
    _$.writeScope($scope1_id, {
      item
    }, "__tests__/tags/hello/index.marko", "1:1", {
      item: "1:5"
    });
  }, 0, $scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.list.item */1), _$.serializeGuard($serialize, /* input.list.item */1), 0, 1);
  _$.resumeForOf(input.col, col => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`<div class=col${_$.partialAttrs(col, {
      class: 1
    }, "#div/0", $scope2_id, "div")}></div>${_$.markResumeNode($scope2_id, "#div/0")}`);
    _$.resumeForOf(col.row, row => {
      const $scope3_id = _$.nextScopeId();
      _$.write(`<div class=row${_$.partialAttrs(row, {
        class: 1
      }, "#div/0", $scope3_id, "div")}>`);
      _$.dynamicTag($scope3_id, "#text/1", row.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.col */2));
      _$.write(`</div>${_$.markResumeNode($scope3_id, "#div/0")}`);
      _$.writeEffect($scope3_id, "__tests__/tags/hello/index.marko_3_row");
      _$.writeScope($scope3_id, {
        row
      }, "__tests__/tags/hello/index.marko", "7:3", {
        row: "7:7"
      });
    }, 0, $scope2_id, "#text/1", _$.serializeGuard($serialize, /* input.col */2), _$.serializeGuard($serialize, /* input.col */2), 0, 1);
    _$.writeEffect($scope2_id, "__tests__/tags/hello/index.marko_2_col");
    _$.writeScope($scope2_id, {
      col
    }, "__tests__/tags/hello/index.marko", "5:1", {
      col: "5:5"
    });
  }, 0, $scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.col */2), _$.serializeGuard($serialize, /* input.col */2));
  _$.serializeGuard($serialize, /* input.list.item,input.col */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});