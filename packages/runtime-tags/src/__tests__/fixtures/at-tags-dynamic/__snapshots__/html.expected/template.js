import * as _ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let $col;
  let $item;
  _.forOf(["red", "blue", "green"], color => {
    if (color === "red") {
      $item = _.attrTags($item, {
        style: {
          color
        },
        content: _._content_resume("__tests__/template.marko_1_content", () => {
          _._scope_reason();
          const $scope1_id = _._scope_id();
          _._html("foo");
        }, $scope0_id)
      });
    } else {
      $item = _.attrTags($item, {
        style: {
          color
        },
        content: _._content_resume("__tests__/template.marko_2_content", () => {
          _._scope_reason();
          const $scope2_id = _._scope_id();
          _._html("bar");
        }, $scope0_id)
      });
    }
  });
  _.forOf([["a", "b"], ["c", "d"]], (col, i) => {
    let $row;
    _.forOf(col, row => {
      $row = _.attrTags($row, {
        row: row,
        content: _._content_resume("__tests__/template.marko_3_content", () => {
          _._scope_reason();
          const $scope3_id = _._scope_id();
          _._html(`${_._escape(row)}${_._el_resume($scope3_id, "#text/0")}`);
          _._scope($scope3_id, {}, "__tests__/template.marko", "16:18");
        }, $scope0_id)
      });
    });
    $col = _.attrTags($col, {
      x: i,
      row: $row
    });
  });
  $col = _.attrTags($col, {
    outside: true,
    row: _.attrTag({
      row: -1,
      content: _._content_resume("__tests__/template.marko_4_content", () => {
        _._scope_reason();
        const $scope4_id = _._scope_id();
        _._html("Outside");
      }, $scope0_id)
    })
  });
  _hello({
    list: _.attrTag({
      item: $item
    }),
    col: $col
  });
});