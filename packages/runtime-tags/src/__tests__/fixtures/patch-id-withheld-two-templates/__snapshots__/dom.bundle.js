// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(7, ($scope) => $dynamicTag($scope, $scope.h));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $o = _let(8, ($scope) => $dynamicTag2($scope, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
	$o($scope, void 0);
}));

// tags/relay.marko
const $card_content__rid = ($scope, rid) => {
	_attr($scope.a, "id", rid);
	_attr($scope.b, "for", rid);
};
const $card_content__setup = ($scope) => $card_content__rid($scope, _id($scope));
const $card_content = _content$1("c0", "<input><label>relay</label>", " b ", $card_content__setup);

// template.marko
const $relay_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $relay_content__setup = ($scope) => {
	_text($scope.c, $scope._.M);
	$relay_content__uid($scope, _id($scope));
};
const $relay_content = _content$1("a0", "<input><label>p <!></label>", " b Db%", $relay_content__setup);
