// template.marko.update.mjs
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => _update_scope($p, $l));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = (_patch, _live) => {
	if ("BranchScopes:#ul/0" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $try_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", $await_content__update);
};
const $if_content__update = (_patch, _live) => {
	_update_scope(_patch, _live);
	if ("BranchScopes:#text/1" in _patch) _update_branch(_patch, _live, "#text/1", $try_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("input_productId" in _patch) _live["input_productId"] = _patch["input_productId"];
	if ("ConditionalRenderer:#text/2" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, 0]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

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
const $await_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> rated <!></li>", "D%c%l", 0, $for_content__$params);
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews, function(review) {
		return review.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading reviews…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul></ul>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_productId = /*@__PURE__*/ _closure_get("input_productId", ($scope) => {
	if (!updating) {
		if (!updating) $try_content__await_promise($scope, getReviews($scope._._.input_productId));
	}
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_productId($scope);
	$await_content($scope);
};
const $if_content__input_productId = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_productId);
	}
});
const $if_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_productId._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<h2>Product <!></h2><!><!>", "Db%l%c", $if_content__setup, "<p>pick a product</p>", "b");
const $input_productId__closure = /*@__PURE__*/ _closure($try_content__input_productId);
const $input_productId = /*@__PURE__*/ _const_persisted("input_productId", ($scope) => {
	if (!updating) $if($scope, $scope.input_productId ? 0 : 1);
	$if_content__input_productId($scope);
	$input_productId__closure($scope);
});
const $input = ($scope, input) => $input_productId($scope, input.productId);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
