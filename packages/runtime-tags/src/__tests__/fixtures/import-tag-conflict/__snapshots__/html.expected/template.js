import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`${_._escape(asset1)} ${_._escape(asset2)}`);
});