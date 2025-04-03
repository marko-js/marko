export const $template = "a<!>c";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $params2$catch$content = /* @__PURE__ */_$.value("$params2");
const $catch_content = _$.registerContent("__tests__/template.marko_2_renderer", "ERROR!", 0, 0, $params2$catch$content);
const $try_content = /* @__PURE__ */_$.createRenderer("b");
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
export function $setup($scope) {
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);