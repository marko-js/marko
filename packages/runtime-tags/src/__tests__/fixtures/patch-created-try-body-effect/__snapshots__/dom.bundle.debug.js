// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $placeholder_content = _content("__tests__/template.marko_5*content", "loading");
const $try_content2__setup__script = _script("__tests__/template.marko_4", ($scope) => console.log("placeholder body setup"));
const $try_content2__setup = $try_content2__setup__script;
const $catch_content = _content("__tests__/template.marko_3*content", "failed");
const $try_content__setup__script = _script("__tests__/template.marko_2", ($scope) => console.log("caught body setup"));
const $try_content__setup = $try_content__setup__script;
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<p>caught</p>", 0, $try_content__setup, 0, $catch_content);
const $if_content__try2 = /*@__PURE__*/ _try("#text/1", "<p>placeholder</p>", 0, $try_content2__setup, $placeholder_content);
const $if_content__setup = ($scope) => {
	$if_content__try($scope);
	$if_content__try2($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!><!>", "b%b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
