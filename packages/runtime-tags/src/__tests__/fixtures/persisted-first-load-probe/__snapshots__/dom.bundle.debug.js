// template.marko.persisted.mjs
const $template = "<h1> </h1><input type=number><button>add <!></button><section><!></section>";
const $walks = "D l b Db%lD%l";
_enable_catch();
const $for_content__rec_name = ($scope, rec_name) => _text($scope["#text/0"], rec_name);
const $for_content__$params = ($scope, $params3) => $for_content__rec_name($scope, $params3[0]?.name);
const $await_content__for = 0;
const $await_content__recs = ($scope, recs) => {
	if (!updating) $await_content__for($scope, [recs, function(rec) {
		return rec.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__recs($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div></div>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_recs = /*@__PURE__*/ _closure_get("input_recs", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_recs, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_recs($scope);
	$await_content($scope);
};
const $qty = _var_resume("__tests__/template.marko_0_qty/var", /*@__PURE__*/ _let_persisted("qty/9", ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.qty, $valueChange($scope));
	_text($scope["#text/3"], $scope.qty);
}));
const $try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_shared(($scope) => {
	_attr_input_value_script($scope, "#input/1");
	_on($scope["#button/2"], "click", function() {
		$qty($scope, $scope.qty + 1);
	});
});
function $setup($scope) {
	$qty($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_recs($scope, input.recs);
};
const $input_recs__closure = /*@__PURE__*/ _closure($try_content__input_recs);
const $input_recs = /*@__PURE__*/ _const_persisted("input_recs", $input_recs__closure);
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, _new_qty);
	};
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#div/0", ($p, $l) => $for_content_holes($p, $l), "__tests__/template.marko_4_update");
const $qty_seed = _update_signal("__tests__/template.marko_0_qty/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $await_content__update = ($patch, $live) => {
	if ("BranchScopes:#div/0" in $patch) $for_update($live, [$patch["BranchScopes:#div/0"], "#LoopKey"]);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_3_update");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("qty" in $patch) _update_seed($live, $qty_seed, $patch["qty"]);
	$_holes($patch, $live);
	if ("BranchScopes:#text/4" in $patch) _update_branch($patch, $live, "#text/4", $try_content__update, "__tests__/template.marko_1_update", "__tests__/template.marko_2_content");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<h1> </h1><input type=number><button>add <!></button><section><!></section>";
const $walks = "D l b Db%lD%l";
_enable_catch();
const $for_content__rec_name = ($scope, rec_name) => _text($scope["#text/0"], rec_name);
const $for_content__$params = ($scope, $params3) => $for_content__rec_name($scope, $params3[0]?.name);
const $await_content__for = /*@__PURE__*/ _for_of("#div/0", "<span> </span>", "D l", 0, $for_content__$params);
const $await_content__recs = ($scope, recs) => {
	if (!updating) $await_content__for($scope, [recs, function(rec) {
		return rec.id;
	}]);
};
const $await_content__$params = ($scope, $params2) => $await_content__recs($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div></div>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_recs = /*@__PURE__*/ _closure_get("input_recs", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_recs, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_recs($scope);
	$await_content($scope);
};
const $qty = /*@__PURE__*/ _let_persisted("qty/9", ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.qty, $valueChange($scope));
	_text($scope["#text/3"], $scope.qty);
});
const $try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/1");
	_on($scope["#button/2"], "click", function() {
		$qty($scope, $scope.qty + 1);
	});
});
function $setup($scope) {
	$qty($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_recs($scope, input.recs);
};
const $input_recs__closure = /*@__PURE__*/ _closure($try_content__input_recs);
const $input_recs = /*@__PURE__*/ _const_persisted("input_recs", $input_recs__closure);
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, _new_qty);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
