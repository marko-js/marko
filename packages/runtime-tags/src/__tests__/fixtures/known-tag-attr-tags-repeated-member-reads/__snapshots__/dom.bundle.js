// tags/child/index.marko
const $input_item_foo = ($scope, input_item_foo) => _text($scope.a, input_item_foo);
const $input_item_n = ($scope, input_item_n) => _text($scope.b, input_item_n);
const $input_item_sub_x = ($scope, input_item_sub_x) => _text($scope.c, input_item_sub_x);
const $input_item$1 = ($scope, input_item) => {
	$input_item_foo($scope, input_item?.foo);
	$input_item_n($scope, input_item?.n);
	$input_item_sub($scope, input_item?.sub);
};
const $input_item_sub = ($scope, input_item_sub) => $input_item_sub_x($scope, input_item_sub?.x);

// tags/child-rest/index.marko
const $foo = ($scope, foo) => _text($scope.a, foo);
const $rest = ($scope, rest) => _text($scope.b, JSON.stringify(rest));
const $item2 = ($scope, $item) => {
	(({ foo, ...rest }) => $rest($scope, rest))($item);
	$foo($scope, $item.foo);
};

// tags/child-for/index.marko
const $for_content__item_foo = ($scope, item_foo) => _text($scope.a, item_foo);
const $for_content__item_sub_x = ($scope, item_sub_x) => _text($scope.b, item_sub_x);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_foo($scope, $params2[0]?.foo);
	$for_content__item_sub_x($scope, $params2[0]?.sub?.x);
};
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<span><!> <!></span>", "D%c%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $n = /*@__PURE__*/ _let(4, ($scope) => {
	let $sub;
	if ($scope.e > 1) $sub = attrTag({ x: $scope.e });
	let $sub2;
	if ($scope.e > 1) $sub2 = attrTag({ x: $scope.e });
	$input_item$1($scope.a, attrTags(attrTag({
		foo: "first",
		n: $scope.e,
		sub: $sub
	}), {
		foo: "second",
		n: 2,
		sub: $sub2
	}));
	$item2($scope.b, attrTags(attrTag({
		foo: "first",
		n: $scope.e
	}), {
		foo: "second",
		n: 2
	}));
	let $sub3;
	if ($scope.e > 1) $sub3 = attrTag({ x: $scope.e });
	let $sub4;
	if ($scope.e > 1) $sub4 = attrTag({ x: $scope.e });
	$input_item($scope.c, attrTags(attrTag({
		foo: "first",
		sub: $sub3
	}), {
		foo: "second",
		sub: $sub4
	}));
});
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$n($scope, +$scope.e + 1);
}));
