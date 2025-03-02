import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  let _ifScopeId2, _ifBranch2;
  let _ifScopeId3, _ifBranch3;
  _$.resumeConditional(() => {
    if (input.a + input.b) {
      const _scope1_id = _$.nextScopeId();
      _$.write("Hello");
      _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "1:2");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.resumeConditional(() => {
    if (input.a, input.b) {
      const _scope2_id = _$.nextScopeId();
      _$.write("World");
      _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "5:2");
      _ifBranch2 = 0;
      _ifScopeId2 = _scope2_id;
    }
  }, _scope0_id, "#text/1");
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (input.x) {
      const _scope3_id = _$.nextScopeId();
      _$.write("A");
      _$.writeScope(_scope3_id, {}, "__tests__/template.marko", "10:4");
      _ifBranch3 = 0;
      _ifScopeId3 = _scope3_id;
    } else if (input.y) {
      const _scope4_id = _$.nextScopeId();
      _$.write("B");
      _$.writeScope(_scope4_id, {}, "__tests__/template.marko", "13:4");
      _ifBranch3 = 1;
      _ifScopeId3 = _scope4_id;
    } else {
      const _scope5_id = _$.nextScopeId();
      _$.write("C");
      _$.writeScope(_scope5_id, {}, "__tests__/template.marko", "16:4");
      _ifBranch3 = 2;
      _ifScopeId3 = _scope5_id;
    }
  }, _scope0_id, "#div/2");
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    input_a: input.a,
    input_b: input.b,
    input_x: input.x,
    input_y: input.y,
    "#text/0(": _ifBranch,
    "#text/0!": _$.getScopeById(_ifScopeId),
    "#text/1(": _ifBranch2,
    "#text/1!": _$.getScopeById(_ifScopeId2),
    "#div/2(": _ifBranch3,
    "#div/2!": _$.getScopeById(_ifScopeId3)
  }, "__tests__/template.marko", 0, {
    input_a: ["input.a"],
    input_b: ["input.b"],
    input_x: ["input.x"],
    input_y: ["input.y"]
  });
});