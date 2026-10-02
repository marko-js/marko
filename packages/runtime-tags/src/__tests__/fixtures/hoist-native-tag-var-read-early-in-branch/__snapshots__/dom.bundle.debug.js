// template.marko
const $template = "<!><!><div></div>";
const $walks = "b%b b";
const $setup = () => {};
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	_el_read($scope._["#div/1"]).textContent = "clicked";
}));
const $if_content__setup = $if_content__setup__script;
const $if = /*@__PURE__*/ _if("#text/0", "<button>focus</button>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
