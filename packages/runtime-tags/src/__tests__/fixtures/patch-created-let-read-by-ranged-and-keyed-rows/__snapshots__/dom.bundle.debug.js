// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content2__sel = /*@__PURE__*/ _for_selector_patch("__tests__/template.marko_3_sel#1:3/setup", "#text/2", "sel", ($scope) => _text($scope["#text/0"], $scope["#LoopKey"] === $scope._.sel ? "*" : ""));
const $for_content2__setup = ($scope) => {
	$for_content2__sel._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for_content__sel = /*@__PURE__*/ _for_selector_patch("__tests__/template.marko_2_sel#1:3/setup", "#text/1", "sel", ($scope) => _text($scope["#text/1"], $scope["#LoopKey"] === $scope._.sel ? "*" : ""));
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__sel($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel._($scope);
	$for_content__setup__script($scope);
	_text($scope["#text/2"], $scope["#LoopKey"]);
};
const $if_content__sel = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_sel#3/fill", "sel/3", ($scope) => {
	_text($scope["#text/0"], $scope.sel);
	$for_content__sel($scope);
	$for_content2__sel($scope);
});
const $if_content__for = /*@__PURE__*/ _for_to_unkeyed("#text/1", "<button><!><!></button>", " D%b%", $for_content__setup);
const $if_content__for2 = /*@__PURE__*/ _for_of("#text/2", "<span><!><!></span>", "D%b%", $for_content2__setup);
const $if_content__setup = ($scope) => {
	$if_content__sel($scope, 1);
	$if_content__for($scope, [2, 1]);
	$if_content__for2($scope, [[{ id: 1 }, { id: 2 }], "id"]);
};
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><!><!><!>", "D l%b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
