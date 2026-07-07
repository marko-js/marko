// template.marko
const $template = "<div id=el></div><div></div>";
const $walks = "b b";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	document.getElementById("el").innerHTML = $scope["#LoopKey"] === undefined ? "index missing" : $scope["#LoopKey"];
}));
const $for_content__setup = $for_content__setup__script;
const $for = /*@__PURE__*/ _for_of("#div/0", "<button>Click</button>", " b", $for_content__setup);
function $setup($scope) {
	$for($scope, [["hello"]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b b", $setup);
