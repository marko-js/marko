// helper.ts
let thing2 = { on: false };

// tags/tabs/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if$1 = /*@__PURE__*/ _if("#text/0", "<div>a</div>", 0, 0, "<span>b</span>");
const $input_tab_on = ($scope, input_tab_on) => $if$1($scope, input_tab_on ? 0 : 1);
const $input = ($scope, input) => $input_tab($scope, input.tab);
const $input_tab = ($scope, input_tab) => $input_tab_on($scope, input_tab?.on);
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs/index.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$input_tab_on($scope["#childScope/0"], thing2.on);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
