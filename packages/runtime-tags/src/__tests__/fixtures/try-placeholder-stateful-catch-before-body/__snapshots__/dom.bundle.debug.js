// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__attempt = /*@__PURE__*/ _closure_get("attempt", ($scope) => $try_content__await_promise($scope, $scope._.attempt === 1 ? resolveAfter("body", 3) : Promise.reject(new Error("nope"))));
const $try_content__setup = ($scope) => {
	$try_content__attempt($scope);
	$await_content($scope);
};
const $placeholder_content__attempt = /*@__PURE__*/ _closure_get("attempt", ($scope) => _text($scope["#text/1"], $scope._.attempt));
const $placeholder_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			console.log("placeholder mounted");
		},
		onDestroy: function() {
			console.log("placeholder destroyed");
		}
	});
	_on($scope["#button/0"], "click", function() {
		$attempt($scope._, +$scope._.attempt + 1);
	});
});
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__attempt($scope);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content_resume("__tests__/template.marko_1*content", "<button>retry <!></button>", " Db%", $placeholder_content__setup);
const $attempt__closure = /*@__PURE__*/ _closure($placeholder_content__attempt, $try_content__attempt);
const $attempt = /*@__PURE__*/ _let("attempt/1", $attempt__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$attempt($scope, 1);
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
