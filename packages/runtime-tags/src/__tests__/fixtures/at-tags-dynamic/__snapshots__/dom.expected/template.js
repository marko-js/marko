export const $template = `<!>${_hello_template}<!>`;
export const $walks = /* beginChild, _hello_walks, endChild */`D/${_hello_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _hello, $input_list_item as _hello_input_list_item, $input_col as _hello_input_col, $template as _hello_template, $walks as _hello_walks } from "./tags/hello/index.marko";
const $row_content2 = _$.registerContent("__tests__/template.marko_4_renderer", "Outside");
const $row_content = _$.localClosures(_$.registerContent("__tests__/template.marko_3_renderer", " ", /* get */" "), {
  row($scope, row) {
    _$.data($scope["#text/0"], row);
  }
});
const $item_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "bar");
const $item_content = _$.registerContent("__tests__/template.marko_1_renderer", "foo");
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  let $item;
  _$.forOf(["red", "blue", "green"], color => {
    if (color === "red") {
      $item = _$.attrTags($item, {
        style: {
          color
        },
        content: $item_content($scope)
      });
    } else {
      $item = _$.attrTags($item, {
        style: {
          color
        },
        content: $item_content2($scope)
      });
    }
  });
  _hello_input_list_item($scope["#childScope/0"], $item);
  let $col;
  _$.forOf([["a", "b"], ["c", "d"]], (col, i) => {
    let $row;
    _$.forOf(col, row => {
      $row = _$.attrTags($row, {
        row: row,
        content: $row_content($scope, {
          row
        })
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
      content: $row_content2($scope)
    })
  });
  _hello_input_col($scope["#childScope/0"], $col);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);