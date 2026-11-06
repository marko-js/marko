// tags/get.marko
const $template$2 = "<button>map value</button><button>set member</button><button>map key</button>";
const $walks$2 = " b b b";
const $setup$2 = ($_) => {};
const $input_m__script = _script("__tests__/tags/get.marko_0_input_m#5", ($scope) => _on($scope["#button/0"], "click", $scope.input_m.get("k")));
const $input_m = /*@__PURE__*/ _const("input_m", $input_m__script);
const $input_s__script = _script("__tests__/tags/get.marko_0_input_s#6", ($scope) => _on($scope["#button/1"], "click", [...$scope.input_s][0]));
const $input_s = /*@__PURE__*/ _const("input_s", $input_s__script);
const $input_k__script = _script("__tests__/tags/get.marko_0_input_k#7", ($scope) => _on($scope["#button/2"], "click", [...$scope.input_k.keys()][0]));
const $input_k = /*@__PURE__*/ _const("input_k", $input_k__script);
const $input$2 = ($scope, input) => {
	$input_m($scope, input.m);
	$input_s($scope, input.s);
	$input_k($scope, input.k);
};
var get_default = /*@__PURE__*/ _template("__tests__/tags/get.marko", $template$2, $walks$2, 0, $input$2);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__f = ($scope, f) => {
	$input_m($scope["#childScope/0"], new Map([["k", f]]));
	$input_s($scope["#childScope/0"], new Set([f]));
	$input_k($scope["#childScope/0"], new Map([[f, 1]]));
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/5", ($scope) => $card_content__f($scope, $f($scope)), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $f = ($scope) => function() {
	console.log("fn", $scope._._.input_label);
};
_bind_resume("__tests__/template.marko_2/f >>input_label", $f);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
