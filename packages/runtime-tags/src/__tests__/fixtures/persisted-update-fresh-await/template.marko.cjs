"use strict";

exports.__esModule = true;
exports.default = void 0;
var _data = require("./data");
var _html2 = require("@marko/runtime-tags/debug/html");
var _default = exports.default = (0, _html2._template)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", input => {
  const $scope0_reason = (0, _html2._scope_reason)(),
    $sg__input_productId = (0, _html2._serialize_guard)($scope0_reason, /* input.productId */0);
  const $scope0_id = (0, _html2._scope_id)();
  const $input_productId__closures = new Set();
  let count = 0;
  (0, _html2._html)(`<button class=count>clicked <!>${(0, _html2._escape)(count)}${(0, _html2._el_resume)($scope0_id, "#text/1")}</button>${(0, _html2._el_resume)($scope0_id, "#button/0")}`);
  (0, _html2._if)(() => {
    if (input.productId) {
      const $scope1_id = (0, _html2._scope_id)();
      (0, _html2._html)(`<h2>Product ${(0, _html2._sep)(($sg__input_productId))}${(0, _html2._escape)((0, _html2._hole_value)($scope1_id, "#text/0", input.productId, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope1_id, "#text/0", ($sg__input_productId))}</h2>`);
      (0, _html2._try)($scope1_id, "#text/1", (0, _html2._content_resume)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko_2_content", () => {
        const $scope2_id = (0, _html2._scope_id)();
        const $scope2_reason = (0, _html2._scope_reason)();
        (0, _html2._await)($scope2_id, "#text/0", (0, _data.getReviews)(input.productId), reviews => {
          const $scope5_id = (0, _html2._scope_id)();
          (0, _html2._html)("<ul>");
          (0, _html2._for_of)(reviews, review => {
            const $scope6_id = (0, _html2._scope_id)();
            (0, _html2._html)(`<li>${(0, _html2._escape)((0, _html2._hole_value)($scope6_id, "#text/0", review.text, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope6_id, "#text/0", $sg__input_productId)} rated ${(0, _html2._sep)($sg__input_productId)}${(0, _html2._escape)((0, _html2._hole_value)($scope6_id, "#text/1", review.stars, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope6_id, "#text/1", $sg__input_productId)}</li>`);
            $sg__input_productId && (0, _html2._scope)($scope6_id, {}, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", "11:10");
          }, function (review) {
            return review.id;
          }, $scope5_id, "#ul/0", $sg__input_productId, $sg__input_productId, $sg__input_productId, "</ul>", 1);
          $sg__input_productId && (0, _html2._scope)($scope5_id, {}, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", "9:6");
        }, $sg__input_productId);
        $sg__input_productId && (0, _html2._subscribe)($input_productId__closures, (0, _html2._scope)($scope2_id, {
          _: (0, _html2._scope_with_id)($scope1_id)
        }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", "7:4"));
        (0, _html2._resume_branch)($scope2_id);
      }, $scope1_id), {
        placeholder: (0, _html2.attrTag)({
          content: (0, _html2._content_resume)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko_4_content", () => {
            (0, _html2._scope_reason)();
            const $scope4_id = (0, _html2._scope_id)();
            (0, _html2._html)("loading reviews\u2026");
          }, $scope1_id)
        })
      }, $sg__input_productId);
      $sg__input_productId && (0, _html2._scope)($scope1_id, {
        _: (0, _html2._scope_with_id)($scope0_id)
      }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", "5:2");
      return 0;
    } else {
      const $scope3_id = (0, _html2._scope_id)();
      (0, _html2._html)("<p>pick a product</p>");
      $sg__input_productId && (0, _html2._scope)($scope3_id, {}, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", "18:2");
      return 1;
    }
  }, $scope0_id, "#text/2", $sg__input_productId, $sg__input_productId, $sg__input_productId);
  (0, _html2._script)($scope0_id, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko_0");
  (0, _html2._scope)($scope0_id, {
    input_productId: (((0, _html2._serialize_if)($scope0_reason, /* input.productId */0)) || (0, _html2._update_reason)()) && input.productId,
    count: (0, _html2._state_reason)() && count,
    "ClosureScopes:input_productId": $sg__input_productId && $input_productId__closures
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-fresh-await/template.marko", 0, {
    input_productId: ["input.productId"],
    count: "3:6"
  });
  (0, _html2._resume_branch)($scope0_id);
}, 1);