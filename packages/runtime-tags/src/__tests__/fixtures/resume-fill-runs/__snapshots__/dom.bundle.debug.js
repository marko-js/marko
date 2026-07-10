// tags/x-pair/index.marko
const $template$1 = "<div><span> </span><em> </em></div>";
const $walks$1 = "E lD m";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_count = ($scope, input_count) => _text($scope["#text/1"], input_count);
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_count($scope, input.count);
};
var x_pair_default = /*@__PURE__*/ _template("__tests__/tags/x-pair/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button>inc</button><!><!><!>";
const $walks = " b%b%c";
const $for_content2__count = /*@__PURE__*/ _for_closure("#text/2", ($scope) => $input_count($scope["#childScope/0"], $scope._.count));
const $for_content2__setup = $for_content2__count;
const $for_content2__item_name = ($scope, item_name) => $input_label($scope["#childScope/0"], item_name);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_name($scope, $params3[0]?.name);
const $for_content__count = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = $for_content__count;
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	$for_content__count($scope);
	$for_content2__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/1", "<span><!>: <!></span>", "D%c%l", $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content2__setup, $for_content2__$params);
const $input_items = ($scope, input_items) => {
	$for($scope, [input_items]);
	$for2($scope, [input_items]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
