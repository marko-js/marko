// tags/press-button.marko
const $template = "<button><!></button>";
const $walks = " D%l";
const $input_onPress__script = _script("d0", ($scope) => _on($scope.a, "click", $scope.e));
const $input_onPress = /*@__PURE__*/ _const(4, $input_onPress__script);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag;

// tags/press-buttons.marko
const $for_content__$params = ($scope, $params2) => {
	$input_onPress($scope.a, $params2[0]?.onPress);
	$input_content($scope.a, $params2[0]?.content);
};
const $for = /*@__PURE__*/ _for_of_unkeyed(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), 0, $for_content__$params);
const $input_button = ($scope, input_button) => $for($scope, [input_button]);

// grand-child.marko
const $button_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("b4", "add <!>", "b%"), { 1: ($scope) => _text($scope.a, $scope.b) });
const $pressbutton_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "b2");
const $count__closure = /*@__PURE__*/ _closure($pressbutton_content__count);
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	let $button;
	forOf([10], (step) => {
		$button = attrTags($button, {
			onPress: $onPress2({
				_: $scope,
				h: step
			}),
			content: $button_content($scope, { 1: step })
		});
	});
	$input_button($scope.b, $button);
	$count__closure($scope);
});
const $onPress2 = ($locals) => function() {
	const $scope = $locals._;
	$count($scope, $scope.c + $locals.h);
};
const $onPress = ($scope) => function() {
	$count($scope, +$scope.c + 1);
};
_resumed.b1 = $onPress2;
_resumed.b0 = $onPress;
