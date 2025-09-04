import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
import * as _ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_style({
    color: input.color
  })}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($serialize, /* input.color */0))}<div style=width:100px></div><div style="color: green"></div>`);
  const $childScope = _._peek_scope_id();
  _customTag({
    style: {
      color: input.color
    }
  }, {
    /* input.style, input.test */0: _._serialize_guard($serialize, /* input.color */0),
    /* input.style */3: _._serialize_guard($serialize, /* input.color */0)
  });
  _customTag({
    style: {
      width: "100px"
    }
  });
  _customTag({
    style: "color: green"
  });
  _._dynamic_tag($scope0_id, "#text/4", TestTag, {
    style: {
      color: "green"
    },
    test: _.attrTag({
      style: {
        color: "green"
      },
      content: _._content_resume("__tests__/template.marko_1_content", () => {
        const $scope1_id = _._scope_id();
        _._html("Hello");
      }, $scope0_id)
    })
  }, 0, 0, 0);
  _._serialize_guard($serialize, /* input.color */0) && _._scope($scope0_id, {
    "#childScope/1": _._serialize_if($serialize, /* input.color */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});