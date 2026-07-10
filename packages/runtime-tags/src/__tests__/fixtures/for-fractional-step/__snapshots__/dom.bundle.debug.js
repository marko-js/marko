// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_to("#text/0", "<div> </div>", "D l", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_until("#text/1", "<span> </span>", "D l", $for_content2__setup);
function $setup($scope) {
	$for($scope, [
		.3,
		0,
		.1
	]);
	$for2($scope, [
		5.1,
		0,
		1.7
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
