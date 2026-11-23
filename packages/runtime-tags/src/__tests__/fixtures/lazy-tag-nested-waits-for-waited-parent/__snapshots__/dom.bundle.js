// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("_a", /*@__PURE__*/ _load_event_trigger("click", "#go"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
const $if_content__setup = ($scope) => $load_Child_setup($scope, $scope.b, $scope.a);
const $if = /*@__PURE__*/ _if(5, "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// child.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_onPress = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_onPress.mjs"));
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope.b, $scope.a);
	$load_GrandChild_tag_input_onPress($scope.b, $onPress);
}
function $onPress() {
	console.log("pressed");
}
_resumed.a0 = $onPress;

// grand-child.marko
const $template = "<button class=press>press</button>";
const $setup = ($_) => {};
const $input_onPress__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.d));
const $input_onPress = /*@__PURE__*/ _const(3, $input_onPress__script);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
