// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params4) => $catch_content__err_message($scope, $params4[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_5*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params5) => $await_content__v($scope, $params5[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!>.<!></em>", "D%c%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__item_promise = /*@__PURE__*/ _closure_get("item_promise", ($scope) => $try_content__await_promise($scope, $scope._.item_promise));
const $try_content__setup = ($scope) => {
	$try_content__item_promise($scope);
	$await_content($scope);
};
const $for_content2__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $for_content2__setup = ($scope) => $for_content2__try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
const $for_content2__$params = ($scope, $params3) => $for_content2__item_promise($scope, $params3[0]?.promise);
const $for_content2__item_promise__closure = /*@__PURE__*/ _closure($try_content__item_promise);
const $for_content2__item_promise = /*@__PURE__*/ _const("item_promise", $for_content2__item_promise__closure);
const $for_content__for = /*@__PURE__*/ _for_of_unkeyed("#section/0", "<!><!><!>", "b%", $for_content2__setup, $for_content2__$params);
const $for_content__group_items = ($scope, group_items) => $for_content__for($scope, [group_items]);
const $for_content__$params = ($scope, $params2) => $for_content__group_items($scope, $params2[0]?.items);
const $for = /*@__PURE__*/ _for_of("#text/0", "<section></section>", " ", 0, $for_content__$params);
const $input_groups = ($scope, input_groups) => $for($scope, [input_groups, "id"]);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_groups($scope, input.groups);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
