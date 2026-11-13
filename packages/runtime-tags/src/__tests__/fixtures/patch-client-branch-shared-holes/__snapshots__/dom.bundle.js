// tags/press.marko
const $template = "<button>press</button>";
const $input_onPress__script = _script_patch("c0 d", ($scope) => _on($scope.a, "click", $scope.d));
const $input_onPress = /*@__PURE__*/ _const(3, $input_onPress__script);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $inputtag_content2 = _content$1("a7", "t");
const $inputtag_content = _content$1("a6", "s");
const $Note_content__input_label = /*@__PURE__*/ _closure_get_patch("a5", 8, ($scope) => _text($scope.a, $scope._._._.d), ($scope) => $scope._._._, "a16", 1);
const $Note_content = _content$1("a4", "<i> </i>", "D ", $Note_content__input_label);
const $card_content__h = ($scope, h) => {
	$input_onPress($scope.f, h);
	_text($scope.g, typeof h);
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a9", 8, ($scope) => $card_content__h($scope, $h($scope)), ($scope) => $scope._._, "a16", 0);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content__input_flag__OR__Note = /*@__PURE__*/ _or(9, ($scope) => $card_content__dynamicTag($scope, $scope._._.f ? $scope.i : "b", ($_) => ({ x: 1 })));
const $card_content__Note = /*@__PURE__*/ _const(8, $card_content__input_flag__OR__Note);
const $card_content__setup__script = _script("a8", ($scope) => _on($scope.b, "click", function() {
	console.log("own", $scope._._.d);
}));
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_flag($scope);
	$card_content__input_tag($scope);
	$card_content__top($scope);
	$input_onPress($scope.e, $onPress($scope));
	$card_content__Note($scope, { content: $Note_content($scope) });
	$card_content__setup__script($scope);
};
const $card_content__input_flag = /*@__PURE__*/ _closure_get_patch("a12", 9, $card_content__input_flag__OR__Note, ($scope) => $scope._._, "a17", 0);
const $card_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2, $inputtag_content);
const $card_content__dynamicTag3 = /*@__PURE__*/ _dynamic_tag(3, $inputtag_content2);
const $card_content__input_tag__OR__top = /*@__PURE__*/ _or_patch("a11", 7, ($scope) => $card_content__dynamicTag3($scope, $scope._._.g, ($_) => ({ onClick: $scope._._.h })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a10", 10, ($scope) => {
	$card_content__dynamicTag2($scope, $scope._._.g, ($_) => ({ onClick: $onClick }));
	$card_content__input_tag__OR__top($scope);
}, ($scope) => $scope._._, "a18", 0);
const $card_content__top = /*@__PURE__*/ _closure_get_patch("a13", 11, $card_content__input_tag__OR__top, ($scope) => $scope._._, "a19", 0);
const $card_content = _content$1("a14", /*@__PURE__*/ ((_w0, _w1) => `<!><!><button>own</button><!><!>${_w0}${_w1}<span> </span>`)($template, $template), /*@__PURE__*/ ((_w0, _w1) => `b%b b%b%b/${_w0}&/${_w1}&D l`)(" b", " b"), $card_content__setup);
const $h = ($scope) => function() {
	console.log("h", $scope._._.d);
};
const $onPress = ($scope) => function() {
	console.log("press", $scope._._.d);
};
function $onClick() {
	console.log("static");
}
const $top = ($scope) => function() {
	console.log("top", $scope.d);
};
_bind_resume("a1 >>d", $h);
_bind_resume("a3 >>d", $onPress);
_resumed.a2 = $onClick;
_bind_resume("a0 d", $top);
