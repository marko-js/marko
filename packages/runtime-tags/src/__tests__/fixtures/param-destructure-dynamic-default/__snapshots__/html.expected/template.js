import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  const ChildA = {
    content: _._content("__tests__/template.marko_1_content", ({
      id,
      foo,
      foo: $foo
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      const {
        bar: $bar
      } = void 0 !== $foo ? $foo : {
        bar: count + 2
      };
      const bar = void 0 !== $bar ? $bar : count + 1;
      _._html(`<div${_._attr("id", id)} class=a>${_._escape(bar)}${_._el_resume($scope1_id, "#text/1")} ${_._sep(_._serialize_guard($scope1_reason, /* foo */1))}${_._escape(typeof foo)}${_._el_resume($scope1_id, "#text/2", _._serialize_guard($scope1_reason, /* foo */1))}</div>${_._el_resume($scope1_id, "#div/0", _._serialize_guard($scope1_reason, /* id */0))}`);
      _._subscribe($count__closures, _._scope($scope1_id, {
        foo,
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "2:1", {
        foo: "2:21"
      }));
      _._resume_branch($scope1_id);
    })
  };
  ChildA.content({
    foo: {
      bar: 0
    },
    id: "a"
  });
  ChildA.content({
    foo: {},
    id: "b"
  });
  ChildA.content({
    id: "c"
  });
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
        bar: count + 2
      };
      const bar = void 0 !== $bar2 ? $bar2 : count + 1;
      _._html(`<div${_._attr("id", input.id)} class=b>${_._escape(bar)}${_._el_resume($scope2_id, "#text/1")} ${_._sep(_._serialize_guard($scope2_reason, /* foo */1))}${_._escape(typeof foo)}${_._el_resume($scope2_id, "#text/2", _._serialize_guard($scope2_reason, /* foo */1))}</div>${_._el_resume($scope2_id, "#div/0", _._serialize_guard($scope2_reason, /* input.id */0))}`);
      _._subscribe($count__closures, _._scope($scope2_id, {
        foo,
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:count": 1
      }, "__tests__/template.marko", "9:1", {
        foo: "10:11"
      }));
      _._resume_branch($scope2_id);
    })
  };
  ChildB.content({
    foo: {
      bar: 0
    },
    id: "d"
  });
  ChildB.content({
    foo: {},
    id: "e"
  });
  ChildB.content({
    id: "f"
  });
  _._html(`<button>Increment default</button>${_._el_resume($scope0_id, "#button/6")}`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "1:5"
  });
  _._resume_branch($scope0_id);
});