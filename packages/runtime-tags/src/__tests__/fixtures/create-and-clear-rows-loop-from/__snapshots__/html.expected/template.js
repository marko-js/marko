import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html("<div>");
  _._for_to(input.to, input.from, input.step, n => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(n)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($serialize, /* input.from,input.to,input.step */3))}, `);
    _._serialize_guard($serialize, /* input.from,input.to,input.step */3) && _._scope($scope1_id, {}, "__tests__/template.marko", "2:4");
  }, 0, $scope0_id, "#div/0", _._serialize_guard($serialize, /* input.from,input.to,input.step */3), _._serialize_guard($serialize, /* input.from,input.to,input.step */3), "</div>");
  _._serialize_guard($serialize, /* input.from,input.to,input.step */3) && _._scope($scope0_id, {
    input_from: _._serialize_if($serialize, /* input.to, input.step */2) && input.from,
    input_to: _._serialize_if($serialize, /* input.from, input.step */1) && input.to,
    input_step: _._serialize_if($serialize, /* input.from, input.to */0) && input.step
  }, "__tests__/template.marko", 0, {
    input_from: ["input.from"],
    input_to: ["input.to"],
    input_step: ["input.step"]
  });
});