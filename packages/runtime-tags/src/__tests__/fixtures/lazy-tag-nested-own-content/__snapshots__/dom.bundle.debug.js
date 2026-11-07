// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// tags/press-button.marko
const $template$2 = "<button><!></button>";
const $walks$2 = " D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_onPress__script = _script("__tests__/tags/press-button.marko_0_input_onPress#4", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPress));
const $input_onPress = /*@__PURE__*/ _const("input_onPress", $input_onPress__script);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_onPress($scope, input.onPress);
	$input_content($scope, input.content);
};
var press_button_default = /*@__PURE__*/ _template("__tests__/tags/press-button.marko", $template$2, $walks$2, 0, $input$1);

// tags/press-buttons.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__$params = ($scope, $params2) => {
	$input_onPress($scope["#childScope/0"], $params2[0]?.onPress);
	$input_content($scope["#childScope/0"], $params2[0]?.content);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), 0, $for_content__$params);
const $input_button = ($scope, input_button) => $for($scope, [input_button]);
const $input = ($scope, input) => $input_button($scope, input.button);
var press_buttons_default = /*@__PURE__*/ _template("__tests__/tags/press-buttons.marko", $template$1, "b%c", 0, $input);

// grand-child.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$2, "b%c");
const $button_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/grand-child.marko_2*content", "add <!>", "b%"), { step: ($scope) => _text($scope["#text/0"], $scope.step) });
const $pressbutton_content__count = /*@__PURE__*/ _closure_get("count/3", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/grand-child.marko_1_count#0:2/subscribe");
const $pressbutton_content__setup = $pressbutton_content__count;
const $pressbutton_content = /*@__PURE__*/ _content("__tests__/grand-child.marko_1*content", "count:<!>", "b%", $pressbutton_content__setup);
const $count__closure = /*@__PURE__*/ _closure($pressbutton_content__count);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	let $button;
	forOf([10], (step) => {
		$button = attrTags($button, {
			onPress: $onPress2({
				_: $scope,
				"step/7": step
			}),
			content: $button_content($scope, { step })
		});
	});
	$input_button($scope["#childScope/1"], $button);
	$count__closure($scope);
});
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $pressbutton_content($scope));
	$input_onPress($scope["#childScope/0"], $onPress($scope));
	$count($scope, 0);
}
const $onPress2 = ($locals) => function() {
	const $scope = $locals._;
	$count($scope, $scope.count + $locals["step/7"]);
};
const $onPress = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resumed["__tests__/grand-child.marko_0/onPress2"] = $onPress2;
_resumed["__tests__/grand-child.marko_0/onPress"] = $onPress;
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
