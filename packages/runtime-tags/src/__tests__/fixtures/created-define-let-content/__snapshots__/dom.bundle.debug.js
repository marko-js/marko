// template.marko
const $Card_content2__walks = "D b%l";
const $Card_content2__template = "<section><button>clear</button><!></section>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Card_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Card_content2__c = /*@__PURE__*/ _let("c/5", ($scope) => $Card_content2__dynamicTag($scope, $scope.c));
const $Card_content2__input_content = $Card_content2__c;
const $Card_content2__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$Card_content2__c($scope, undefined);
}));
const $Card_content2__setup = $Card_content2__setup__script;
const $Card_content2__$params = ($scope, $params2) => $Card_content2__input($scope, $params2[0]);
const $Card_content2__input = ($scope, input) => $Card_content2__input_content($scope, input.content);
const $Card_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe");
const $Card_content__setup = $Card_content__input_label;
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $Card_content__setup);
const $if_content__setup = ($scope) => {
	$Card_content2__setup($scope["#childScope/0"]);
	$Card_content2__input_content($scope["#childScope/0"], $Card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content2__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content2__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
