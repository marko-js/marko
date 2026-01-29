import { resolveAfter } from "../../utils/resolve";
const multiply = (multiplier, n) => resolveAfter(multiplier * n);
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let n = 2;
  _._html(`<button>increment</button>${_._el_resume($scope0_id, "#button/0")}<p>1 * <!>${_._escape(n)}${_._el_resume($scope0_id, "#text/1")} = `);
  _._await($scope0_id, "#text/2", multiply(1, n), result => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(result)}${_._el_resume($scope1_id, "#text/0")}`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "6:16");
  });
  _._html(`</p><p>2 * <!>${_._escape(n)}${_._el_resume($scope0_id, "#text/3")} = `);
  _._await($scope0_id, "#text/4", multiply(2, n), result => {
    const $scope2_id = _._scope_id();
    _._html(`${_._escape(result)}${_._el_resume($scope2_id, "#text/0")}`);
    _._scope($scope2_id, {}, "__tests__/template.marko", "7:16");
  });
  _._html(`</p><p>3 * <!>${_._escape(n)}${_._el_resume($scope0_id, "#text/5")} = `);
  _._await($scope0_id, "#text/6", multiply(3, n), result => {
    const $scope3_id = _._scope_id();
    _._html(`${_._escape(result)}${_._el_resume($scope3_id, "#text/0")}`);
    _._scope($scope3_id, {}, "__tests__/template.marko", "8:16");
  });
  _._html(`</p><p>4 * <!>${_._escape(n)}${_._el_resume($scope0_id, "#text/7")} = `);
  _._await($scope0_id, "#text/8", multiply(4, n), result => {
    const $scope4_id = _._scope_id();
    _._html(`${_._escape(result)}${_._el_resume($scope4_id, "#text/0")}`);
    _._scope($scope4_id, {}, "__tests__/template.marko", "9:16");
  });
  _._html(`</p><p>5 * <!>${_._escape(n)}${_._el_resume($scope0_id, "#text/9")} = `);
  _._await($scope0_id, "#text/10", multiply(5, n), result => {
    const $scope5_id = _._scope_id();
    _._html(`${_._escape(result)}${_._el_resume($scope5_id, "#text/0")}`);
    _._scope($scope5_id, {}, "__tests__/template.marko", "10:16");
  });
  _._html("</p>");
  _._script($scope0_id, "__tests__/template.marko_0_n");
  _._scope($scope0_id, {
    n
  }, "__tests__/template.marko", 0, {
    n: "4:6"
  });
  _._resume_branch($scope0_id);
});