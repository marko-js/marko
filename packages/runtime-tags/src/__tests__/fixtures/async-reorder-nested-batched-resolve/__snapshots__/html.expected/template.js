import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const promiseA = resolveAfter("a", 1);
  _$.tryContent($scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.fork($scope1_id, "#text/0", promiseA, value => {
      const $scope2_id = _$.nextScopeId();
      _$.write(`<div${_$.classAttr(value)} level=1>`);
      _$.tryContent($scope2_id, "#text/1", _$.registerContent("__tests__/template.marko_3_renderer", () => {
        const $scope3_id = _$.nextScopeId();
        _$.fork($scope3_id, "#text/0", promiseA, value => {
          const $scope6_id = _$.nextScopeId();
          const promiseB = resolveAfter("b", 2);
          _$.write(`<div${_$.classAttr(value)} level=2>`);
          _$.tryContent($scope6_id, "#text/1", _$.registerContent("__tests__/template.marko_7_renderer", () => {
            const $scope7_id = _$.nextScopeId();
            _$.fork($scope7_id, "#text/0", promiseB, value => {
              const $scope8_id = _$.nextScopeId();
              _$.write(`<div${_$.classAttr(value)} level=3>`);
              _$.tryContent($scope8_id, "#text/1", _$.registerContent("__tests__/template.marko_9_renderer", () => {
                const $scope9_id = _$.nextScopeId();
                _$.fork($scope9_id, "#text/0", promiseB, value => {
                  const $scope12_id = _$.nextScopeId();
                  _$.write(`<div${_$.classAttr(value)} level=4></div>`);
                });
                _$.resumeClosestBranch($scope9_id);
              }, $scope8_id), {
                placeholder: _$.attrTag({
                  content: _$.registerContent("__tests__/template.marko_11_renderer", () => {
                    const $scope11_id = _$.nextScopeId();
                    _$.write("LOADING B2");
                  }, $scope8_id)
                })
              });
              _$.write("</div>");
            });
            _$.resumeClosestBranch($scope7_id);
          }, $scope6_id), {
            placeholder: _$.attrTag({
              content: _$.registerContent("__tests__/template.marko_10_renderer", () => {
                const $scope10_id = _$.nextScopeId();
                _$.write("LOADING B1");
              }, $scope6_id)
            })
          });
          _$.write("</div>");
          _$.writeScope($scope6_id, {
            promiseB
          }, "__tests__/template.marko", "12:9", {
            promiseB: "14:19"
          });
        });
        _$.resumeClosestBranch($scope3_id);
      }, $scope2_id), {
        placeholder: _$.attrTag({
          content: _$.registerContent("__tests__/template.marko_5_renderer", () => {
            const $scope5_id = _$.nextScopeId();
            _$.write("LOADING A2");
          }, $scope2_id)
        })
      });
      _$.write("</div>");
    });
    _$.resumeClosestBranch($scope1_id);
  }, $scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_4_renderer", () => {
        const $scope4_id = _$.nextScopeId();
        _$.write("LOADING A1");
      }, $scope0_id)
    })
  });
  _$.writeScope($scope0_id, {
    promiseA
  }, "__tests__/template.marko", 0, {
    promiseA: "3:7"
  });
});