"use strict";

exports.__esModule = true;
exports.default = void 0;
var _html2 = require("@marko/runtime-tags/debug/html");
var _layout2 = _interopRequireDefault(require("./tags/layout.marko.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _html2._template)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko", input => {
  const $scope0_reason = (0, _html2._scope_reason)(),
    $sg__input_title = (0, _html2._serialize_guard)($scope0_reason, /* input.title */2),
    $sg__input_summary = (0, _html2._serialize_guard)($scope0_reason, /* input.summary */3),
    $sg__input_specs = (0, _html2._serialize_guard)($scope0_reason, /* input.specs */4),
    $si__input_view = (0, _html2._serialize_if)($scope0_reason, /* input.view */5),
    $sg__input_view = (0, _html2._serialize_guard)($scope0_reason, /* input.view */5);
  const $scope0_id = (0, _html2._scope_id)();
  const $input_title__closures = new Set();
  const $input_summary__closures = new Set();
  const $input_specs__closures = new Set();
  let count = 0;
  (0, _html2._html)(`<h1>${(0, _html2._escape)((0, _html2._hole_value)($scope0_id, "#text/0", input.title, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope0_id, "#text/0", ($sg__input_title))}</h1><button class=count>clicked <!>${(0, _html2._escape)(count)}${(0, _html2._el_resume)($scope0_id, "#text/2")}</button>${(0, _html2._el_resume)($scope0_id, "#button/1")}`);
  const Overview = {
    content: (0, _html2._content_resume)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko_1_content", () => {
      const $scope1_id = (0, _html2._scope_id)();
      const $scope1_reason = (0, _html2._scope_reason)();
      (0, _html2._html)(`<p>Overview of ${(0, _html2._sep)(($sg__input_title))}${(0, _html2._escape)((0, _html2._hole_value)($scope1_id, "#text/0", input.title, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope1_id, "#text/0", $sg__input_title)}: ${(0, _html2._sep)(($sg__input_summary))}${(0, _html2._escape)((0, _html2._hole_value)($scope1_id, "#text/1", input.summary, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope1_id, "#text/1", ($sg__input_summary))}</p>`);
      ((0, _html2._serialize_guard)($scope0_reason, /* input.title, input.summary, input.view */1)) && (0, _html2._subscribe)($sg__input_summary && $input_summary__closures, (0, _html2._subscribe)($sg__input_title && $input_title__closures, (0, _html2._scope)($scope1_id, {
        _: (0, _html2._scope_with_id)($scope0_id)
      }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko", "5:2")));
      (0, _html2._resume_branch)($scope1_id);
    }, $scope0_id)
  };
  const Specs = {
    content: (0, _html2._content_resume)("packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko_2_content", () => {
      const $scope2_id = (0, _html2._scope_id)();
      const $scope2_reason = (0, _html2._scope_reason)();
      (0, _html2._html)("<ul>");
      (0, _html2._for_of)(input.specs, spec => {
        const $scope3_id = (0, _html2._scope_id)();
        (0, _html2._html)(`<li>${(0, _html2._escape)((0, _html2._hole_value)($scope3_id, "#text/0", spec.name, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope3_id, "#text/0", ($sg__input_specs))} is ${(0, _html2._sep)(($sg__input_specs))}${(0, _html2._escape)((0, _html2._hole_value)($scope3_id, "#text/1", spec.value, (0, _html2._persisted_reason)()))}${(0, _html2._el_resume)($scope3_id, "#text/1", $sg__input_specs)}</li>`);
        $sg__input_specs && (0, _html2._scope)($scope3_id, {}, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko", "10:6");
      }, function (spec) {
        return spec.name;
      }, $scope2_id, "#ul/0", $sg__input_specs, $sg__input_specs, $sg__input_specs, "</ul>", 1);
      ((0, _html2._serialize_guard)($scope0_reason, /* input.specs, input.view */0)) && (0, _html2._subscribe)($sg__input_specs && $input_specs__closures, (0, _html2._scope)($scope2_id, {
        _: (0, _html2._scope_with_id)($scope0_id)
      }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko", "8:2"));
      (0, _html2._resume_branch)($scope2_id);
    }, $scope0_id)
  };
  const $childScope = (0, _html2._peek_scope_id)();
  (0, _html2._set_serialize_reason)(($sg__input_view));
  (0, _layout2.default)({
    content: input.view === "specs" ? Specs : Overview
  });
  (0, _html2._script)($scope0_id, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko_0");
  (0, _html2._scope)($scope0_id, {
    input_title: (($si__input_view) || (0, _html2._update_reason)()) && input.title,
    input_summary: (($si__input_view) || (0, _html2._update_reason)()) && input.summary,
    input_specs: ($si__input_view || (0, _html2._update_reason)()) && input.specs,
    count: (0, _html2._state_reason)() && count,
    Overview: ($si__input_view || (0, _html2._update_reason)()) && Overview,
    Specs: ($si__input_view || (0, _html2._update_reason)()) && Specs,
    "ClosureScopes:input_title": $sg__input_title && $input_title__closures,
    "ClosureScopes:input_summary": $sg__input_summary && $input_summary__closures,
    "ClosureScopes:input_specs": $sg__input_specs && $input_specs__closures,
    "#childScope/3": (($sg__input_view) || (0, _html2._persisted_reason)()) && (0, _html2._existing_scope)($childScope)
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-update-dynamic-content/template.marko", 0, {
    input_title: ["input.title"],
    input_summary: ["input.summary"],
    input_specs: ["input.specs"],
    count: "1:6",
    Overview: "5:9",
    Specs: "8:9"
  });
  (0, _html2._resume_branch)($scope0_id);
}, 1);