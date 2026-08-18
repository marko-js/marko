// template.marko
const $placeholder_content = _content_resume("a1", " loading", 0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("placeholder mounted");
	},
	onDestroy: function() {
		console.log("placeholder destroyed");
	}
})));
const $await_content = /*@__PURE__*/ _await_content(0, "done");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 3));
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$show($scope, false);
}));
