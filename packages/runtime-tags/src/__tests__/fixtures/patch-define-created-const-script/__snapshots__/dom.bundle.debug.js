// template.marko
const $Probe_content__walks = "b";
const $Probe_content__template = "<p>probe</p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$Probe_content__setup._($scope["#childScope/0"], $scope._);
};
const $Probe_content__bag = ($scope, bag) => $Probe_content__bag_items($scope, bag.items);
const $Probe_content__bag_items__script = _script("__tests__/template.marko_1_bag_items#1", ($scope) => $scope.bag_items.push("seen"));
const $Probe_content__bag_items = /*@__PURE__*/ _const("bag_items", $Probe_content__bag_items__script);
const $Probe_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Probe_content__bag($scope, { items: [] }));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Probe_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Probe_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
