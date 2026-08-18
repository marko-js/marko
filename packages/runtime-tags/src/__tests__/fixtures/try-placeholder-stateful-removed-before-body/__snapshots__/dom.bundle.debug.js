// template.marko
const $template = "<button>hide</button><!><!>";
const $walks = " b%c";
const $placeholder_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("placeholder mounted");
	},
	onDestroy: function() {
		console.log("placeholder destroyed");
	}
}));
const $placeholder_content__setup = $placeholder_content__setup__script;
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", " loading", 0, $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "done");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 3));
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
