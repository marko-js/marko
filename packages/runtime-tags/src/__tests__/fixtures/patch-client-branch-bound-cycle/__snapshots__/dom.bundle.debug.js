// tags/get.marko
const $template$2 = "<button>array</button><button>set</button><button>map</button><p> </p>";
const $walks$2 = " b b bD l";
const $input_a_1_1___script = _script_patch("__tests__/tags/get.marko_0_input_a_1_1_0#9 input_a_1_1_0", ($scope) => _on($scope["#button/0"], "click", $scope.input_a_1_1_0));
const $input_a_1_1_ = /*@__PURE__*/ _const("input_a_1_1_0", $input_a_1_1___script);
const $input_a__OR__input_s__OR__input_m__script = _script_patch("__tests__/tags/get.marko_0_input_a#6_input_s#10_input_m#11 input_a input_s input_m", ($scope) => {
	{
		const s = [...$scope.input_s];
		$res($scope, [
			$scope.input_a[1] === $scope.input_a,
			typeof $scope.input_a[1][0],
			s[1] === $scope.input_s,
			$scope.input_m.get("self") === $scope.input_m,
			typeof $scope.input_m.get("self").get("f")
		].join());
	}
});
const $input_a__OR__input_s__OR__input_m = /*@__PURE__*/ _or_patch("__tests__/tags/get.marko_0_input_a#6_input_s#10_input_m#11/setup", 12, $input_a__OR__input_s__OR__input_m__script, 2);
const $input_s__script = _script_patch("__tests__/tags/get.marko_0_input_s#10 input_s", ($scope) => _on($scope["#button/1"], "click", [...[...$scope.input_s][1]][0]));
const $input_s = /*@__PURE__*/ _const("input_s", ($scope) => {
	$input_a__OR__input_s__OR__input_m($scope);
	$input_s__script($scope);
});
const $input_m__script = _script_patch("__tests__/tags/get.marko_0_input_m#11 input_m", ($scope) => _on($scope["#button/2"], "click", $scope.input_m.get("self").get("f")));
const $input_m = /*@__PURE__*/ _const("input_m", ($scope) => {
	$input_a__OR__input_s__OR__input_m($scope);
	$input_m__script($scope);
});
const $res = _let("res/13", ($scope) => _text($scope["#text/3"], $scope.res));
function $setup$2($scope) {
	$res($scope, "");
}
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a_1_1_($scope, $scope.input_a?.[1]?.[1]?.[0]);
	$input_a__OR__input_s__OR__input_m($scope);
});
const $input$2 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_s($scope, input.s);
	$input_m($scope, input.m);
};
var get_default = /*@__PURE__*/ _template("__tests__/tags/get.marko", $template$2, $walks$2, $setup$2, $input$2);

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
function mkArray(f) {
	const a = [f];
	a.push(a);
	return a;
}
function mkSet(f) {
	const s = new Set([f]);
	s.add(s);
	return s;
}
function mkMap(f) {
	const m = new Map([["f", f]]);
	m.set("self", m);
	return m;
}
const $card_content__f = ($scope, f) => {
	$input_a($scope["#childScope/0"], mkArray(f));
	$input_s($scope["#childScope/0"], mkSet(f));
	$input_m($scope["#childScope/0"], mkMap(f));
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/5", ($scope) => $card_content__f($scope, $f($scope)), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup$2($scope["#childScope/0"]);
};
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
