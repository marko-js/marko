// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/probe.marko
const $template = "<p>probe</p>";
const $walks = "b";
const $bag = ($scope, bag) => $bag_items($scope, bag.items);
const $bag_items__script = _script("__tests__/tags/probe.marko_0_bag_items#1", ($scope) => $scope.bag_items.push("seen"));
const $bag_items = /*@__PURE__*/ _const("bag_items", $bag_items__script);
function $setup($scope) {
	$bag($scope, { items: [] });
}
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template, "b", $setup);
