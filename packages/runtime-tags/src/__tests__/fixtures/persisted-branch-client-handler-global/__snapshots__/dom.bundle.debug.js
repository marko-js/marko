// template.marko
const $template = "<main><!><button class=step>show</button></main>";
const $walks = "D%b l";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	document.querySelector("main").dataset.title = $scope._.title;
}));
const $if_content__setup = $if_content__setup__script;
const $title = /*@__PURE__*/ _const("title");
const $global_title = /*@__PURE__*/ _global_join("title", "__tests__/template.marko_0_$global_title#3/global", ($scope, $global_title) => $title($scope, $scope.$global.title + "!"));
const $if = /*@__PURE__*/ _if("#text/0", "<button class=read>read</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$global_title($scope, $scope.$global.title);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
