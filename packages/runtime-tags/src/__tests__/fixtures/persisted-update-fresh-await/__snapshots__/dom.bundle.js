// data.js
function getReviews(id) {
	if (typeof window !== "undefined") throw new Error("getReviews is server-only");
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
_enable_catch();
const $for_content__review_text = ($scope, review_text) => _text($scope.a, review_text);
const $for_content__review_stars = ($scope, review_stars) => _text($scope.b, review_stars);
const $for_content__$params = ($scope, $params3) => {
	$for_content__review_text($scope, $params3[0]?.text);
	$for_content__review_stars($scope, $params3[0]?.stars);
};
const $for_content_content = _resume("a0", [
	"<li><!> rated <!></li>",
	"D%c%l",
	0
]);
const $await_content__for = /* @__PURE__ */ _for_of(0, $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $await_content__reviews = ($scope, reviews) => $await_content__for($scope, [reviews, function(review) {
	return review.id;
}]);
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = _content_resume("a3", "loading reviews…", "b");
const $await_content = /* @__PURE__ */ _await_content(0, "<ul></ul>", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $try_content__input_productId = /* @__PURE__ */ _closure_get(5, ($scope) => {
	if (!_updating()) $try_content__await_promise($scope, getReviews($scope._._.f));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!_updating()) $try_content__input_productId($scope);
	$await_content($scope);
};
const $if_content__input_productId = /* @__PURE__ */ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content__try = /* @__PURE__ */ _try(1, "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => {
	if (!_updating()) $if_content__input_productId._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $if = _var_resume("a1", /* @__PURE__ */ _if(2, "<h2>Product <!></h2><!><!>", "Db%l%c", $if_content__setup, "<p>pick a product</p>", "b"));

// template.marko.update.mjs
const $for_update = _update_for(0, "a0", (branch, args) => $for_content__update(args[0], branch));
const $if_update = _update_signal("a1");
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $await_content__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $if_content__update = (patch, live) => {
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("Ab" in patch) _update_branch(patch, live, "b", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) {
		$if_update(live, patch["Dc"]);
		const $patchBranch = patch["Ac"], $liveBranch = _update_flush_fresh(live["Ac"]), $branchMerge = [$if_content__update, 0][patch["Dc"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a2", $update);
