// template.marko.persisted.mjs
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
const $await_content__for = 0;
const $await_content__related = ($scope, related) => {
	if (!updating) $await_content__for($scope, [related, function(item) {
		return item.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__related($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "loading related…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul></ul>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_related = /*@__PURE__*/ _closure_get("input_related", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_related, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_related($scope);
	$await_content($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count)));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$await_content2($scope);
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $await_content2 = /*@__PURE__*/ _await_content("#text/4", "<em> </em>", "D l");
const $await_promise = /*@__PURE__*/ _await_promise("#text/4", $await_content2__$params);
const $input_note = ($scope, input_note) => {
	if (!updating) $await_promise($scope, resolveAfter(input_note, 2));
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_related($scope, input.related);
	$input_note($scope, input.note);
};
const $input_related__closure = /*@__PURE__*/ _closure($try_content__input_related);
const $input_related = /*@__PURE__*/ _const_persisted("input_related", $input_related__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content_holes($p, $l), "__tests__/template.marko_4_update");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $await_content__update = ($patch, $live) => {
	if ("BranchScopes:#ul/0" in $patch) $for_update($live, [$patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_3_update");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	$_holes($patch, $live);
	if ("BranchScopes:#text/3" in $patch) _update_branch($patch, $live, "#text/3", $try_content__update, "__tests__/template.marko_1_update", "__tests__/template.marko_2_content");
	if ("BranchScopes:#text/4" in $patch) _update_branch($patch, $live, "#text/4", $await_content2_holes, "__tests__/template.marko_5_update");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

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
const $await_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> costs <!></li>", "D%c%l", 0, $for_content__$params);
const $await_content__related = ($scope, related) => {
	if (!updating) $await_content__for($scope, [related, function(item) {
		return item.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__related($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading related…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<ul></ul>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_related = /*@__PURE__*/ _closure_get("input_related", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_related, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_related($scope);
	$await_content($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
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
const $await_content2 = /*@__PURE__*/ _await_content("#text/4", "<em> </em>", "D l");
const $await_promise = /*@__PURE__*/ _await_promise("#text/4", $await_content2__$params);
const $input_note = ($scope, input_note) => {
	if (!updating) $await_promise($scope, resolveAfter(input_note, 2));
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_related($scope, input.related);
	$input_note($scope, input.note);
};
const $input_related__closure = /*@__PURE__*/ _closure($try_content__input_related);
const $input_related = /*@__PURE__*/ _const_persisted("input_related", $input_related__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
