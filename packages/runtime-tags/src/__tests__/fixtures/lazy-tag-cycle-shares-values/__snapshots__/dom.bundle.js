// a.marko
const $template = "<button>a</button><!><!>";
const $walks = " b%c";
let $load_B_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_depth.mjs"));
let $load_B_tag_input_from = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_from.mjs"));
const $if_content__input_depth = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $load_B_tag_input_depth($scope.b, $scope._.e - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__obj._($scope);
	$load_B_setup($scope, $scope.b, $scope.a);
};
const $if_content__obj = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $load_B_tag_input_from($scope.b, $scope._.g));
const $obj = /*@__PURE__*/ _let(6, $if_content__obj);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%/&", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	$obj($scope, { name: "a" + $scope.e });
	$if($scope, $scope.e > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $from = /*@__PURE__*/ _let(7);
const $input_from = $from;
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope, { ...$scope.g });
	console.log("a", $scope.g.name, JSON.stringify($scope.h));
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_from($scope, input.from);
};
var a_default = /*@__PURE__*/ _template("a", $template, $walks, $setup, $input);

// b.marko
const $template = "<button>b</button><!><!>";
const $walks = " b%c";
const A = /*@__PURE__*/ _load_template("a", ($_) => import("./a.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_depth__OR__obj = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, A, ($_) => ({
	depth: $scope._.e - 1,
	from: $scope._.g
})));
const $if_content__input_depth = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_depth__OR__obj);
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__obj._($scope);
};
const $if_content__obj = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_depth__OR__obj);
const $obj = /*@__PURE__*/ _let(6, $if_content__obj);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	$obj($scope, { name: "b" + $scope.e });
	$if($scope, $scope.e > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $from = /*@__PURE__*/ _let(7);
const $input_from = $from;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope, { ...$scope.g });
	console.log("b", $scope.g.name, JSON.stringify($scope.h));
}));
const $setup = $setup__script;

// v:b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
