// tags/note/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], "n:" + input_text);
const $input$1 = ($scope, input) => $input_text($scope, input.text);
var note_default = /*@__PURE__*/ _template("__tests__/tags/note/index.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "d:" + $scope._._.input_title), ($scope) => $scope._._), 0);
const $if_content2__setup = $if_content2__input_title;
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_text($scope["#childScope/1"], $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__show._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $if_content__show = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.show ? 0 : 1));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$if_content__show($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($if_content2__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$if_content__input_title($scope);
	$input_title__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
