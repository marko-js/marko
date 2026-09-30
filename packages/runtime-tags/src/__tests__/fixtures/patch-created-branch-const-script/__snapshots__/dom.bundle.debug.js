// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__bag = ($scope, bag) => $if_content__bag_items($scope, bag.items);
const $if_content__bag_items__script = _script("__tests__/template.marko_1_bag_items#1", ($scope) => $scope.bag_items.push("seen"));
const $if_content__bag_items = /*@__PURE__*/ _const("bag_items", $if_content__bag_items__script);
const $if_content__setup = ($scope) => $if_content__bag($scope, { items: [] });
const $if = /*@__PURE__*/ _if("#text/0", "<p>probe</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
