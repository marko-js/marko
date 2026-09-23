// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]?.id);
const $for = /*@__PURE__*/ _for_of("#text/0", " ", " ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
