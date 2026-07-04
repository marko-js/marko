"use strict";

exports.__esModule = true;
exports.default = void 0;
var _data = require("./data");
var _html2 = require("@marko/runtime-tags/debug/html");
var _default = exports.default = (0, _html2._template)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-server-derived/template.marko", input => {
  const $scope0_reason = (0, _html2._scope_reason)(),
    $sg__input_detailId = (0, _html2._serialize_guard)($scope0_reason, /* input.detailId */0);
  const $scope0_id = (0, _html2._scope_id)();
  let count = 0;
  (0, _html2._html)(`<button class=count>clicked <!>${(0, _html2._escape)(count)}${(0, _html2._el_resume)($scope0_id, "#text/1")}</button>${(0, _html2._el_resume)($scope0_id, "#button/0")}`);
  (0, _html2._if)(() => {
    if (input.detailId) {
      const $scope1_id = (0, _html2._scope_id)();
      const details = (0, _data.getDetails)(input.detailId);
      (0, _html2._html)(`<section><h2>${(0, _html2._escape)((0, _html2._hole_value)($scope1_id, "#text/0", details.name, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope1_id, "#text/0", ($sg__input_detailId))}</h2><p>costs ${(0, _html2._sep)(($sg__input_detailId))}${(0, _html2._escape)((0, _html2._hole_value)($scope1_id, "#text/1", details.price, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope1_id, "#text/1", $sg__input_detailId)}</p><button class=copy>use price</button>${(0, _html2._el_resume)($scope1_id, "#button/2")}</section>`);
      (0, _html2._script)($scope1_id, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-server-derived/template.marko_1_details_price");
      (0, _html2._scope)($scope1_id, {
        details_price: details?.price,
        _: (0, _html2._scope_with_id)($scope0_id)
      }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-server-derived/template.marko", "5:2", {
        details_price: ["details.price", "6:10"]
      });
      return 0;
    } else {
      const $scope2_id = (0, _html2._scope_id)();
      (0, _html2._html)("<p>no selection</p>");
      $sg__input_detailId && (0, _html2._scope)($scope2_id, {}, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-server-derived/template.marko", "13:2");
      return 1;
    }
  }, $scope0_id, "#text/2", $sg__input_detailId, $sg__input_detailId, $sg__input_detailId, 0, 1);
  (0, _html2._script)($scope0_id, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-server-derived/template.marko_0");
  (0, _html2._scope)($scope0_id, {
    input_detailId: (((0, _html2._serialize_if)($scope0_reason, /* input.detailId */0)) || (0, _html2._update_reason)()) && input.detailId,
    count: (0, _html2._state_reason)() && count
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-server-derived/template.marko", 0, {
    input_detailId: ["input.detailId"],
    count: "3:6"
  });
  (0, _html2._resume_branch)($scope0_id);
}, 1);