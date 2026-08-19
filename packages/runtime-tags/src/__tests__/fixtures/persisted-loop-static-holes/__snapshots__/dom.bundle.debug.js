// template.marko
const $template = "<ul></ul><ol></ol><!><!>";
const $walks = " b b%c";
const $for_content3__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content3__$params = ($scope, $params3) => $for_content3__x($scope, $params3[0]);
const $for_content2__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/1"], $scope._._.input_note), ($scope) => $scope._._);
const $for_content2__setup = $for_content2__input_note;
const $for_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content2__$params = ($scope, $params4) => $for_content2__x($scope, $params4[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#div/0", "<p><!>:<!></p>", "D%c%", $for_content2__setup, $for_content2__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $for_content__input_note = /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/1"], $scope._.input_note));
const $for_content__setup = $for_content__input_note;
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>:<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#ol/1", "<li> </li>", "D ", 0, $for_content3__$params);
function $setup($scope) {
	$for($scope, [[1, 2]]);
	$for2($scope, [[1, 2]]);
}
const $if = /*@__PURE__*/ _if("#text/2", "<div></div>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_show($scope, input.show);
};
const $input_note__closure = /*@__PURE__*/ _closure($for_content2__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", ($scope) => {
	$for_content__input_note($scope);
	$input_note__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
