// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Route_setup = /*@__PURE__*/ _load_setup(() => import("./v:route-cl.marko.setup.mjs"));
let $load_Route_tag_input_n = /*@__PURE__*/ _load_signal_patch(() => import("./v:route-cl.marko.input_n.mjs"), "ready:__tests__/tags/route-cl.marko");
const $global_n = /*@__PURE__*/ _global_join("n", "__tests__/template.marko_0_$global_n#2/global", ($scope, $global_n) => $load_Route_tag_input_n($scope["#childScope/1"], Number($scope.$global.n || 5)));
function $setup($scope) {
	$load_Route_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$global_n($scope, $scope.$global.n);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/sub.marko
const $template$1 = "<!><!><button class=inc>+</button>";
const $walks$1 = "b%b b";
const $if_content__input_n__OR__g = _fill_join("__tests__/tags/sub.marko_fill1", "g", /*@__PURE__*/ _fill_join("__tests__/tags/sub.marko_fill0", "input_n", /*@__PURE__*/ _init_join("__tests__/tags/sub.marko_2_input_n#0:5/init", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.g - $scope._._.input_n))), 0, ($join) => /*@__PURE__*/ _for_closure("#text/0", /*@__PURE__*/ _if_closure("#text/0", 0, $join))), 0, ($join2) => /*@__PURE__*/ _for_closure("#text/0", /*@__PURE__*/ _if_closure("#text/0", 0, $join2)));
const $if_content__input_n = _closure_get("input_n/7", $if_content__input_n__OR__g, ($scope) => $scope._._, "__tests__/tags/sub.marko_2_input_n#0:5/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_n($scope);
	$if_content__g($scope);
};
const $if_content__g = _init_closure_get("__tests__/tags/sub.marko_2_g#0:6/init", "g/8", $if_content__input_n__OR__g, ($scope) => $scope._._, "__tests__/tags/sub.marko_2_g#0:6/subscribe");
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span class=v> </span>", "D ", $if_content__setup);
const $for_content__t_on = ($scope, t_on) => $for_content__if($scope, t_on ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__t_on($scope, $params2[0]?.on);
const $g__closure = /*@__PURE__*/ _closure($if_content__g);
const $g = /*@__PURE__*/ _fill_let("__tests__/tags/sub.marko_fill1", "g/6", $g__closure);
const $setup__script = _script("__tests__/tags/sub.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$g($scope, +$scope.g + 1);
	});
	document.body.dataset.ok = "1";
});
function $setup$1($scope) {
	$setup__script($scope);
	$g($scope, 10);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "k"]);
const $input$1 = ($scope, input) => {
	$input_items($scope, input.items);
	$input_n$1($scope, input.n);
};
const $input_n__closure = /*@__PURE__*/ _closure($if_content__input_n);
const $input_n$1 = /*@__PURE__*/ _fill_const("__tests__/tags/sub.marko_fill0", "input_n", $input_n__closure);
var sub_default = /*@__PURE__*/ _template("__tests__/tags/sub.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/route-cl.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_items($scope["#childScope/0"], [{
		k: 1,
		on: true
	}]);
}
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var route_cl_default = /*@__PURE__*/ _template("__tests__/tags/route-cl.marko", $template, $walks, $setup, $input);

// tags/v:route-cl.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
