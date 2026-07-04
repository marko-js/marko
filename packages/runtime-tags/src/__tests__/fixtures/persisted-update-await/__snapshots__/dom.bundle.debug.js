// template.marko.update.mjs
const $for_update = _update_for("#ul/0", "__tests__/template.marko_4_content/update", (branch, args) => $for_content__update(args[0], branch));
const $await_content2__update = (patch, live) => {
	if ("$params4" in patch) live["$params4"] = patch["$params4"];
	if ("note" in patch) live["note"] = patch["note"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
const $for_content__update = (patch, live) => {
	if ("$params3" in patch) live["$params3"] = patch["$params3"];
	if ("item" in patch) live["item"] = patch["item"];
	if ("item_name" in patch) live["item_name"] = patch["item_name"];
	if ("item_price" in patch) live["item_price"] = patch["item_price"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $await_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("related" in patch) live["related"] = patch["related"];
	if ("BranchScopes:#ul/0" in patch) $for_update(live, [patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", $await_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_title" in patch) live["input_title"] = patch["input_title"];
	if ("input_related" in patch) live["input_related"] = patch["input_related"];
	if ("input_note" in patch) live["input_note"] = patch["input_note"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("BranchScopes:#text/3" in patch) _update_branch(patch, live, "#text/3", $try_content__update);
	if ("BranchScopes:#text/4" in patch) _update_branch(patch, live, "#text/4", $await_content2__update);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<h1> </h1><button>clicked <!></button><section><!></section><footer><!></footer>";
const $walks = "D l Db%lD%lD%l";
_enable_catch();
const $await_content2__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content2__$params = ($scope, $params4) => $await_content2__note($scope, $params4[0]);
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__item_price = ($scope, item_price) => _text($scope["#text/1"], item_price);
const $for_content__$params = ($scope, $params3) => {
	$for_content__item_name($scope, $params3[0]?.name);
	$for_content__item_price($scope, $params3[0]?.price);
};
const $for_content_content = _resume("__tests__/template.marko_4_content/update", [
	"<li><!> costs <!></li>",
	"D%c%l",
	0
]);
const $await_content__for = /* @__PURE__ */ _for_of("#ul/0", $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $await_content__related = ($scope, related) => $await_content__for($scope, [related, function(item) {
	return item.id;
}]);
const $await_content__$params = ($scope, $params2) => $await_content__related($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading related…", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<ul></ul>", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__input_related = /* @__PURE__ */ _closure_get("input_related", ($scope) => {
	if (!_updating()) $try_content__await_promise($scope, resolveAfter($scope._.input_related, 1));
});
const $try_content__setup = ($scope) => {
	if (!_updating()) $try_content__input_related($scope);
	$await_content($scope);
};
const $count = /* @__PURE__ */ _let("count/10", ($scope) => _text($scope["#text/2"], $scope.count));
const $try = /* @__PURE__ */ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$await_content2($scope);
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $await_content2 = /* @__PURE__ */ _await_content("#text/4", "<em> </em>", "D l");
const $await_promise = /* @__PURE__ */ _await_promise("#text/4", $await_content2__$params);
const $input_note = ($scope, input_note) => {
	if (!_updating()) $await_promise($scope, resolveAfter(input_note, 2));
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_related($scope, input.related);
	$input_note($scope, input.note);
};
const $input_related__closure = /* @__PURE__ */ _closure($try_content__input_related);
const $input_related = /* @__PURE__ */ _const("input_related", $input_related__closure);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
