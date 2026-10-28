// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $getTitle2__script = _script("__tests__/template.marko_0_getTitle#4", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.getTitle();
	console.log("run", $scope.getTitle());
});
const $getTitle2 = /*@__PURE__*/ _const("getTitle", $getTitle2__script);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $getTitle2($scope, $getTitle($scope)));
const $input = ($scope, input) => $input_title($scope, input.title);
const $getTitle = ($scope) => () => $scope.input_title;
_resumed["__tests__/template.marko_0/getTitle"] = $getTitle;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
