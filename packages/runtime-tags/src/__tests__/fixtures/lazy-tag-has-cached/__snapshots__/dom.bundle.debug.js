// child-a.marko
const $template = "<span>A</span>";
const $walks = "b";
const $setup__script = _script("__tests__/child-a.marko_0", ($scope) => console.log("loaded a"));
const $setup = $setup__script;
var child_a_default = /* @__PURE__ */ _template("__tests__/child-a.marko", $template, "b", $setup);

// child-b.marko
const $template = "<span>B</span>";
const $walks = "b";
const $setup__script = _script("__tests__/child-b.marko_0", ($scope) => console.log("loaded b"));
const $setup = $setup__script;
var child_b_default = /* @__PURE__ */ _template("__tests__/child-b.marko", $template, "b", $setup);

// template.marko
const $template = "<button>Show B</button><!><!><!><!>";
const $walks = " b%/&b%c";
const $load_ChildA_trigger = /* @__PURE__ */ _load_has_trigger(".shared");
let $load_ChildA_setup = /* @__PURE__ */ _load_setup("#text/1", "#childScope/2", /* @__PURE__ */ $load_ChildA_trigger(() => import("./v:child-a.marko.setup.mjs")));
const $load_ChildB_trigger = /* @__PURE__ */ _load_has_trigger(".shared");
let $load_ChildB_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", /* @__PURE__ */ $load_ChildB_trigger(() => import("./v:child-b.marko.setup.mjs")));
const $if_content__setup = $load_ChildB_setup;
const $if = /* @__PURE__ */ _if("#text/3", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $showB = /* @__PURE__ */ _let("showB/4", ($scope) => $if($scope, $scope.showB ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$showB($scope, true);
}));
function $setup($scope) {
	$load_ChildA_setup($scope);
	$showB($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child-a.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];

// v:child-b.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
