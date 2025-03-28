import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const promiseA = resolveAfter("a", 1);
  _$.tryContent(_scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.fork(_scope1_id, "#text/0", promiseA, value => {
      const _scope2_id = _$.nextScopeId();
      _$.write(`<div${_$.classAttr(value)} level=1>`);
      _$.tryContent(_scope2_id, "#text/1", _$.registerContent("__tests__/template.marko_3_renderer", () => {
        const _scope3_id = _$.nextScopeId();
        _$.fork(_scope3_id, "#text/0", promiseA, value => {
          const _scope6_id = _$.nextScopeId();
          const promiseB = resolveAfter("b", 2);
          _$.write(`<div${_$.classAttr(value)} level=2>`);
          _$.tryContent(_scope6_id, "#text/1", _$.registerContent("__tests__/template.marko_7_renderer", () => {
            const _scope7_id = _$.nextScopeId();
            _$.fork(_scope7_id, "#text/0", promiseB, value => {
              const _scope8_id = _$.nextScopeId();
              _$.write(`<div${_$.classAttr(value)} level=3>`);
              _$.tryContent(_scope8_id, "#text/1", _$.registerContent("__tests__/template.marko_9_renderer", () => {
                const _scope9_id = _$.nextScopeId();
                _$.fork(_scope9_id, "#text/0", promiseB, value => {
                  const _scope12_id = _$.nextScopeId();
                  _$.write(`<div${_$.classAttr(value)} level=4></div>`);
                });
                _$.resumeClosestBranch(_scope9_id);
              }, _scope8_id), {
                placeholder: _$.attrTag({
                  content: _$.registerContent("__tests__/template.marko_11_renderer", () => {
                    const _scope11_id = _$.nextScopeId();
                    _$.write("LOADING B2");
                  }, _scope8_id)
                })
              });
              _$.write("</div>");
            });
            _$.resumeClosestBranch(_scope7_id);
          }, _scope6_id), {
            placeholder: _$.attrTag({
              content: _$.registerContent("__tests__/template.marko_10_renderer", () => {
                const _scope10_id = _$.nextScopeId();
                _$.write("LOADING B1");
              }, _scope6_id)
            })
          });
          _$.write("</div>");
          _$.writeScope(_scope6_id, {
            promiseB
          }, "__tests__/template.marko", "12:9", {
            promiseB: "14:19"
          });
        });
        _$.resumeClosestBranch(_scope3_id);
      }, _scope2_id), {
        placeholder: _$.attrTag({
          content: _$.registerContent("__tests__/template.marko_5_renderer", () => {
            const _scope5_id = _$.nextScopeId();
            _$.write("LOADING A2");
          }, _scope2_id)
        })
      });
      _$.write("</div>");
    });
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_4_renderer", () => {
        const _scope4_id = _$.nextScopeId();
        _$.write("LOADING A1");
      }, _scope0_id)
    })
  });
  _$.writeScope(_scope0_id, {
    promiseA
  }, "__tests__/template.marko", 0, {
    promiseA: "3:7"
  });
});