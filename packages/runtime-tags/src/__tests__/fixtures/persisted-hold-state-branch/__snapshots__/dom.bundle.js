// template.marko.persisted.mjs
const $for_content__walks = "E l D l%l", $for_content__template = "<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", $if_content__walks = "b%b b", $if_content__template = "<!><!><ol class=replies></ol>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=note> </p>";
const $template = "<button class=count>clicked <!></button><ul class=threads></ul>";
const $walks = " Db%l b";
_enable_catch();
const $for_content2__reply_text = ($scope, reply_text) => _text($scope.a, reply_text);
const $for_content2__$params = ($scope, $params4) => $for_content2__reply_text($scope, $params4[0]?.text);
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params3) => $await_content__note($scope, $params3[0]);
const $placeholder_content = /*@__PURE__*/ _content("a3", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content(0, $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__thread_note = /*@__PURE__*/ _closure_get(10, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.h, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__thread_note($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=reply> </li>", "D ", 0, $for_content2__$params);
const $if_content__thread_replies = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $if_content__for($scope, [$scope._.i, function(reply) {
	return reply.id;
}]));
const $if_content__try = /*@__PURE__*/ _try(0, $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__thread_replies._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $for_content__if = /*@__PURE__*/ _if(3, $if_content__template, $if_content__walks, $if_content__setup);
const $for_content__collapsed = _var_resume("a14", /*@__PURE__*/ _let_persisted(9, ($scope) => {
	_text($scope.c, $scope.j ? "expand" : "collapse");
	$for_content__if($scope, !$scope.j ? 0 : 1);
}));
const $for_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content__collapsed($scope, !$scope.j);
}));
const $count = _var_resume("a15", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a2": [$await_content__template, $await_content__walks],
	"a11": [$await_content__template, $await_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a4": [$try_content__template, $try_content__walks],
	"a7": [$if_content__template, $if_content__walks],
	"a12": [$if_content__template, $if_content__walks],
	"a9": [$for_content__template, $for_content__walks],
	"a13": [$for_content__template, $for_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $collapsed_seed = _update_signal("a14");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $count_seed = _update_signal("a15");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a9");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $if_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a5", "a3");
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
	if ("Dd" in $scope) _update_if($scope, $scope, "Dd", "Ad", [$if_content__update], ["a7"]);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $collapsed_seed, $patch["j"]);
	if ("h" in $patch) {
		$live["h"] = $patch["h"];
		_closure($try_content__thread_note)($live);
	}
	if ("i" in $patch) {
		$live["i"] = $patch["i"];
		$if_content__thread_replies($live);
	}
	$for_content_holes($patch, $live);
	if ("Ad" in $patch) _update_if_state($patch, $live, "Dd", "Ad", [$if_content__update]);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
_construct("a9", $for_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a16", $noop_update);
_update_content("a2", $await_content_holes);
_update_content("a3", $noop_update);
_update_content("a5", $try_content__update);
_update_content("a7", $if_content__update);
_update_content("a9", $for_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $for_content2__reply_text = ($scope, reply_text) => _text($scope.a, reply_text);
const $for_content2__$params = ($scope, $params4) => $for_content2__reply_text($scope, $params4[0]?.text);
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params3) => $await_content__note($scope, $params3[0]);
const $placeholder_content = _content_resume("a3", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=note> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__thread_note = /*@__PURE__*/ _closure_get(10, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.h, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__thread_note($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=reply> </li>", "D ", 0, $for_content2__$params);
const $if_content__thread_replies = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $if_content__for($scope, [$scope._.i, function(reply) {
	return reply.id;
}]));
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__thread_replies._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $for_content__if = /*@__PURE__*/ _if(3, "<!><!><ol class=replies></ol>", "b%b ", $if_content__setup);
const $for_content__collapsed = /*@__PURE__*/ _let_persisted(9, ($scope) => {
	_text($scope.c, $scope.j ? "expand" : "collapse");
	$for_content__if($scope, !$scope.j ? 0 : 1);
});
const $for_content__setup__script = _script_update("a8", ($scope) => _on($scope.b, "click", function() {
	$for_content__collapsed($scope, !$scope.j);
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
