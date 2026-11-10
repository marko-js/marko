// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_A_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:a.marko.setup.mjs"));
let $load_A_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:a.marko.input_depth.mjs"));
let $load_A_tag_input_from = /*@__PURE__*/ _load_signal(($_) => import("./v:a.marko.input_from.mjs"));
function $setup($scope) {
	$load_A_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_A_tag_input_depth($scope["#childScope/1"], 2);
	$load_A_tag_input_from($scope["#childScope/1"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// a.marko
const $template = "<button>a</button><!><!>";
const $walks = " b%c";
let $load_B_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_depth.mjs"));
let $load_B_tag_input_from = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_from.mjs"));
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $load_B_tag_input_depth($scope["#childScope/1"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__obj._($scope);
	$load_B_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $if_content__obj = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $load_B_tag_input_from($scope["#childScope/1"], $scope._.obj));
const $obj = /*@__PURE__*/ _let("obj/6", $if_content__obj);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$obj($scope, { name: "a" + $scope.input_depth });
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $from = /*@__PURE__*/ _let("from/7");
const $input_from = $from;
const $setup__script = _script("__tests__/a.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope, { ...$scope.obj });
	console.log("a", $scope.obj.name, JSON.stringify($scope.from));
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_from($scope, input.from);
};
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template, $walks, $setup, $input);

// b.marko
const $template = "<button>b</button><!><!>";
const $walks = " b%c";
const A = /*@__PURE__*/ _load_template("__tests__/a.marko", ($_) => import("./a.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_depth__OR__obj = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, A, ($_) => ({
	depth: $scope._.input_depth - 1,
	from: $scope._.obj
})));
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_depth__OR__obj);
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__obj._($scope);
};
const $if_content__obj = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_depth__OR__obj);
const $obj = /*@__PURE__*/ _let("obj/6", $if_content__obj);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$obj($scope, { name: "b" + $scope.input_depth });
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $from = /*@__PURE__*/ _let("from/7");
const $input_from = $from;
const $setup__script = _script("__tests__/b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope, { ...$scope.obj });
	console.log("b", $scope.obj.name, JSON.stringify($scope.from));
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_from($scope, input.from);
};
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template, $walks, $setup, $input);

// v:a.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
