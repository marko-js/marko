// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", " ", " ", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("caught"), 1));
};
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content__promise__script = _script("__tests__/template.marko_2_promise#0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.promise;
})());
const $placeholder_content__promise = /*@__PURE__*/ _const("promise", $placeholder_content__promise__script);
const $placeholder_content__setup = ($scope) => $placeholder_content__promise($scope, resolveAfter("hello", 2));
const $placeholder_content = _content("__tests__/template.marko_2*content", "<div id=ref>0</div>", 0, $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 3));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try2($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
