import * as _$ from "@marko/runtime-tags/debug/html";
const _content = input => {
  const _scope0_id = _$.nextScopeId();
  const _input_level_closures = new Set();
  _$.resumeSingleNodeConditional(() => {
    if (input.level) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<div${_$.attr("data-level", input.level)}>`);
      _$.tryContent(_scope1_id, "#text/1", _$.registerContent("__tests__/tags/recurse.marko_2_renderer", () => {
        const _scope2_id = _$.nextScopeId();
        _$.fork(_scope2_id, "#text/0", new Promise(setImmediate), () => {
          const _scope3_id = _$.nextScopeId();
          const _childScope = _$.peekNextScope();
          _content({
            level: input.level - 1
          });
          _$.writeSubscribe(_input_level_closures, _$.writeScope(_scope3_id, {
            "#childScope/0": _$.writeExistingScope(_childScope),
            _: _$.ensureScopeWithId(_scope2_id),
            "ClosureSignalIndex:input_level": 0
          }, "__tests__/tags/recurse.marko", "5:7"));
          _$.resumeClosestBranch(_scope3_id);
        });
        _$.writeScope(_scope2_id, {
          _: _$.ensureScopeWithId(_scope1_id)
        }, "__tests__/tags/recurse.marko", "3:5");
      }, _scope1_id), {
        placeholder: _$.attrTag({
          content: _$.registerContent("__tests__/tags/recurse.marko_4_renderer", () => {
            const _scope4_id = _$.nextScopeId();
            _$.write("LOADING...");
          }, _scope1_id)
        })
      });
      _$.write(`</div>${_$.markResumeNode(_scope1_id, "#div/0")}`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/tags/recurse.marko", "1:1");
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  _$.writeScope(_scope0_id, {
    input_level: input.level,
    "ClosureScopes:input_level": _input_level_closures
  }, "__tests__/tags/recurse.marko", 0, {
    input_level: ["input.level"]
  });
};
export default _$.createTemplate("__tests__/tags/recurse.marko", _content);