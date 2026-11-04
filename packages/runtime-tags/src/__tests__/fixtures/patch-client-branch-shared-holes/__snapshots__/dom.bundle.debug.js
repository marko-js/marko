// tags/press.marko
const $template$2 = "<button>press</button>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $input_onPress__script = _script_patch("__tests__/tags/press.marko_0_input_onPress#3 input_onPress", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPress));
const $input_onPress = /*@__PURE__*/ _const("input_onPress", $input_onPress__script);
const $input$2 = ($scope, input) => $input_onPress($scope, input.onPress);
var press_default = /*@__PURE__*/ _template("__tests__/tags/press.marko", $template$2, " b", 0, $input$2);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
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
const $inputtag_content2 = _content_resume("__tests__/template.marko_5*content", "t");
const $inputtag_content = _content_resume("__tests__/template.marko_4*content", "s");
const $Note_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:3/subscribe", "input_label/8", ($scope) => _text($scope["#text/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#3/subscribers", 1);
const $Note_content__setup = $Note_content__input_label;
const $Note_content = _content_resume("__tests__/template.marko_3*content", "<i> </i>", "D ", $Note_content__setup);
const $card_content__h = ($scope, h) => {
	$input_onPress($scope["#childScope/5"], h);
	_text($scope["#text/6"], typeof h);
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:3/subscribe", "input_label/8", ($scope) => $card_content__h($scope, $h($scope)), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_flag__OR__Note = /*@__PURE__*/ _or(9, ($scope) => $card_content__dynamicTag($scope, $scope._._.input_flag ? $scope.Note : "b", ($_) => ({ x: 1 })));
const $card_content__Note = /*@__PURE__*/ _const("Note", $card_content__input_flag__OR__Note);
const $card_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log("own", $scope._._.input_label);
}));
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_flag($scope);
	$card_content__input_tag($scope);
	$card_content__top($scope);
	$input_onPress($scope["#childScope/4"], $onPress($scope));
	$card_content__Note($scope, { content: $Note_content($scope) });
	$card_content__setup__script($scope);
};
const $card_content__input_flag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_flag#0:5/subscribe", "input_flag/9", $card_content__input_flag__OR__Note, ($scope) => $scope._._, "__tests__/template.marko_0_input_flag#5/subscribers", 0);
const $card_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", $inputtag_content);
const $card_content__dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/3", $inputtag_content2);
const $card_content__input_tag__OR__top = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_tag#0:6_top#0:7/setup", 7, ($scope) => $card_content__dynamicTag3($scope, $scope._._.input_tag, ($_) => ({ onClick: $scope._._.top })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:6/subscribe", "input_tag/10", ($scope) => {
	$card_content__dynamicTag2($scope, $scope._._.input_tag, ($_) => ({ onClick: $onClick }));
	$card_content__input_tag__OR__top($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#6/subscribers", 0);
const $card_content__top = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_top#0:7/subscribe", "top/11", $card_content__input_tag__OR__top, ($scope) => $scope._._, "__tests__/template.marko_0_top#7/subscribers", 0);
const $card_content = _content_resume("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0, _w1) => `<!><!><button>own</button><!><!>${_w0}${_w1}<span> </span>`)($template$2, $template$2), /*@__PURE__*/ ((_w0, _w1) => `b%b b%b%b/${_w0}&/${_w1}&D l`)(" b", " b"), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $top2__closure = /*@__PURE__*/ _closure($card_content__top);
const $top2 = /*@__PURE__*/ _const("top", $top2__closure);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label, $Note_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$top2($scope, $top($scope));
	$input_label__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_flag($scope, input.flag);
	$input_tag($scope, input.tag);
	$input_show($scope, input.show);
};
const $input_flag__closure = /*@__PURE__*/ _closure($card_content__input_flag);
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
const $h = ($scope) => function() {
	console.log("h", $scope._._.input_label);
};
const $onPress = ($scope) => function() {
	console.log("press", $scope._._.input_label);
};
function $onClick() {
	console.log("static");
}
const $top = ($scope) => function() {
	console.log("top", $scope.input_label);
};
_bind_resume("__tests__/template.marko_2/h >>input_label", $h);
_bind_resume("__tests__/template.marko_2/onPress >>input_label", $onPress);
_resumed["__tests__/template.marko_2/onClick"] = $onClick;
_bind_resume("__tests__/template.marko_0/top input_label", $top);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
