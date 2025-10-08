import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/hello/index.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  _._for_of(input.list.item, item => {
    const $scope1_id = _._scope_id();
    _._html(`<div class=item${_._attrs_partial(item, {
      class: 1
    }, "#div/0", $scope1_id, "div")}>`);
    _._dynamic_tag($scope1_id, "#text/1", item.content, {}, 0, 0, _._serialize_guard($serialize, /* input.list.item */1));
    _._html(`</div>${_._el_resume($scope1_id, "#div/0")}`);
    _._script($scope1_id, "__tests__/tags/hello/index.marko_1_item");
    _._scope($scope1_id, {
      item
    }, "__tests__/tags/hello/index.marko", "1:1", {
      item: "1:5"
    });
  }, 0, $scope0_id, "#text/0", _._serialize_guard($serialize, /* input.list.item */1), _._serialize_guard($serialize, /* input.list.item */1), _._serialize_guard($serialize, /* input.list.item, input.col */0), 0, 1);
  _._for_of(input.col, col => {
    const $scope2_id = _._scope_id();
    _._html("<div class=col");
    _._attrs_partial_content(col, {
      class: 1
    }, "#div/0", $scope2_id, "div");
    _._html(`</div>${_._el_resume($scope2_id, "#div/0")}`);
    _._for_of(col.row, row => {
      const $scope3_id = _._scope_id();
      _._html(`<div class=row${_._attrs_partial(row, {
        class: 1
      }, "#div/0", $scope3_id, "div")}>`);
      _._dynamic_tag($scope3_id, "#text/1", row.content, {}, 0, 0, _._serialize_guard($serialize, /* input.col */2));
      _._html(`</div>${_._el_resume($scope3_id, "#div/0")}`);
      _._script($scope3_id, "__tests__/tags/hello/index.marko_3_row");
      _._scope($scope3_id, {
        row
      }, "__tests__/tags/hello/index.marko", "7:3", {
        row: "7:7"
      });
    }, 0, $scope2_id, "#text/1", _._serialize_guard($serialize, /* input.col */2), _._serialize_guard($serialize, /* input.col */2), _._serialize_guard($serialize, /* input.col */2), 0, 1);
    _._script($scope2_id, "__tests__/tags/hello/index.marko_2_col");
    _._scope($scope2_id, {
      col
    }, "__tests__/tags/hello/index.marko", "5:1", {
      col: "5:5"
    });
  }, 0, $scope0_id, "#text/1", _._serialize_guard($serialize, /* input.col */2), _._serialize_guard($serialize, /* input.col */2), _._serialize_guard($serialize, /* input.list.item, input.col */0));
  _._serialize_guard($serialize, /* input.list.item, input.col */0) && _._scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});