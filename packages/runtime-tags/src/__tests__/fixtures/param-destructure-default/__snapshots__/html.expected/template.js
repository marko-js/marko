import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const ChildA = {
    content: _._content("__tests__/template.marko_1_content", ({
      foo,
      foo: $foo
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      const {
        bar: $bar
      } = void 0 !== $foo ? $foo : {
        bar: 2
      };
      const bar = void 0 !== $bar ? $bar : 1;
      _._html(`<div class=a>${_._escape(bar)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* foo */0))} ${_._sep(_._serialize_guard($scope1_reason, /* foo */0))}${_._escape(typeof foo)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($scope1_reason, /* foo */0))}</div>`);
      _._serialize_if($scope1_reason, /* foo */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:1");
    })
  };
  ChildA.content({
    foo: {
      bar: 0
    }
  });
  ChildA.content({
    foo: {}
  });
  ChildA.content({});
  const ChildB = {
    content: _._content("__tests__/template.marko_2_content", input => {
      const $scope2_id = _._scope_id();
      const $scope2_reason = _._scope_reason();
      const {
        foo,
        foo: $foo2
      } = input;
      const {
        bar: $bar2
      } = void 0 !== $foo2 ? $foo2 : {
        bar: 2
      };
      const bar = void 0 !== $bar2 ? $bar2 : 1;
      _._html(`<div class=b>${_._escape(bar)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* foo */0))} ${_._sep(_._serialize_guard($scope2_reason, /* foo */0))}${_._escape(typeof foo)}${_._el_resume($scope2_id, "#text/1", _._serialize_guard($scope2_reason, /* foo */0))}</div>`);
      _._serialize_if($scope2_reason, /* foo */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "8:1");
    })
  };
  ChildB.content({
    foo: {
      bar: 0
    }
  });
  ChildB.content({
    foo: {}
  });
  ChildB.content({});
});