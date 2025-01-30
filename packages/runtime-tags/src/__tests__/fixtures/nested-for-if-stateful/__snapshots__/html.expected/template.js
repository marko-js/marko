import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const counts = [0, 0, 0];
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(counts, (count, i) => {
    const _scope1_id = _$.nextScopeId();
    const editing = false;
    let _ifScopeId, _ifRenderer;
    _$.resumeSingleNodeConditional(() => {
      if (editing) {
        const _scope2_id = _$.nextScopeId();
        _$.write(`<button>Confirm <!>${_$.escapeXML(count + 1)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
        _$.writeEffect(_scope2_id, "__tests__/template.marko_2_counts/subscriber");
        _$.writeEffect(_scope2_id, "__tests__/template.marko_2_counts_count_i");
        _$.writeScope(_scope2_id, {
          "_": _$.ensureScopeWithId(_scope1_id)
        });
        _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
        _ifScopeId = _scope2_id;
      } else {
        const _scope3_id = _$.nextScopeId();
        _$.write(`<button>Increment <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope3_id, "#text/1")}</button>${_$.markResumeNode(_scope3_id, "#button/0")}`);
        _$.writeEffect(_scope3_id, "__tests__/template.marko_3");
        _$.writeScope(_scope3_id, {
          "_": _$.ensureScopeWithId(_scope1_id)
        });
        _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_3_renderer");
        _ifScopeId = _scope3_id;
      }
    }, _scope1_id, "#text/0");
    _scope1_.set(i, _$.ensureScopeWithId(_scope1_id));
    _$.writeScope(_scope1_id, {
      "count": count,
      "i": i,
      "_": _$.ensureScopeWithId(_scope0_id),
      "#text/0(": _ifRenderer,
      "#text/0!": _$.getScopeById(_ifScopeId)
    });
  }, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    "counts": counts,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);