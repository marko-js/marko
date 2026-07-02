// tags/inner/index.marko
const $for_content__row_x = ($scope, row_x) => _text($scope.a, row_x);
const $for_content__$params = ($scope, $params2) => $for_content__row_x($scope, $params2[0]?.x);
const $for = /* @__PURE__ */ _for_of(0, "<div>row <!></div>", "Db%l", 0, $for_content__$params);
const $input_stuff_row = ($scope, input_stuff_row) => $for($scope, [input_stuff_row]);
const $input_stuff_other_y = ($scope, input_stuff_other_y) => _text($scope.b, input_stuff_other_y);
const $input_stuff_cond_a = ($scope, input_stuff_cond_a) => _text($scope.c, input_stuff_cond_a);
const $input_stuff = ($scope, input_stuff) => {
	$input_stuff_row($scope, input_stuff?.row);
	$input_stuff_other($scope, input_stuff?.other);
	$input_stuff_cond($scope, input_stuff?.cond);
};
const $input_stuff_other = ($scope, input_stuff_other) => $input_stuff_other_y($scope, input_stuff_other?.y);
const $input_stuff_cond = ($scope, input_stuff_cond) => $input_stuff_cond_a($scope, input_stuff_cond?.a);

// tags/child/index.marko
const $rest = ($scope, rest) => $input_stuff($scope.b, rest);

// template.marko
const $cond = /* @__PURE__ */ _let(2, ($scope) => {
	let $cond;
	if ($scope.c) $cond = attrTag({ a: 1 });
	else $cond = attrTag({ a: 2 });
	$rest($scope.b, {
		row: attrTags(attrTag({ x: 1 }), { x: 2 }),
		other: attrTag({ y: 1 }),
		cond: $cond
	});
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$cond($scope, !$scope.c);
}));
