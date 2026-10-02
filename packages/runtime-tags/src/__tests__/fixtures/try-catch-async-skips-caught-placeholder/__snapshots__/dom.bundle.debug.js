// template.marko
const $template = "<button>count <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $await_content3__done = ($scope, done) => _text($scope["#text/0"], done);
const $await_content3__$params = ($scope, $params5) => $await_content3__done($scope, $params5[0]);
const $await_content2__inner = ($scope, inner) => _text($scope["#text/0"], inner);
const $await_content2__$params = ($scope, $params4) => $await_content2__inner($scope, $params4[0]);
const $placeholder_content2__count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $placeholder_content2__setup__script = _script("__tests__/template.marko_7", ($scope) => _on($scope["#button/0"], "click", function() {
	$placeholder_content2__count($scope, +$scope.count + 1);
}));
const $placeholder_content2__setup = ($scope) => {
	$placeholder_content2__count($scope, 0);
	$placeholder_content2__setup__script($scope);
};
const $placeholder_content2 = _content("__tests__/template.marko_7*content", "<button>placeholder <!></button>", " Db%", $placeholder_content2__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content3__setup = ($scope) => {
	$await_content2($scope);
	$try_content3__await_promise($scope, resolveAfter("inner", 3));
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content2);
const $await_content__setup = ($scope) => {
	_text($scope["#text/1"], (() => {
		throw new Error("ERROR!");
	})());
	$await_content__try($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%b%", $await_content__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("outer", 1));
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/3", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content3__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$await_content3($scope);
	$count($scope, 5);
	$try($scope);
	$await_promise($scope, resolveAfter("done", 2));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
