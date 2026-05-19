// template.marko
const $template = "<div></div><!><div></div>";
const $walks = " b%b b";
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content__err = ($scope, err) => $catch_content__err_message($scope, err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", " ", " b", 0, $catch_content__$params);
const $try_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _el_read($scope._["#div/0"]).textContent = "This shouldn't happen");
const $try_content__setup = ($scope) => {
	_text($scope["#text/0"], (() => {
		throw new Error("ERROR!");
	})());
	$try_content__setup__script($scope);
};
const $try = /* @__PURE__ */ _try("#text/1", " ", " b", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _el_read($scope["#div/2"]).textContent = "This is good");
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
