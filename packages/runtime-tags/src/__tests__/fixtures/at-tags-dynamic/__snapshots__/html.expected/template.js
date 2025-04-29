import * as _$ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let $col;
  let $item;
  _$.forOf(["red", "blue", "green"], color => {
    if (color === "red") {
      $item = _$.attrTags($item, {
        style: {
          color
        },
        content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
          const $scope1_id = _$.nextScopeId();
          _$.write("foo");
        }, $scope0_id)
      });
    } else {
      $item = _$.attrTags($item, {
        style: {
          color
        },
        content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
          const $scope2_id = _$.nextScopeId();
          _$.write("bar");
        }, $scope0_id)
      });
    }
  });
  _$.forOf([["a", "b"], ["c", "d"]], (col, i) => {
    let $row;
    _$.forOf(col, row => {
      $row = _$.attrTags($row, {
        row: row,
        content: _$.registerContent("__tests__/template.marko_3_renderer", () => {
          const $scope3_id = _$.nextScopeId();
          _$.write(`${_$.escapeXML(row)}${_$.markResumeNode($scope3_id, "#text/0")}`);
          _$.writeScope($scope3_id, {
            row
          }, "__tests__/template.marko", "16:18", {
            row: "15:18"
          });
        }, $scope0_id)
      });
    });
    $col = _$.attrTags($col, {
      x: i,
      row: $row
    });
  });
  $col = _$.attrTags($col, {
    outside: true,
    row: _$.attrTag({
      row: -1,
      content: _$.registerContent("__tests__/template.marko_4_renderer", () => {
        const $scope4_id = _$.nextScopeId();
        _$.write("Outside");
      }, $scope0_id)
    })
  });
  _hello({
    list: _$.attrTag({
      item: $item
    }),
    col: $col
  });
});