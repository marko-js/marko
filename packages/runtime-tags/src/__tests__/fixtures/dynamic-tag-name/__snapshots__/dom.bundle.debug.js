// tags/tag-a/index.marko
const $template$2 = "<div>A <!></div>";
const $walks$2 = " Db%l";
const $setup$2 = () => {};
const $content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $className$1 = ($scope, className) => _attr_class($scope["#div/0"], className);
const $other$2 = ($scope, other) => _attr($scope["#div/0"], "data-other", other);
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $content$2 = $dynamicTag$2;
const $input$2 = ($scope, input) => {
	$className$1($scope, input.class);
	$other$2($scope, input.other);
	$content$2($scope, input.content);
};
var tag_a_default = /*@__PURE__*/ _template("__tests__/tags/tag-a/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/tag-b/index.marko
const $template$1 = "<div>B <!></div>";
const $walks$1 = " Db%l";
const $setup$1 = () => {};
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $className = ($scope, className) => _attr_class($scope["#div/0"], className);
const $other$1 = ($scope, other) => _attr($scope["#div/0"], "data-other", other);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $content$1 = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$className($scope, input.class);
	$other$1($scope, input.other);
	$content$1($scope, input.content);
};
var tag_b_default = /*@__PURE__*/ _template("__tests__/tags/tag-b/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>";
const $walks = "b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%c";
const foo = "";
const $showTagAtagA_content = _content_resume("__tests__/template.marko_1_content", "Body content", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_other = /*@__PURE__*/ _or(29, ($scope) => $dynamicTag($scope, $scope.content, () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $content = /*@__PURE__*/ _const("content", $input_content__OR__input_other);
const $dynamicTag11 = /*@__PURE__*/ _dynamic_tag("#text/10");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_x__OR__input_other = /*@__PURE__*/ _or(30, ($scope) => $dynamicTag2($scope, $scope.x, () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $dynamicTag4 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_show__OR__input_other = /*@__PURE__*/ _or(31, ($scope) => {
	$dynamicTag3($scope, $scope.show ? "div" : null, () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
	$dynamicTag4($scope, $scope.show && "div", () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
});
const $dynamicTag5 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_isLarge__OR__input_other = /*@__PURE__*/ _or(33, ($scope) => $dynamicTag5($scope, $scope.isLarge ? "h1" : "h2", () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $dynamicTag6 = /*@__PURE__*/ _dynamic_tag("#text/5");
const $dynamicTag7 = /*@__PURE__*/ _dynamic_tag("#text/6");
const $dynamicTag8 = /*@__PURE__*/ _dynamic_tag("#text/7", $showTagAtagA_content);
const $input_showTagA__OR__input_other = /*@__PURE__*/ _or(32, ($scope) => {
	$dynamicTag6($scope, $scope.showTagA ? tag_a_default : tag_b_default, () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
	$dynamicTag7($scope, $scope.showTagA && tag_a_default, () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
	$dynamicTag8($scope, $scope.showTagA && tag_a_default, () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
});
const $dynamicTag9 = /*@__PURE__*/ _dynamic_tag("#text/8");
const $input_tag__OR__input_other = /*@__PURE__*/ _or(34, ($scope) => $dynamicTag9($scope, $scope.tag || tag_a_default, () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $dynamicTag10 = /*@__PURE__*/ _dynamic_tag("#text/9");
const $input_other__OR__largeHeading = /*@__PURE__*/ _or(37, ($scope) => $dynamicTag10($scope, $scope.largeHeading || "h2", () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $dynamicTag12 = /*@__PURE__*/ _dynamic_tag("#text/11");
const $dynamicTag13 = /*@__PURE__*/ _dynamic_tag("#text/12");
const $input_level__OR__input_other = /*@__PURE__*/ _or(35, ($scope) => {
	$dynamicTag12($scope, "h" + $scope.level, () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
	$dynamicTag13($scope, `h${$scope.level}`, () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
});
const $dynamicTag14 = /*@__PURE__*/ _dynamic_tag("#text/13");
const $input_other__OR__tagConstA = /*@__PURE__*/ _or(39, ($scope) => $dynamicTag14($scope, $scope.tagConstA, () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $dynamicTag15 = /*@__PURE__*/ _dynamic_tag("#text/14");
const $input_other__OR__tagConstB = /*@__PURE__*/ _or(41, ($scope) => $dynamicTag15($scope, $scope.tagConstB, () => ({
	class: ["a", "b"],
	other: $scope.other
})));
const $other = /*@__PURE__*/ _const("other", ($scope) => {
	$dynamicTag11($scope, globalThis.x = "a" + "b", () => ({
		class: ["a", "b"],
		other: $scope.other
	}));
	$input_content__OR__input_other($scope);
	$input_x__OR__input_other($scope);
	$input_show__OR__input_other($scope);
	$input_isLarge__OR__input_other($scope);
	$input_showTagA__OR__input_other($scope);
	$input_tag__OR__input_other($scope);
	$input_other__OR__largeHeading($scope);
	$input_level__OR__input_other($scope);
	$input_other__OR__tagConstA($scope);
	$input_other__OR__tagConstB($scope);
});
const $x = /*@__PURE__*/ _const("x", $input_x__OR__input_other);
const $tagConstB = /*@__PURE__*/ _const("tagConstB", $input_other__OR__tagConstB);
const $show = /*@__PURE__*/ _const("show", ($scope) => {
	$tagConstB($scope, $scope.show ? "div" : null);
	$input_show__OR__input_other($scope);
});
const $largeHeading = /*@__PURE__*/ _const("largeHeading", $input_other__OR__largeHeading);
const $isLarge = /*@__PURE__*/ _const("isLarge", ($scope) => {
	$largeHeading($scope, $scope.isLarge && "h1");
	$input_isLarge__OR__input_other($scope);
});
const $showTagA = /*@__PURE__*/ _const("showTagA", $input_showTagA__OR__input_other);
const $tag = /*@__PURE__*/ _const("tag", $input_tag__OR__input_other);
const $level = /*@__PURE__*/ _const("level", $input_level__OR__input_other);
const $tagConstA = /*@__PURE__*/ _const("tagConstA", $input_other__OR__tagConstA);
const $dynamicTag16 = /*@__PURE__*/ _dynamic_tag("#text/15");
const $dynamicTag17 = /*@__PURE__*/ _dynamic_tag("#text/16");
const $dynamicTag18 = /*@__PURE__*/ _dynamic_tag("#text/17");
const $dynamicTag19 = /*@__PURE__*/ _dynamic_tag("#text/18");
function $setup($scope) {
	$tagConstA($scope, "a");
	$dynamicTag16($scope, `h${1}`);
	$dynamicTag17($scope, foo || "div");
	$dynamicTag18($scope, foo + "div");
	$dynamicTag19($scope, "d" + "iv");
}
const $input = ($scope, input) => {
	$content($scope, input.content);
	$x($scope, input.x);
	$show($scope, input.show);
	$showTagA($scope, input.showTagA);
	$isLarge($scope, input.isLarge);
	$tag($scope, input.tag);
	$level($scope, input.level);
	$other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
