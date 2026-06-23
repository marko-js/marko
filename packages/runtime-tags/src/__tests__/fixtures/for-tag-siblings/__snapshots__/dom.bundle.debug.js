// template.marko
const $template = "<div></div><div><!><div></div></div>";
const $walks = " bD%l";
const $for_content2__val = ($scope, val) => _text($scope["#text/0"], val);
const $for_content2__$params = ($scope, $params3) => $for_content2__val($scope, $params3[0]);
const $for_content__val = ($scope, val) => _text($scope["#text/0"], val);
const $for_content__$params = ($scope, $params2) => $for_content__val($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of("#div/0", "<div> </div>", "D l", 0, $for_content__$params);
const $for2 = /* @__PURE__ */ _for_of("#text/1", "<div> </div>", "D l", 0, $for_content2__$params);
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
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
