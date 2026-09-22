// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__act = /*@__PURE__*/ _action("act/6", ($scope) => $for_content__act_pending($scope, $scope.act.pending));
const $for_content__act_pending = /*@__PURE__*/ _const("act_pending", ($scope) => _text($scope["#text/2"], $scope.act_pending ? "pending" : "idle"));
const $for_content__item_id = /*@__PURE__*/ _const("item_id", ($scope) => {
	_text($scope["#text/1"], $scope.item_id);
	$for_content__act($scope, $act($scope));
});
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.act();
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#text/0", "<button><!> <!></button>", " D%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
const $act = ($scope) => /*@__PURE__*/ _act(function* () {
	yield resolveAfter($scope.item_id);
}, 1, $scope, $for_content__act);
_resumed["__tests__/template.marko_1/act"] = $act;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
