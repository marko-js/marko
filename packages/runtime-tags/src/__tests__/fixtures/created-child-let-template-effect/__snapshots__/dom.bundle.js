// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $T__script = _script("c0", ($scope) => console.log(typeof $scope.f));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
