// template.marko
const $template = "<main><p><!> <!></p><h1> </h1><!><!></main>";
const $walks = "E%c%lD l%b%l";
let renders = 0;
const names = ["x", "y"];
const $for_content2__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content2__$params = ($scope, $params3) => $for_content2__name($scope, $params3[0]);
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $if_content__label = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => _text($scope["#text/1"], $scope._.label));
const $if_content__for = /*@__PURE__*/ _for_of("#text/2", "<b> </b>", "D ", 0, $for_content2__$params);
const $if_content__setup = ($scope) => {
	$if_content__label._($scope);
	$if_content__for($scope, [names]);
};
const $label = /*@__PURE__*/ _const("label", ($scope) => _text($scope["#text/1"], $scope.label));
const $for = /*@__PURE__*/ _for_of("#text/3", "<i> </i>", "D ", 0, $for_content__$params);
function $setup($scope) {
	$label($scope, names.join("+"));
	$for($scope, [names]);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $if = /*@__PURE__*/ _if("#text/4", "<span><!> <!></span><!><!>", "D%c%l%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
