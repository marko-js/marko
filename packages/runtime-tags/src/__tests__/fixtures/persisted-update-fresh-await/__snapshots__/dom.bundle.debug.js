// template.marko.update.mjs
const $for_update = _update_for("#ul/0", "__tests__/template.marko_6_content/update", (branch, args) => $for_content__update(args[0], branch));
const $if_update = _update_signal("__tests__/template.marko_0/update_if_#text/2");
const $for_content__update = (patch, live) => {
	if ("$params3" in patch) live["$params3"] = patch["$params3"];
	if ("review" in patch) live["review"] = patch["review"];
	if ("review_text" in patch) live["review_text"] = patch["review_text"];
	if ("review_stars" in patch) live["review_stars"] = patch["review_stars"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $await_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("reviews" in patch) live["reviews"] = patch["reviews"];
	if ("BranchScopes:#ul/0" in patch) $for_update(live, [patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", $await_content__update);
};
const $if_content__update = (patch, live) => {
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("BranchScopes:#text/1" in patch) _update_branch(patch, live, "#text/1", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_productId" in patch) live["input_productId"] = patch["input_productId"];
	if ("ConditionalRenderer:#text/2" in patch) {
		$if_update(live, patch["ConditionalRenderer:#text/2"]);
		const $patchBranch = patch["BranchScopes:#text/2"], $liveBranch = live["BranchScopes:#text/2"], $branchMerge = [$if_content__update, 0][patch["ConditionalRenderer:#text/2"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// data.js
function getReviews(id) {
	if (typeof window !== "undefined") {
		throw new Error("getReviews is server-only");
	}
	return resolveAfter([{
		id: 1,
		text: `Product ${id} works great`,
		stars: 5
	}, {
		id: 2,
		text: `Product ${id} is okay`,
		stars: 3
	}], 1);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content__review_text = ($scope, review_text) => _text($scope["#text/0"], review_text);
const $for_content__review_stars = ($scope, review_stars) => _text($scope["#text/1"], review_stars);
const $for_content__$params = ($scope, $params3) => {
	$for_content__review_text($scope, $params3[0]?.text);
	$for_content__review_stars($scope, $params3[0]?.stars);
};
const $for_content_content = _resume("__tests__/template.marko_6_content/update", [
	"<li><!> rated <!></li>",
	"D%c%l",
	0
]);
const $await_content__for = /* @__PURE__ */ _for_of("#ul/0", $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $await_content__reviews = ($scope, reviews) => $await_content__for($scope, [reviews, function(review) {
	return review.id;
}]);
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading reviews…", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<ul></ul>", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__input_productId = /* @__PURE__ */ _closure_get("input_productId", ($scope) => {
	if (!_updating()) $try_content__await_promise($scope, getReviews($scope._._.input_productId));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_productId($scope);
	$await_content($scope);
};
const $if_content__input_productId = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_productId));
const $if_content__try = /* @__PURE__ */ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_productId._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $count = /* @__PURE__ */ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = _var_resume("__tests__/template.marko_0/update_if_#text/2", /* @__PURE__ */ _if("#text/2", "<h2>Product <!></h2><!><!>", "Db%l%c", $if_content__setup, "<p>pick a product</p>", "b"));
const $input_productId__closure = /* @__PURE__ */ _closure($try_content__input_productId);
const $input_productId = /* @__PURE__ */ _const("input_productId", ($scope) => {
	$if($scope, $scope.input_productId ? 0 : 1);
	$if_content__input_productId($scope);
	$input_productId__closure($scope);
});
const $input = ($scope, input) => $input_productId($scope, input.productId);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
