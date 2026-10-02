// template.marko
const $template = "<!><!><div> </div>";
const $walks = "b%bD l";
const $if_content__out = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.out));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope._, String($read_getter($scope._)()));
}));
const $if_content__setup = ($scope) => {
	$if_content__out._($scope);
	$if_content__setup__script($scope);
};
const $read_getter = /*@__PURE__*/ _hoist("read");
const $out = /*@__PURE__*/ _let("out/5", $if_content__out);
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
function $setup($scope) {
	$out($scope, "");
	$if($scope, true ? 0 : 1);
}
const $read2 = /*@__PURE__*/ _const("read", ($scope) => {
	_text($scope["#text/1"], $scope.read());
	_assert_hoist($scope.read);
});
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => $read2($scope, $read($scope)));
const $input = ($scope, input) => $input_x($scope, input.x);
const $read = ($scope) => () => $scope.input_x;
_resumed["__tests__/template.marko_0/read"] = $read;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
