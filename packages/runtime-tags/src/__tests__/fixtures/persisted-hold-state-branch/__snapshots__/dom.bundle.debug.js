// template.marko.persisted.mjs
const $for_content__walks = "E l D l%l", $for_content__template = "<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", $if_content__walks = "b%b b", $if_content__template = "<!><!><ol class=replies></ol>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=note> </p>";
const $template = "<button class=count>clicked <!></button><ul class=threads></ul>";
const $walks = " Db%l b";
_enable_catch();
const $for_content2__reply_text = ($scope, reply_text) => _text($scope["#text/0"], reply_text);
const $for_content2__$params = ($scope, $params4) => $for_content2__reply_text($scope, $params4[0]?.text);
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params3) => $await_content__note($scope, $params3[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__thread_note = /*@__PURE__*/ _closure_get("thread_note", ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.thread_note, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__thread_note($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=reply> </li>", "D ", 0, $for_content2__$params);
const $if_content__thread_replies = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $if_content__for($scope, [$scope._.thread_replies, function(reply) {
	return reply.id;
}]));
const $if_content__try = /*@__PURE__*/ _try("#text/0", $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__thread_replies._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $for_content__if = /*@__PURE__*/ _if("#text/3", $if_content__template, $if_content__walks, $if_content__setup);
const $for_content__collapsed = _var_resume("__tests__/template.marko_1_collapsed/var", /*@__PURE__*/ _let_persisted("collapsed/9", ($scope) => {
	_text($scope["#text/2"], $scope.collapsed ? "expand" : "collapse");
	$for_content__if($scope, !$scope.collapsed ? 0 : 1);
}));
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__collapsed($scope, !$scope.collapsed);
}));
const $for_content__setup = ($scope) => {
	$for_content__collapsed($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__thread_title = ($scope, thread_title) => _text($scope["#text/0"], thread_title);
const $for_content__$params = ($scope, $params2) => {
	$for_content__thread_title($scope, $params2[0]?.title);
	$for_content__thread_note($scope, $params2[0]?.note);
	$for_content__thread_replies($scope, $params2[0]?.replies);
};
const $for_content__thread_note__closure = /*@__PURE__*/ _closure($try_content__thread_note);
const $for_content__thread_note = /*@__PURE__*/ _const_persisted("thread_note", $for_content__thread_note__closure);
const $for_content__thread_replies = /*@__PURE__*/ _const_persisted("thread_replies", $if_content__thread_replies);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_threads = ($scope, input_threads) => {
	if (!updating) $for($scope, [input_threads, function(thread) {
		return thread.id;
	}]);
};
const $input = ($scope, input) => $input_threads($scope, input.threads);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_5_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_5_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_3_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_3_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_2_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $collapsed_seed = _update_signal("__tests__/template.marko_1_collapsed/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_5_update");
};
const $if_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_3_update", "__tests__/template.marko_4_content");
	if ("ConditionalRenderer:#ol/1" in $patch) _update_region("#ol/1")($patch, $live);
};
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
	if ("ConditionalRenderer:#text/3" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [$if_content__update], ["__tests__/template.marko_2_update"]);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("collapsed" in $patch) _update_seed($live, $collapsed_seed, $patch["collapsed"]);
	if ("thread_note" in $patch) {
		$live["thread_note"] = $patch["thread_note"];
		_closure($try_content__thread_note)($live);
	}
	if ("thread_replies" in $patch) {
		$live["thread_replies"] = $patch["thread_replies"];
		$if_content__thread_replies($live);
	}
	$for_content_holes($patch, $live);
	if ("BranchScopes:#text/3" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [$if_content__update]);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#ul/2" in $patch) $for_update($live, [$patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
_construct("__tests__/template.marko_1_update", $for_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_6_update", $noop_update);
_update_content("__tests__/template.marko_5_update", $await_content_holes);
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_3_update", $try_content__update);
_update_content("__tests__/template.marko_2_update", $if_content__update);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul class=threads></ul>";
const $walks = " Db%l b";
_enable_catch();
const $for_content2__reply_text = ($scope, reply_text) => _text($scope["#text/0"], reply_text);
const $for_content2__$params = ($scope, $params4) => $for_content2__reply_text($scope, $params4[0]?.text);
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params3) => $await_content__note($scope, $params3[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=note> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__thread_note = /*@__PURE__*/ _closure_get("thread_note", ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.thread_note, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__thread_note($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=reply> </li>", "D ", 0, $for_content2__$params);
const $if_content__thread_replies = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $if_content__for($scope, [$scope._.thread_replies, function(reply) {
	return reply.id;
}]));
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__thread_replies._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $for_content__if = /*@__PURE__*/ _if("#text/3", "<!><!><ol class=replies></ol>", "b%b ", $if_content__setup);
const $for_content__collapsed = /*@__PURE__*/ _let_persisted("collapsed/9", ($scope) => {
	_text($scope["#text/2"], $scope.collapsed ? "expand" : "collapse");
	$for_content__if($scope, !$scope.collapsed ? 0 : 1);
});
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__collapsed($scope, !$scope.collapsed);
}));
const $for_content__setup = ($scope) => {
	$for_content__collapsed($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__thread_title = ($scope, thread_title) => _text($scope["#text/0"], thread_title);
const $for_content__$params = ($scope, $params2) => {
	$for_content__thread_title($scope, $params2[0]?.title);
	$for_content__thread_note($scope, $params2[0]?.note);
	$for_content__thread_replies($scope, $params2[0]?.replies);
};
const $for_content__thread_note__closure = /*@__PURE__*/ _closure($try_content__thread_note);
const $for_content__thread_note = /*@__PURE__*/ _const_persisted("thread_note", $for_content__thread_note__closure);
const $for_content__thread_replies = /*@__PURE__*/ _const_persisted("thread_replies", $if_content__thread_replies);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", "E l D l%", $for_content__setup, $for_content__$params);
const $input_threads = ($scope, input_threads) => {
	if (!updating) $for($scope, [input_threads, function(thread) {
		return thread.id;
	}]);
};
const $input = ($scope, input) => $input_threads($scope, input.threads);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
