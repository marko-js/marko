// template.marko
const $template = "<button>Toggle</button><!><!>";
const $walks = " b%c";
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $if_content__setup = $load_Child_setup;
const $if = /* @__PURE__ */ _if("#text/1", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/2", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<span>child</span>";
const $walks = "b";
const $setup = () => {};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "b", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
