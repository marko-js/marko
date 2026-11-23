// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("_a", /*@__PURE__*/ _load_media_trigger("(width <= 600px)"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
const $if_content__setup = ($scope) => $load_Child_setup($scope, $scope.b, $scope.a);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// child.marko
const $template = "<span>loaded</span>";
const $setup = ($_) => {};

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
