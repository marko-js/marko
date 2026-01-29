import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let items = [1, 2, 3];
  const write = _._resume(function (msg) {
    (el => el())(_._el_read_error).innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", $scope0_id);
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/0")}<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _._for_of(items, outerItem => {
    const $scope1_id = _._scope_id();
    _._html("<div>");
    const $childScope = _._peek_scope_id();
    _._set_serialize_reason(/* items */1);
    _child({
      write: write,
      name: `${outerItem}`
    });
    _._for_of(items, middleItem => {
      const $scope2_id = _._scope_id();
      _._html("<div>");
      const $childScope2 = _._peek_scope_id();
      _._set_serialize_reason(/* items */1);
      _child({
        write: write,
        name: `${outerItem}.${middleItem}`
      });
      _._html("</div>");
      _._scope($scope2_id, {
        _: _._scope_with_id($scope1_id),
        "#childScope/0": _._existing_scope($childScope2)
      }, "__tests__/template.marko", "10:6");
    }, 0, $scope1_id, "#text/1", /* items */1, /* items */1, /* items */1, 0, 1);
    _._html("</div>");
    _._scope($scope1_id, {
      outerItem,
      _: _._scope_with_id($scope0_id),
      "#childScope/0": _._existing_scope($childScope)
    }, "__tests__/template.marko", "7:2", {
      outerItem: "7:6"
    });
  }, 0, $scope0_id, "#text/2", /* items */1, /* items */1, /* items */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._scope($scope0_id, {
    items,
    write
  }, "__tests__/template.marko", 0, {
    items: "1:6",
    write: "5:8"
  });
  _._resume_branch($scope0_id);
});