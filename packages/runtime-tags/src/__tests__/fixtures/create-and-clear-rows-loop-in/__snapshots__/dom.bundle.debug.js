// template.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
const $setup = () => {};
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__text = ($scope, text) => _text($scope["#text/1"], text);
const $for_content__$params = ($scope, $params2) => $for_content__text($scope, $params2[1]);
const $for = /* @__PURE__ */ _for_in("#text/0", "<p><!>: <!></p>", "D%c%l", $for_content__setup, $for_content__$params);
const $for2 = /* @__PURE__ */ _for_in("#text/1", "<p> </p>", "D l", $for_content2__setup);
const $input_children = ($scope, input_children) => {
	$for($scope, [input_children]);
	$for2($scope, [input_children]);
};
const $input = ($scope, input) => $input_children($scope, input.children);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
