// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_A_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:a.marko.setup.mjs"));
let $load_A_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:a.marko.input_depth.mjs"));
let $load_A_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:a.marko.input_content.mjs"));
function $setup($scope) {
	$load_A_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_A_tag_input_depth($scope["#childScope/1"], 2);
	$load_A_tag_input_content($scope["#childScope/1"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// a.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = ($_) => {};
let $load_B_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_content = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_content.mjs"));
let $load_B_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_depth.mjs"));
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $B_content__setup__script = _script("__tests__/a.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log("a");
}));
const $B_content__setup = $B_content__setup__script;
const $B_content = /*@__PURE__*/ _content("__tests__/a.marko_2*content", "<button>a</button>", " ", $B_content__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $load_B_tag_input_depth($scope["#childScope/1"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$load_B_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_B_tag_input_content($scope["#childScope/1"], $B_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_content($scope, input.content);
};
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template, $walks, 0, $input);

// b.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = ($_) => {};
const A = /*@__PURE__*/ _load_template("__tests__/a.marko", ($_) => import("./a.mjs").then((mod) => mod.default));
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $A_content__setup__script = _script("__tests__/b.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log("b");
}));
const $A_content__setup = $A_content__setup__script;
const $A_content = _content("__tests__/b.marko_2*content", "<button>b</button>", " ", $A_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $A_content);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, A, ($_) => ({ depth: $scope._.input_depth - 1 })));
const $if_content__setup = $if_content__input_depth;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_content($scope, input.content);
};
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template, $walks, 0, $input);

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
