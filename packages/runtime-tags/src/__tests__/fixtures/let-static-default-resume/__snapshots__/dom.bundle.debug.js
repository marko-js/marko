// template.marko
const $template = "<button id=count> </button><button id=label> </button><button id=sum> </button><!><!>";
const $walks = " D l D l D l%c";
const $for_content__item_name__OR__open = /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/2"], ("open" in $scope ? $scope.open : false) && $scope.item_name));
const $for_content__open = /*@__PURE__*/ _let("open/7", $for_content__item_name__OR__open);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__open($scope, !("open" in $scope ? $scope.open : false));
}));
const $for_content__setup = ($scope) => {
	$for_content__open($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/1"], item_id);
const $for_content__item_name = /*@__PURE__*/ _const("item_name", $for_content__item_name__OR__open);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_name($scope, $params2[0]?.name);
};
const $count = /*@__PURE__*/ _let("count/11", ($scope) => _text($scope["#text/1"], $scope.count));
const $label = /*@__PURE__*/ _let("label/12", ($scope) => _text($scope["#text/3"], $scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, ("count" in $scope ? $scope.count : 0) + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$label($scope, ("label" in $scope ? $scope.label : "none") === "none" ? "some" : "none");
	});
	_on($scope["#button/4"], "click", function() {
		$fromInput($scope, $scope.fromInput + ("count" in $scope ? $scope.count : 0));
	});
});
function $setup($scope) {
	$count($scope, 0);
	$label($scope, "none");
	$setup__script($scope);
}
const $fromInput = /*@__PURE__*/ _let("fromInput/13", ($scope) => _text($scope["#text/5"], $scope.fromInput));
const $input_start = $fromInput;
const $for = /*@__PURE__*/ _for_of("#text/6", "<button class=row><!>:<!></button>", " D%c%l", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_start($scope, input.start);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
