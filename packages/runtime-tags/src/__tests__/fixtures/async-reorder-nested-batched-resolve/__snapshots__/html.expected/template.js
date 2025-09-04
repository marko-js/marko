import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const promiseA = resolveAfter("a", 1);
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._await($scope1_id, "#text/0", promiseA, value => {
      const $scope2_id = _._scope_id();
      _._html(`<div${_._attr_class(value)} level=1>`);
      _._try($scope2_id, "#text/1", _._content_resume("__tests__/template.marko_3_content", () => {
        const $scope3_id = _._scope_id();
        _._await($scope3_id, "#text/0", promiseA, value => {
          const $scope6_id = _._scope_id();
          const promiseB = resolveAfter("b", 2);
          _._html(`<div${_._attr_class(value)} level=2>`);
          _._try($scope6_id, "#text/1", _._content_resume("__tests__/template.marko_7_content", () => {
            const $scope7_id = _._scope_id();
            _._await($scope7_id, "#text/0", promiseB, value => {
              const $scope8_id = _._scope_id();
              _._html(`<div${_._attr_class(value)} level=3>`);
              _._try($scope8_id, "#text/1", _._content_resume("__tests__/template.marko_9_content", () => {
                const $scope9_id = _._scope_id();
                _._await($scope9_id, "#text/0", promiseB, value => {
                  const $scope12_id = _._scope_id();
                  _._html(`<div${_._attr_class(value)} level=4></div>`);
                }, 0);
                _._resume_branch($scope9_id);
              }, $scope8_id), {
                placeholder: _.attrTag({
                  content: _._content_resume("__tests__/template.marko_11_content", () => {
                    const $scope11_id = _._scope_id();
                    _._html("LOADING B2");
                  }, $scope8_id)
                })
              });
              _._html("</div>");
            }, 0);
            _._resume_branch($scope7_id);
          }, $scope6_id), {
            placeholder: _.attrTag({
              content: _._content_resume("__tests__/template.marko_10_content", () => {
                const $scope10_id = _._scope_id();
                _._html("LOADING B1");
              }, $scope6_id)
            })
          });
          _._html("</div>");
          _._scope($scope6_id, {
            promiseB
          }, "__tests__/template.marko", "12:9", {
            promiseB: "14:19"
          });
        });
        _._resume_branch($scope3_id);
      }, $scope2_id), {
        placeholder: _.attrTag({
          content: _._content_resume("__tests__/template.marko_5_content", () => {
            const $scope5_id = _._scope_id();
            _._html("LOADING A2");
          }, $scope2_id)
        })
      });
      _._html("</div>");
    }, 0);
    _._resume_branch($scope1_id);
  }, $scope0_id), {
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_4_content", () => {
        const $scope4_id = _._scope_id();
        _._html("LOADING A1");
      }, $scope0_id)
    })
  });
  _._scope($scope0_id, {
    promiseA
  }, "__tests__/template.marko", 0, {
    promiseA: "3:7"
  });
});