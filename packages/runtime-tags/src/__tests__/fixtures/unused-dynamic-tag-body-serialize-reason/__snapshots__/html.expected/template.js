import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Wrap = {
    content: _._content("__tests__/template.marko_1_content", ({
      as,
      onClick,
      content
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._dynamic_tag($scope1_id, "#text/0", as, {
        onClick: onClick,
        content: content
      }, 0, 0, _._serialize_guard($scope1_reason, /* as, onClick, content */3));
      _._serialize_if($scope1_reason, /* as, onClick, content */3) && _._scope($scope1_id, {
        as: _._serialize_if($scope1_reason, /* onClick, content */2) && as,
        onClick: _._serialize_if($scope1_reason, /* as, content */1) && onClick,
        content: _._serialize_if($scope1_reason, /* as, onClick */0) && content
      }, "__tests__/template.marko", "1:1", {
        as: "1:15",
        onClick: "1:19",
        content: "1:28"
      });
    })
  };
  const Message = {
    content: _._content("__tests__/template.marko_2_content", input => {
      const $scope2_id = _._scope_id();
      const $scope2_reason = _._scope_reason();
      _._html(`${_._escape(input.before + input.after)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* input.before, input.after */0))}`);
      _._serialize_if($scope2_reason, /* input.before, input.after */0) && _._scope($scope2_id, {
        input_before: _._serialize_if($scope2_reason, /* input.after */2) && input.before,
        input_after: _._serialize_if($scope2_reason, /* input.before */1) && input.after
      }, "__tests__/template.marko", "4:1", {
        input_before: ["input.before", "4:16"],
        input_after: ["input.after", "4:16"]
      });
    })
  };
  let x = 1;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* as, onClick */0: /* x */1,
    /* onClick, content */2: /* x */1,
    /* as, onClick, content */3: /* x */1
  });
  Wrap.content({
    as: "div",
    onClick: _._resume(function () {
      console.log(x++);
    }, "__tests__/template.marko_0/onClick", $scope0_id),
    content: _._content_resume("__tests__/template.marko_3_content", () => {
      _._scope_reason();
      const $scope3_id = _._scope_id();
      Message.content({
        before: "hello",
        after: "world"
      });
    }, $scope0_id)
  });
  _._scope($scope0_id, {
    x,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    x: "7:5"
  });
  _._resume_branch($scope0_id);
});