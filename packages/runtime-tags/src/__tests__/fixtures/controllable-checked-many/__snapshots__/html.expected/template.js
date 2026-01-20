import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let states = [false, false, false];
  _._for_of(states, (state, i) => {
    const $scope1_id = _._scope_id();
    let checked = state;
    _._html(`<input${_._attr_input_checked($scope1_id, "#input/0", checked, _._resume(_new_checked => {
      checked = _new_checked;
    }, "__tests__/template.marko_1/checkedChange", $scope1_id))} type=checkbox>${_._el_resume($scope1_id, "#input/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1");
    _._scope($scope1_id, {
      "#LoopKey": i,
      checked,
      _: _._scope_with_id($scope0_id),
      "TagVariableChange:checked": _._resume(function (value) {
        if (i === undefined) {
          throw new Error('LoopKey is undefined');
        }
        const newStates = [...states];
        newStates[i] = value;
        states = newStates;
      }, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0
    }, "__tests__/template.marko", "2:2", {
      "#LoopKey": "2:13",
      checked: "3:8"
    });
  }, 0, $scope0_id, "#text/0", /* states */1, /* states */1, /* states */1, 0, 1);
  _._html(`<div>${_._escape(states.join(','))}${_._el_resume($scope0_id, "#text/1")}</div>`);
  _._scope($scope0_id, {
    states
  }, "__tests__/template.marko", 0, {
    states: "1:6"
  });
  _._resume_branch($scope0_id);
});