// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
_enable_catch();
const $await_content__setup = ($scope) => {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope.b, 1);
};
const $placeholder_content = _content_resume("b0", "loading", "b");
const $await_content = /*@__PURE__*/ _await_content(0, "<!><!><!><!>", "b%/&c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%c", $if_content__setup);
const $show__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /*@__PURE__*/ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});

// child.marko
const $template = "<span> </span>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $setup__script = _script("a0", ($scope) => console.log("loaded"));
const $setup = $setup__script;

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
