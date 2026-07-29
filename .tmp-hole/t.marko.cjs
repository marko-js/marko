"use strict";
exports.__esModule = true;
exports.default = void 0;
var _html2 = require("@marko/runtime-tags/html");
var _default = (exports.default = (0, _html2._template)(
  "bw8clS5",
  (input) => {
    const $scope0_reason = (0, _html2._scope_reason)();
    const $scope0_id = (0, _html2._scope_id)();
    (0, _html2._html)(
      `<div class=wrap><h1>Hello <!>${(0, _html2._escape)(
        input.name,
      )}${(0, _html2._el_resume)($scope0_id, "a")}${(0, _html2._patch_hole)($scope0_id, "a", input.name)}</h1><p>${(0,
      _html2._escape)(
        input.tagline,
      )}${(0, _html2._el_resume)($scope0_id, "b")}${(0, _html2._patch_hole)($scope0_id, "b", input.tagline)}</p></div>`,
    );
    (0, _html2._scope)($scope0_id, {
      e:
        (0, _html2._serialize_if)($scope0_reason, /* input.name */ 0) &&
        input.name,
      f:
        (0, _html2._serialize_if)($scope0_reason, /* input.tagline */ 1) &&
        input.tagline,
    });
  },
  1,
));
