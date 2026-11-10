// a.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
let $load_B_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_content.mjs"));
let $load_B_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_depth.mjs"));
const $B_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	console.log("a");
}));
const $B_content = /*@__PURE__*/ _content("a1", "<button>a</button>", " ", $B_content__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $load_B_tag_input_depth($scope.b, $scope._.e - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$load_B_setup($scope, $scope.b, $scope.a);
	$load_B_tag_input_content($scope.b, $B_content($scope));
};
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%/&", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	$if($scope, $scope.e > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_content($scope, input.content);
};
var a_default = /*@__PURE__*/ _template("a", $template, $walks, 0, $input);

// b.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = ($_) => {};
const A = /*@__PURE__*/ _load_template("a", ($_) => import("./a.mjs").then((mod) => mod.default));
const $A_content__setup = _script("b1", ($scope) => _on($scope.a, "click", function() {
	console.log("b");
}));
const $A_content = _content("b0", "<button>b</button>", " ", $A_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $A_content);
const $if_content__input_depth = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, A, ($_) => ({ depth: $scope._.e - 1 })));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_depth);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	$if($scope, $scope.e > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag;

// v:b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
