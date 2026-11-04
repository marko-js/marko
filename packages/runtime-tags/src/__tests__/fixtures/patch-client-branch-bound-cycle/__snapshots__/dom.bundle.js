// tags/get.marko
const $template = "<button>array</button><button>set</button><button>map</button><p> </p>";
const $walks = " b b bD l";
const $input_a_1_1___script = _script_patch("c3 j", ($scope) => _on($scope.a, "click", $scope.j));
const $input_a_1_1_ = /*@__PURE__*/ _const(9, $input_a_1_1___script);
const $input_a__OR__input_s__OR__input_m__script = _script_patch("c0 g k l", ($scope) => {
	{
		const s = [...$scope.k];
		$res($scope, [
			$scope.g[1] === $scope.g,
			typeof $scope.g[1][0],
			s[1] === $scope.k,
			$scope.l.get("self") === $scope.l,
			typeof $scope.l.get("self").get("f")
		].join());
	}
});
const $input_a__OR__input_s__OR__input_m = /*@__PURE__*/ _or_patch("c4", 12, $input_a__OR__input_s__OR__input_m__script, 2);
const $input_s__script = _script_patch("c2 k", ($scope) => _on($scope.b, "click", [...[...$scope.k][1]][0]));
const $input_s = /*@__PURE__*/ _const(10, ($scope) => {
	$input_a__OR__input_s__OR__input_m($scope);
	$input_s__script($scope);
});
const $input_m__script = _script_patch("c1 l", ($scope) => _on($scope.c, "click", $scope.l.get("self").get("f")));
const $input_m = /*@__PURE__*/ _const(11, ($scope) => {
	$input_a__OR__input_s__OR__input_m($scope);
	$input_m__script($scope);
});
const $res = _let(13, ($scope) => _text($scope.d, $scope.n));
function $setup($scope) {
	$res($scope, "");
}
const $input_a = /*@__PURE__*/ _const(6, ($scope) => {
	$input_a_1_1_($scope, $scope.g?.[1]?.[1]?.[0]);
	$input_a__OR__input_s__OR__input_m($scope);
});

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
function mkArray(f) {
	const a = [f];
	a.push(a);
	return a;
}
function mkSet(f) {
	const s = /* @__PURE__ */ new Set([f]);
	s.add(s);
	return s;
}
function mkMap(f) {
	const m = /* @__PURE__ */ new Map([["f", f]]);
	m.set("self", m);
	return m;
}
const $card_content__f = ($scope, f) => {
	$input_a($scope.a, mkArray(f));
	$input_s($scope.a, mkSet(f));
	$input_m($scope.a, mkMap(f));
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => $card_content__f($scope, $f($scope)), ($scope) => $scope._._, "a4", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup($scope.a);
};
const $card_content = _content$1("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $card_content__setup);
const $f = ($scope) => function() {
	console.log("fn", $scope._._.e);
};
_bind_resume("a0 >>e", $f);
