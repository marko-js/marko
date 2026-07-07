// template.marko
const $template = "<button>hide</button><!><!>";
const $walks = " b%c";
const $if_content__message_text = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.message_text));
const $if_content__setup = $if_content__message_text;
const $message = /*@__PURE__*/ _let("message/2", ($scope) => $message_text($scope, $scope.message?.text));
const $message_text = /*@__PURE__*/ _const("message_text", $if_content__message_text);
const $if = /*@__PURE__*/ _if("#text/1", " ", " b", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, null);
	$show($scope, false);
}));
function $setup($scope) {
	$message($scope, { text: "hi" });
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
