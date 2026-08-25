// template.marko
const $Menu_content__walks = " D l%c", $Menu_content__template = "<button> </button><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Menu_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Menu_content__walks);
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
const $item_content = _content_closures_resume("__tests__/template.marko_4*content", /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<div>person: <!></div>", "Db%"), { person($scope) {
	_text($scope["#text/0"], $scope.person);
} });
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__entry_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params3) => $for_content__entry_content($scope, $params3[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_item = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__for($scope, [$scope._.input_item]));
const $if_content__setup = $if_content__input_item;
const $Menu_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $Menu_content__open = /*@__PURE__*/ _let("open/6", ($scope) => {
	_text($scope["#text/1"], $scope.open ? "collapse" : "expand");
	$Menu_content__if($scope, $scope.open ? 0 : 1);
});
const $Menu_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Menu_content__open($scope, !$scope.open);
}));
const $Menu_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Menu_content__open($scope, true);
	$Menu_content__setup__script($scope);
});
const $Menu_content__tag_input_item = /*@__PURE__*/ _const("input_item", $if_content__input_item);
const $Menu_content__$params = ($scope, $params2) => $Menu_content__input($scope, $params2[0]);
const $Menu_content__input = ($scope, input) => $Menu_content__tag_input_item($scope, input.item);
function $setup($scope) {
	$Menu_content__setup._($scope["#childScope/0"], $scope);
	let $item;
	forOf(PEOPLE, (person) => {
		$item = attrTags($item, {
			value: person,
			content: $item_content($scope, { person })
		});
	});
	$Menu_content__tag_input_item($scope["#childScope/0"], $item);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
