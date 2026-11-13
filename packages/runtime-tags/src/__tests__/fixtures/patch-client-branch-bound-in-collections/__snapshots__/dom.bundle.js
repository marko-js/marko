// tags/get.marko
const $template = "<button>map value</button><button>set member</button><button>map key</button>";
const $walks = " b b b";
const $input_m__script = _script_patch("c2 f", ($scope) => _on($scope.a, "click", $scope.f.get("k")));
const $input_m = /*@__PURE__*/ _const(5, $input_m__script);
const $input_s__script = _script_patch("c1 g", ($scope) => _on($scope.b, "click", [...$scope.g][0]));
const $input_s = /*@__PURE__*/ _const(6, $input_s__script);
const $input_k__script = _script_patch("c0 h", ($scope) => _on($scope.c, "click", [...$scope.h.keys()][0]));
const $input_k = /*@__PURE__*/ _const(7, $input_k__script);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__f = ($scope, f) => {
	$input_m($scope.a, /* @__PURE__ */ new Map([["k", f]]));
	$input_s($scope.a, /* @__PURE__ */ new Set([f]));
	$input_k($scope.a, /* @__PURE__ */ new Map([[f, 1]]));
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => $card_content__f($scope, $f($scope)), ($scope) => $scope._._, "a4", 0);
const $card_content = _content$1("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $card_content__input_label);
const $f = ($scope) => function() {
	console.log("fn", $scope._._.e);
};
_bind_resume("a0 >>e", $f);
