// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = () => {};
const $if_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$el_getter($scope._)().textContent = "clicked";
}));
const $if_content2__setup = $if_content2__setup__script;
const $el_getter = /*@__PURE__*/ _hoist("#div/0", "BranchScopes:#text/0");
const $if = /*@__PURE__*/ _if("#text/0", "<div>shown</div>", " ");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $if2 = /*@__PURE__*/ _if("#text/1", "<button>click</button>", " ", $if_content2__setup);
const $input_editable = ($scope, input_editable) => $if2($scope, input_editable ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_editable($scope, input.editable);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
