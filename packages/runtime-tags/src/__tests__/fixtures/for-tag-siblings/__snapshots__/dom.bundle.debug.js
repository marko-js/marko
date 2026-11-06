// template.marko
const $template = "<div></div><div><!><div></div></div>";
const $walks = " bD%l";
const $for_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $for_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#div/0", "<div> </div>", "D ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<div> </div>", "D ", 0, $for_content2__$params);
const $arrA = ($scope, arrA) => {
	$for($scope, [arrA]);
	$for2($scope, [arrA]);
};
function $setup($scope) {
	$arrA($scope, [
		1,
		2,
		3
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
