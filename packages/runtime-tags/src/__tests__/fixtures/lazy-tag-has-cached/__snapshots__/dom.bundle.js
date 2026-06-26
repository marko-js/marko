// template.marko
const $if = /* @__PURE__ */ _if(3, "<!><!><!><!>", "b%/&c", /* @__PURE__ */ _load_setup(0, 1, /* @__PURE__ */ (/* @__PURE__ */ _load_has_trigger(".shared"))(() => import("./v:child-b.marko.setup.mjs"))));
const $showB = /* @__PURE__ */ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$showB($scope, true);
}));

// child-a.marko
const $setup__script = _script("a0", ($scope) => console.log("loaded a"));

// child-b.marko
const $template = "<span>B</span>";
const $setup__script = _script("b0", ($scope) => console.log("loaded b"));
const $setup = $setup__script;

// v:child-b.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
