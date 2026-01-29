import { formatNumber } from "./helpers";
import _counter from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _counter({
    format: formatNumber
  });
});