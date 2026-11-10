// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<button class=child> </button><!><!>";
const $walks = " D l%c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_obj = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_obj.mjs"));
const $for_content__obj = /*@__PURE__*/ _for_closure("#text/2", ($scope) => $load_GrandChild_tag_input_obj($scope["#childScope/1"], $scope._.obj), 5);
const $for_content__setup = ($scope) => {
	$for_content__obj._($scope);
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $obj = /*@__PURE__*/ _let("obj/3", ($scope) => {
	$obj_name($scope, $scope.obj?.name);
	$for_content__obj($scope);
});
const $obj_name = /*@__PURE__*/ _const("obj_name", ($scope) => _text($scope["#text/1"], $scope.obj_name));
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/2", "<!><!><!>", "b%/&", $for_content__setup);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope, { ...$scope.obj });
}));
function $setup($scope) {
	$obj($scope, { name: "shared" });
	$for($scope, [3]);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// grand-child.marko
const $template = "<button class=grand> </button>";
const $walks = " D l";
const $copy = /*@__PURE__*/ _let("copy/5", ($scope) => $copy_name($scope, $scope.copy?.name));
const $copy_name = /*@__PURE__*/ _const("copy_name", ($scope) => _text($scope["#text/1"], $scope.copy_name));
const $input_obj = $copy;
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$copy($scope, {
		...$scope.copy,
		name: $scope.copy.name + "!"
	});
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_obj($scope, input.obj);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, $walks, $setup, $input);

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
