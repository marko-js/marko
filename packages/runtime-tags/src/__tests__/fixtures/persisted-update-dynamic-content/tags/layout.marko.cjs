"use strict";

exports.__esModule = true;
exports.default = void 0;
var _html2 = require("@marko/runtime-tags/debug/html");
var _default = exports.default = (0, _html2._template)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/tags/layout.marko", input => {
  const $scope0_reason = (0, _html2._scope_reason)();
  const $scope0_id = (0, _html2._scope_id)();
  let open = false;
  (0, _html2._html)(`<aside><button class=toggle>${open ? "collapse" : "expand"}${(0, _html2._el_resume)($scope0_id, "#text/1")}</button>${(0, _html2._el_resume)($scope0_id, "#button/0")}</aside><section>`);
  (0, _html2._dynamic_tag)($scope0_id, "#text/2", input.content, {}, 0, 0, ((0, _html2._serialize_guard)($scope0_reason, /* input.content */0)) | (0, _html2._persisted_reason)());
  (0, _html2._html)("</section>");
  (0, _html2._script)($scope0_id, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/tags/layout.marko_0");
  (0, _html2._scope)($scope0_id, {
    open: (0, _html2._state_reason)() && open
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/tags/layout.marko", 0, {
    open: "1:6"
  });
  (0, _html2._resume_branch)($scope0_id);
});