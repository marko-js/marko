// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a2", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__attempt = /*@__PURE__*/ _closure_get(2, ($scope) => $try_content__await_promise($scope, $scope._.b === 1 ? resolveAfter("body", 3) : Promise.reject(/* @__PURE__ */ new Error("nope"))));
const $placeholder_content__attempt = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.b, $scope._.b));
const $placeholder_content__setup__script = _script("a0", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			console.log("placeholder mounted");
		},
		onDestroy: function() {
			console.log("placeholder destroyed");
		}
	});
	_on($scope.a, "click", function() {
		$attempt($scope._, +$scope._.b + 1);
	});
});
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__attempt($scope);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content_resume("a1", "<button>retry <!></button>", " Db%", $placeholder_content__setup);
const $attempt = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($placeholder_content__attempt, $try_content__attempt));
