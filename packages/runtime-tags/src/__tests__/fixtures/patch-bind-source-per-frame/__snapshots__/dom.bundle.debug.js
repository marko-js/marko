// template.marko
const $template = "<main><!><!><em> </em></main>";
const $walks = "D%b%bD m";
const $await_content2__input_title__OR__handler__script = _script("__tests__/template.marko_2_input_title#0:5_handler#0:9", ($scope) => _attrs_script($scope, "#button/0"));
const $await_content2__input_title__OR__handler = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill1", "handler", /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_title#0:5_handler#0:9/init", 1, ($scope) => {
	$await_content2__input_title__OR__handler__script($scope);
	_attrs($scope, "#button/0", {
		id: "two",
		...{
			title: $scope._.input_title,
			onClick: $scope._.handler
		}
	});
}), "input_title/10", 1), "handler/11", 1);
const $await_content2__input_title = /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_title/10", $await_content2__input_title__OR__handler, 0, "__tests__/template.marko_2_input_title#0:5/subscribe"));
const $await_content2__setup = ($scope) => {
	$await_content2__input_title($scope);
	$await_content2__handler($scope);
};
const $await_content2__handler = /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("handler/11", $await_content2__input_title__OR__handler, 0, "__tests__/template.marko_2_handler#0:9/subscribe"));
const $await_content__input_title__OR__handler__script = _script("__tests__/template.marko_1_input_title#0:5_handler#0:9", ($scope) => _attrs_script($scope, "#button/0"));
const $await_content__input_title__OR__handler = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill1", "handler", /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_title#0:5_handler#0:9/init", 1, ($scope) => {
	$await_content__input_title__OR__handler__script($scope);
	_attrs($scope, "#button/0", {
		id: "one",
		...{
			title: $scope._.input_title,
			onClick: $scope._.handler
		}
	});
}), "input_title/10", 0), "handler/11", 0);
const $await_content__input_title = /*@__PURE__*/ _closure_get("input_title/10", $await_content__input_title__OR__handler, 0, "__tests__/template.marko_1_input_title#0:5/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__input_title($scope);
	$await_content__handler($scope);
};
const $await_content__handler = /*@__PURE__*/ _closure_get("handler/11", $await_content__input_title__OR__handler, 0, "__tests__/template.marko_1_handler#0:9/subscribe");
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/2"], $scope.count));
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$count($scope, 0);
}
const $handler2__closure = /*@__PURE__*/ _closure($await_content__handler, $await_content2__handler);
const $handler2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "handler", $handler2__closure);
const $input_title__closure = /*@__PURE__*/ _closure($await_content__input_title, $await_content2__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", ($scope) => {
	$input_title__closure($scope);
	$handler2($scope, $handler($scope));
}, /*@__PURE__*/ _fill_mark("input_title", $input_title__closure));
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button>one</button>", " ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $input_one = $await_promise;
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<button>two</button>", " ", $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1");
const $input_two = $await_promise2;
const $input = ($scope, input) => {
	$input_one($scope, input.one);
	$input_two($scope, input.two);
	$input_title($scope, input.title);
};
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.input_title;
_bind_resume("__tests__/template.marko_0/handler input_title", $handler);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
