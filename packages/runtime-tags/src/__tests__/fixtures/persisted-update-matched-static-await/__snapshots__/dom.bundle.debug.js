// template.marko.persisted.mjs
const $template = "<h1> </h1><button>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
_enable_catch();
const $placeholder_content2 = /*@__PURE__*/ _content("__tests__/template.marko_9_content", "loading reviews…", "b");
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_7_content", "loading deals…", "b");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p><strong>deals never change</strong></p>", "b");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	if (!updating) $try_content2__await_promise($scope, resolveAfter(0, 1));
};
const $for_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._._._._.input_title);
	}
}, ($scope) => $scope._._._._, "__tests__/template.marko_4_input_title/pending");
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__input_title($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $await_content__for = /*@__PURE__*/ _for_to("#text/0", "<em>review <!> of <!></em>", "Db%c%l", $for_content__setup);
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__for($scope, [
		3,
		1,
		1
	]);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(0, 2));
};
const $else_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content2__setup);
const $else_content__try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $else_content__setup = ($scope) => {
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$else_content__try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/2"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title__closure = /*@__PURE__*/ _closure($for_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<p>gone</p>", "b", 0, "<section><!></section><footer><!></footer>", "D%lD%l", $else_content__setup);
const $input_missing = ($scope, input_missing) => {
	if (!updating) $if($scope, input_missing ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_missing($scope, input.missing);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $try_content2__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", 0, "__tests__/template.marko_8_update");
};
const $await_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_for($patch["BranchScopes:#text/0"], $live["BranchScopes:#text/0"], $for_content_holes, $live, "BranchScopes:#text/0", "__tests__/template.marko_4_update");
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_3_update");
};
const $else_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content2__update, "__tests__/template.marko_6_update", "__tests__/template.marko_7_content");
	if ("BranchScopes:#text/1" in $patch) _update_branch($patch, $live, "#text/1", $try_content__update, "__tests__/template.marko_2_update", "__tests__/template.marko_9_content");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_title" in $patch) $live["input_title"] = $patch["input_title"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [0, $else_content__update], ["__tests__/template.marko_5_update", "__tests__/template.marko_1_update"]);
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_9_content", $noop_update);
_update_content("__tests__/template.marko_7_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<h1> </h1><button>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
_enable_catch();
const $placeholder_content2 = _content_resume("__tests__/template.marko_9_content", "loading reviews…", "b");
const $placeholder_content = _content_resume("__tests__/template.marko_7_content", "loading deals…", "b");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p><strong>deals never change</strong></p>", "b");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	if (!updating) $try_content2__await_promise($scope, resolveAfter(0, 1));
};
const $for_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._._._._.input_title);
	}
}, ($scope) => $scope._._._._, "__tests__/template.marko_4_input_title/pending");
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__input_title($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $await_content__for = /*@__PURE__*/ _for_to("#text/0", "<em>review <!> of <!></em>", "Db%c%l", $for_content__setup);
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__for($scope, [
		3,
		1,
		1
	]);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(0, 2));
};
const $else_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content2__setup);
const $else_content__try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $else_content__setup = ($scope) => {
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$else_content__try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title__closure = /*@__PURE__*/ _closure($for_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<p>gone</p>", "b", 0, "<section><!></section><footer><!></footer>", "D%lD%l", $else_content__setup);
const $input_missing = ($scope, input_missing) => {
	if (!updating) $if($scope, input_missing ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_missing($scope, input.missing);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
