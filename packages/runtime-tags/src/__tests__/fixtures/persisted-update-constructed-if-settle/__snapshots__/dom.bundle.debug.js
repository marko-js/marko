// template.marko.persisted.mjs
const $else_content__walks = "b%bD%l", $else_content__template = "<!><!><section><!></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "Db%l", $await_content__template = "<p>extras for <!></p>", $if_content2__walks = "b", $if_content2__template = "<p>gone</p>";
const $template = "<h1> </h1><button>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
_enable_catch();
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_7_content", "loading extras…");
const $await_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._._._.input_title);
	}
}, ($scope) => $scope._._._, "__tests__/template.marko_5_input_title/pending");
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__input_title($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks, $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(0, 1));
};
const $else_content2__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._._.input_title);
	}
}, ($scope) => $scope._._);
const $else_content2__setup = ($scope) => {
	if (!updating) $else_content2__input_title($scope);
};
const $if_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._._.input_title);
	}
}, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_title($scope);
};
const $else_content__if = /*@__PURE__*/ _if("#text/0", " 5> <h2>long <!></h2>", "bDb%", $if_content__setup, "<h2>short <!></h2>", "Db%", $else_content2__setup);
const $else_content__input_title_length = /*@__PURE__*/ _if_closure("#text/3", 1, ($scope) => {
	if (!updating) {
		$else_content__if($scope, $scope._.input_title_length ? 0 : 1);
	}
});
const $else_content__try = /*@__PURE__*/ _try("#text/1", $try_content__template, $try_content__walks, $try_content__setup);
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__input_title_length._($scope);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/9", ($scope) => _text($scope["#text/2"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title__closure = /*@__PURE__*/ _closure($if_content__input_title, $else_content2__input_title, $await_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title_length($scope, $scope.input_title?.length);
	$input_title__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", $if_content2__template, $if_content2__walks, 0, $else_content__template, $else_content__walks, $else_content__setup);
const $input_missing = ($scope, input_missing) => {
	if (!updating) $if($scope, input_missing ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_missing($scope, input.missing);
};
const $input_title_length = /*@__PURE__*/ _const_persisted("input_title_length", $else_content__input_title_length);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_6_update": [$if_content2__template, $if_content2__walks],
	"__tests__/template.marko_6_content": [$if_content2__template, $if_content2__walks],
	"__tests__/template.marko_5_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_5_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_4_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_4_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_update": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_1_content": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $await_content__construct = ($scope) => {
	_text($scope["#text/0"], $scope._._._.input_title);
	_construct_closure($scope, $scope._._._, $await_content__input_title);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_5_update");
};
const $else_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch) _update_region("#text/0")($patch, $live);
	if ("BranchScopes:#text/1" in $patch) _update_branch($patch, $live, "#text/1", $try_content__update, "__tests__/template.marko_4_update", "__tests__/template.marko_7_content");
};
const $construct = ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	_text($scope["#text/2"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_title" in $patch) $live["input_title"] = $patch["input_title"];
	if ("input_title_length" in $patch) $live["input_title_length"] = $patch["input_title_length"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [0, $else_content__update], ["__tests__/template.marko_6_update", "__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_5_update", $await_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_7_content", $noop_update);
_update_content("__tests__/template.marko_6_update", $noop_update);
_update_content("__tests__/template.marko_5_update", $await_content_holes);
_update_content("__tests__/template.marko_4_update", $try_content__update);
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $else_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<h1> </h1><button>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_7_content", "loading extras…");
const $await_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._._._.input_title);
	}
}, ($scope) => $scope._._._, "__tests__/template.marko_5_input_title/pending");
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__input_title($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p>extras for <!></p>", "Db%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(0, 1));
};
const $else_content2__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._._.input_title);
	}
}, ($scope) => $scope._._);
const $else_content2__setup = ($scope) => {
	if (!updating) $else_content2__input_title($scope);
};
const $if_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._._.input_title);
	}
}, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_title($scope);
};
const $else_content__if = /*@__PURE__*/ _if("#text/0", " 5> <h2>long <!></h2>", "bDb%", $if_content__setup, "<h2>short <!></h2>", "Db%", $else_content2__setup);
const $else_content__input_title_length = /*@__PURE__*/ _if_closure("#text/3", 1, ($scope) => {
	if (!updating) {
		$else_content__if($scope, $scope._.input_title_length ? 0 : 1);
	}
});
const $else_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__input_title_length._($scope);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $count = /*@__PURE__*/ _let_persisted("count/9", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title__closure = /*@__PURE__*/ _closure($if_content__input_title, $else_content2__input_title, $await_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title_length($scope, $scope.input_title?.length);
	$input_title__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<p>gone</p>", 0, 0, "<!><!><section><!></section>", "b%bD%", $else_content__setup);
const $input_missing = ($scope, input_missing) => {
	if (!updating) $if($scope, input_missing ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_missing($scope, input.missing);
};
const $input_title_length = /*@__PURE__*/ _const_persisted("input_title_length", $else_content__input_title_length);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
