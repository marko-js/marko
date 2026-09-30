// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope._, {
		...$scope._.obj,
		cde: 2
	});
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]);
	_text($scope["#text/2"], $scope["#LoopKey"]?.length);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_in("#text/0", "<button><!>:<!></button>", " D%c%", $for_content__setup);
const $obj = /*@__PURE__*/ _let("obj/1", ($scope) => $for($scope, [$scope.obj]));
function $setup($scope) {
	$obj($scope, { ab: 1 });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
