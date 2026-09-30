// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/probe.marko
const $template = "<p>probe</p>";
const $walks = "b";
const $setup = () => {};
const $opts = ($scope, opts) => {
	$opts_items($scope, opts.items);
	$opts_label($scope, opts.label);
};
const $opts_items = /*@__PURE__*/ _const("opts_items");
const $opts_label = /*@__PURE__*/ _const("opts_label");
const $input_label__OR__opts_items__OR__opts_label__script = _script("__tests__/tags/probe.marko_0_input_label#2_opts_items#4_opts_label#5", ($scope) => {
	$scope.opts_items.push("x");
	document.body.dataset.seen = $scope.opts_label + ":" + $scope.input_label;
});
const $input_label__OR__opts_items__OR__opts_label = $input_label__OR__opts_items__OR__opts_label__script;
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__opts_items__OR__opts_label($scope);
	$opts($scope, {
		label: $scope.input_label,
		items: []
	});
});
const $input = ($scope, input) => $input_label($scope, input.label);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template, "b", 0, $input);
