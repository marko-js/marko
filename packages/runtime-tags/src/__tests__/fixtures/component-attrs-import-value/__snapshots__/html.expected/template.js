import { formatNumber } from "./helpers";
import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _counter({
    format: formatNumber
  });
});