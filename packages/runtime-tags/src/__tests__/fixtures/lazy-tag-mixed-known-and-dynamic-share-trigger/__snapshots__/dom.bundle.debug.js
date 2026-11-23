// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button class=show-tag>tag</button><button class=show-dynamic>dynamic</button><span id=go>go</span><!><!><!>";
const $walks = " b c%b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "#go");
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", /*@__PURE__*/ $load_Child_trigger(($_) => import("./child.mjs").then((mod) => mod.default)));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.input_label.mjs")));
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_label($scope["#childScope/1"], "tag");
};
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%/&", $if_content__setup);
const $showTag = /*@__PURE__*/ _let("showTag/4", ($scope) => $if($scope, $scope.showTag ? 0 : 1));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $showDynamic = /*@__PURE__*/ _let("showDynamic/5", ($scope) => $dynamicTag($scope, $scope.showDynamic ? Child : null, ($_) => ({ label: "dynamic" })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$showTag($scope, true);
	});
	_on($scope["#button/1"], "click", function() {
		$showDynamic($scope, true);
	});
});
function $setup($scope) {
	$showTag($scope, false);
	$showDynamic($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
