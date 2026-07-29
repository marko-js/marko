// template.marko.persisted.mjs
const $for_content__walks = "E l D l b l", $for_content__template = "<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", $for_content3__walks = "D b D m", $for_content3__template = "<li class=tag> <button class=star> </button></li>";
const $template = "<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>";
const $walks = " Db%l b b";
const $for_content3__starred = _var_resume("__tests__/template.marko_3_starred/var", /*@__PURE__*/ _let_persisted("starred/5", ($scope) => _text($scope["#text/2"], $scope.starred ? "★" : "☆")));
const $for_content3__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content3__starred($scope, !$scope.starred);
}));
const $for_content3__setup = ($scope) => {
	$for_content3__starred($scope, false);
	$for_content3__setup__script($scope);
};
const $for_content3__tag = ($scope, tag) => _text($scope["#text/0"], tag);
const $for_content3__$params = ($scope, $params4) => $for_content3__tag($scope, $params4[0]);
const $for_content2__reply_text = ($scope, reply_text) => _text($scope["#text/0"], reply_text);
const $for_content2__$params = ($scope, $params3) => $for_content2__reply_text($scope, $params3[0]?.text);
const $for_content__draft = _var_resume("__tests__/template.marko_1_draft/var", /*@__PURE__*/ _let_persisted("draft/9", ($scope) => _attr_input_value($scope, "#input/3", $scope.draft, $valueChange($scope))));
const $for_content__collapsed = _var_resume("__tests__/template.marko_1_collapsed/var", /*@__PURE__*/ _let_persisted("collapsed/10", ($scope) => _text($scope["#text/2"], $scope.collapsed ? "expand" : "collapse")));
const $for_content__setup__script = _script_shared(($scope) => {
	_on($scope["#button/1"], "click", function() {
		$for_content__collapsed($scope, !$scope.collapsed);
	});
	_attr_input_value_script($scope, "#input/3");
});
const $for_content__setup = ($scope) => {
	$for_content__draft($scope, "");
	$for_content__collapsed($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__thread_title = ($scope, thread_title) => _text($scope["#text/0"], thread_title);
const $for_content__for = 0;
const $for_content__thread_replies = ($scope, thread_replies) => {
	if (!updating) $for_content__for($scope, [thread_replies, function(reply) {
		return reply.id;
	}]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__thread_title($scope, $params2[0]?.title);
	$for_content__thread_replies($scope, $params2[0]?.replies);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count)));
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
const $for2 = 0;
const $input_tags = ($scope, input_tags) => {
	if (!updating) $for2($scope, [input_tags]);
};
const $input = ($scope, input) => {
	$input_threads($scope, input.threads);
	$input_tags($scope, input.tags);
};
function $valueChange($scope) {
	return (_new_draft) => {
		$for_content__draft($scope, _new_draft);
	};
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_3_update": [$for_content3__template, $for_content3__walks],
	"__tests__/template.marko_3_content": [$for_content3__template, $for_content3__walks],
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $starred_seed = _update_signal("__tests__/template.marko_3_starred/var");
const $for_content3_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $draft_seed = _update_signal("__tests__/template.marko_1_draft/var");
const $collapsed_seed = _update_signal("__tests__/template.marko_1_collapsed/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_update2 = _update_for_keyed("#ul/3", ($p2, $l2) => $for_content3__update($p2, $l2), "__tests__/template.marko_3_update");
const $for_content3__construct = ($scope) => {
	_construct_effect($scope, $for_content3__setup__script);
};
const $for_content3__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("starred" in $patch) _update_seed($live, $starred_seed, $patch["starred"]);
	$for_content3_holes($patch, $live);
};
const $for_content__construct = ($scope) => {
	_attr_input_value($scope, "#input/3", $scope.draft, $scope["ControlledHandler:#input/3"]);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("draft" in $patch) _update_seed($live, $draft_seed, $patch["draft"]);
	if ("collapsed" in $patch) _update_seed($live, $collapsed_seed, $patch["collapsed"]);
	$for_content_holes($patch, $live);
	if ("ConditionalRenderer:#ol/4" in $patch) _update_region("#ol/4")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#ul/2" in $patch) $for_update($live, [$patch["BranchScopes:#ul/2"], "#LoopKey"]);
	if ("BranchScopes:#ul/3" in $patch) $for_update2($live, [$patch["BranchScopes:#ul/3"], "#LoopKey"]);
};
_construct("__tests__/template.marko_3_update", $for_content3__construct);
_construct("__tests__/template.marko_1_update", $for_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_3_update", $for_content3__update);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>";
const $walks = " Db%l b b";
const $for_content3__starred = /*@__PURE__*/ _let_persisted("starred/5", ($scope) => _text($scope["#text/2"], $scope.starred ? "★" : "☆"));
const $for_content3__setup__script = _script_update("__tests__/template.marko_3", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content3__starred($scope, !$scope.starred);
}));
const $for_content3__setup = ($scope) => {
	$for_content3__starred($scope, false);
	$for_content3__setup__script($scope);
};
const $for_content3__tag = ($scope, tag) => _text($scope["#text/0"], tag);
const $for_content3__$params = ($scope, $params4) => $for_content3__tag($scope, $params4[0]);
const $for_content2__reply_text = ($scope, reply_text) => _text($scope["#text/0"], reply_text);
const $for_content2__$params = ($scope, $params3) => $for_content2__reply_text($scope, $params3[0]?.text);
const $for_content__draft = /*@__PURE__*/ _let_persisted("draft/9", ($scope) => _attr_input_value($scope, "#input/3", $scope.draft, $valueChange($scope)));
const $for_content__collapsed = /*@__PURE__*/ _let_persisted("collapsed/10", ($scope) => _text($scope["#text/2"], $scope.collapsed ? "expand" : "collapse"));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$for_content__collapsed($scope, !$scope.collapsed);
	});
	_attr_input_value_script($scope, "#input/3");
});
const $for_content__setup = ($scope) => {
	$for_content__draft($scope, "");
	$for_content__collapsed($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__thread_title = ($scope, thread_title) => _text($scope["#text/0"], thread_title);
const $for_content__for = /*@__PURE__*/ _for_of("#ol/4", "<li class=reply> </li>", "D ", 0, $for_content2__$params);
const $for_content__thread_replies = ($scope, thread_replies) => {
	if (!updating) $for_content__for($scope, [thread_replies, function(reply) {
		return reply.id;
	}]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__thread_title($scope, $params2[0]?.title);
	$for_content__thread_replies($scope, $params2[0]?.replies);
};
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", "E l D l b ", $for_content__setup, $for_content__$params);
const $input_threads = ($scope, input_threads) => {
	if (!updating) $for($scope, [input_threads, function(thread) {
		return thread.id;
	}]);
};
const $for2 = /*@__PURE__*/ _for_of("#ul/3", "<li class=tag> <button class=star> </button></li>", "D b D ", $for_content3__setup, $for_content3__$params);
const $input_tags = ($scope, input_tags) => {
	if (!updating) $for2($scope, [input_tags]);
};
const $input = ($scope, input) => {
	$input_threads($scope, input.threads);
	$input_tags($scope, input.tags);
};
function $valueChange($scope) {
	return (_new_draft) => {
		$for_content__draft($scope, _new_draft);
	};
}
_resume("__tests__/template.marko_1/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
