// template.marko.persisted.mjs
const $if_content__walks = "Db%l%c", $if_content__template = "<h2>Product <!></h2><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $else_content__walks = "b", $else_content__template = "<p>pick a product</p>", $await_content__walks = " b", $await_content__template = "<ul></ul>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content__review_text = ($scope, review_text) => _text($scope["#text/0"], review_text);
const $for_content__review_stars = ($scope, review_stars) => _text($scope["#text/1"], review_stars);
const $for_content__$params = ($scope, $params3) => {
	$for_content__review_text($scope, $params3[0]?.text);
	$for_content__review_stars($scope, $params3[0]?.stars);
};
const $await_content__for = 0;
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews, function(review) {
		return review.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "loading reviews…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_productId = /*@__PURE__*/ _closure_get("input_productId", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, getReviews($scope._._.input_productId));
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
const $if_content__try = /*@__PURE__*/ _try("#text/1", $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_productId._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup, $else_content__template, $else_content__walks);
const $input_productId__closure = /*@__PURE__*/ _closure($try_content__input_productId);
const $input_productId = /*@__PURE__*/ _const_persisted("input_productId", ($scope) => {
	if (!updating) $if($scope, $scope.input_productId ? 0 : 1);
	$if_content__input_productId($scope);
	$input_productId__closure($scope);
});
const $input = ($scope, input) => $input_productId($scope, input.productId);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_5_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_5_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_3_update": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_3_content": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_2_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#ul/0" in $patch) _update_region("#ul/0")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_5_update");
};
const $if_content__construct = ($scope) => {
	_text($scope["#text/0"], $scope._.input_productId);
};
const $if_content__update = ($patch, $live) => {
	$if_content_holes($patch, $live);
	if ("BranchScopes:#text/1" in $patch) _update_branch($patch, $live, "#text/1", $try_content__update, "__tests__/template.marko_2_update", "__tests__/template.marko_4_content");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_productId" in $patch) $live["input_productId"] = $patch["input_productId"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, 0], ["__tests__/template.marko_1_update", "__tests__/template.marko_3_update"]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_6_update", $noop_update);
_update_content("__tests__/template.marko_5_update", $await_content__update);
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_update", $try_content__update);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
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
const $await_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> rated <!></li>", "D%c%", 0, $for_content__$params);
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews, function(review) {
		return review.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading reviews…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul></ul>", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_productId = /*@__PURE__*/ _closure_get("input_productId", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, getReviews($scope._._.input_productId));
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
const $if_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
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
const $if = /*@__PURE__*/ _if("#text/2", "<h2>Product <!></h2><!><!>", "Db%l%", $if_content__setup, "<p>pick a product</p>");
const $input_productId__closure = /*@__PURE__*/ _closure($try_content__input_productId);
const $input_productId = /*@__PURE__*/ _const_persisted("input_productId", ($scope) => {
	if (!updating) $if($scope, $scope.input_productId ? 0 : 1);
	$if_content__input_productId($scope);
	$input_productId__closure($scope);
});
const $input = ($scope, input) => $input_productId($scope, input.productId);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
