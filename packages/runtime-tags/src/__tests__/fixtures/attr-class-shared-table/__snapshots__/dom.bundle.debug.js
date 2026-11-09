// template.marko
const $template = "<div></div><span></span><p></p><!><em class=x></em><b class=x></b>";
const $walks = " b b b%b b b";
const $for_content__input_a__OR__input_b = /*@__PURE__*/ _or(1, ($scope) => _attr_class_items($scope["#li/0"], {
	on: $scope._.a,
	off: $scope._.b
}));
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/3", $for_content__input_a__OR__input_b, 11);
const $for_content__setup = ($scope) => {
	$for_content__input_a._($scope);
	$for_content__input_b._($scope);
};
const $for_content__input_b = /*@__PURE__*/ _for_closure("#text/3", $for_content__input_a__OR__input_b, 12);
const $input_a__OR__input_b = /*@__PURE__*/ _or(10, ($scope) => {
	_attr_class_items($scope["#div/0"], {
		on: $scope.a,
		off: $scope.b
	});
	_attr_class_items($scope["#span/1"], {
		on: $scope.a,
		off: $scope.b
	});
	_attr_class_items($scope["#p/2"], {
		on: $scope.b,
		off: $scope.a
	});
	_attr_class_items($scope["#em/4"], {
		on: $scope.a,
		off: $scope.b
	});
	_attr_class_items($scope["#b/5"], {
		on: $scope.b,
		off: $scope.a
	});
});
const $a = /*@__PURE__*/ _const("a", ($scope) => {
	$input_a__OR__input_b($scope);
	$for_content__input_a($scope);
});
const $b = /*@__PURE__*/ _const("b", ($scope) => {
	$input_a__OR__input_b($scope);
	$for_content__input_b($scope);
});
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/3", "<li></li>", " ", $for_content__setup);
function $setup($scope) {
	$for($scope, [[1, 2]]);
}
const $input = ($scope, input) => {
	$a($scope, input.a);
	$b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
