// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D%bD m";
const $setup = () => {};
const $if_content__input_nonce = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr($scope["#script/0"], "nonce", $scope._.input_nonce));
const $if_content__setup = $if_content__input_nonce;
const $if = /*@__PURE__*/ _if("#text/0", "<script>\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute(\"nonce\");\n      main.dataset.connected = document.currentScript.isConnected; }\n    <\/script>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_note = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_nonce($scope, input.nonce);
	$input_note($scope, input.note);
};
const $input_nonce = /*@__PURE__*/ _const("input_nonce", $if_content__input_nonce);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
