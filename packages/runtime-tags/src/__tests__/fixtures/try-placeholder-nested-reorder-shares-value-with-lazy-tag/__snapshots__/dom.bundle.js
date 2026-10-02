// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
const $placeholder_content3__shared = /*@__PURE__*/ _const(4, ($scope) => $load_Child_tag_input_shared($scope.b, $scope.e));
const $placeholder_content3__count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f));
const $placeholder_content3__setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$placeholder_content3__count($scope, $scope.f + Object.keys($scope.e).length);
}));
const $placeholder_content3__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$placeholder_content3__shared($scope, { n: 1 });
	$placeholder_content3__count($scope, 0);
	$placeholder_content3__setup__script($scope);
};
const $placeholder_content3 = _content("b1", "<!><!><button class=placeholder> </button>", "b%/&b D ", $placeholder_content3__setup);
const $placeholder_content2 = _content("b2", "middle");
const $placeholder_content = _content("b3", "outer");

// child.marko
const $template = "<button class=child> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + Object.keys($scope.e).length);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_shared = /*@__PURE__*/ _const(4);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
