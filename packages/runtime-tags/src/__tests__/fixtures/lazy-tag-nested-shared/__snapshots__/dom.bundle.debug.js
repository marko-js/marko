// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
const $setup = $load_Child_setup;
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<button class=child>child:<!></button><!><!><!>";
const $walks = " Db%l%/&c";
let $load_GrandChild_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", () => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_obj = /* @__PURE__ */ _load_signal(() => import("./v:grand-child.marko.input_obj.mjs"));
const $obj__script = _script("__tests__/child.marko_0_obj", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope, {
		...$scope.obj,
		name: $scope.obj?.name + "!"
	});
}));
const $obj = /* @__PURE__ */ _let("obj/4", ($scope) => {
	$load_GrandChild_tag_input_obj($scope["#childScope/3"], $scope.obj);
	$obj_name($scope, $scope.obj?.name);
	$obj__script($scope);
});
const $obj_name = /* @__PURE__ */ _const("obj_name", ($scope) => _text($scope["#text/1"], $scope.obj_name));
function $setup($scope) {
	$load_GrandChild_setup($scope);
	$obj($scope, { name: "shared" });
}
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup);

// grand-child.marko
const $template = "<button class=grand>grand:<!></button>";
const $walks = " Db%l";
const $setup = () => {};
const $copy__script = _script("__tests__/grand-child.marko_0_copy", ($scope) => _on($scope["#button/0"], "click", function() {
	$copy($scope, {
		...$scope.copy,
		name: $scope.copy?.name + "?"
	});
}));
const $copy = /* @__PURE__ */ _let("copy/5", ($scope) => {
	$copy_name($scope, $scope.copy?.name);
	$copy__script($scope);
});
const $copy_name = /* @__PURE__ */ _const("copy_name", ($scope) => _text($scope["#text/1"], $scope.copy_name));
const $input_obj = ($scope, input_obj) => $copy($scope, input_obj);
const $input = ($scope, input) => $input_obj($scope, input.obj);
var grand_child_default = /* @__PURE__ */ _template("__tests__/grand-child.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
