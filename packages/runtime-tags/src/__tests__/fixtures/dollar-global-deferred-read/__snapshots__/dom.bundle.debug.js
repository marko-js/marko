// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<div>caught: <!></div>", "Db%", 0, $catch_content__err);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__v);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, $scope.$global.slow.then(() => $scope.$global.fast));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
