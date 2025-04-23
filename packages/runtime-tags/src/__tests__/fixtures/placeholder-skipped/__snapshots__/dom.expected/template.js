export const $template = "a<!>c<!>e";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $data$await$content = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $data$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params2$await$content);
const $placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "_A_");
const $try_content = /* @__PURE__ */_$.createRenderer("b");
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
const $await = /* @__PURE__ */_$.awaitTag("#text/1", $await_content);
export function $setup($scope) {
  $try($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await($scope, resolveAfter("d", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);