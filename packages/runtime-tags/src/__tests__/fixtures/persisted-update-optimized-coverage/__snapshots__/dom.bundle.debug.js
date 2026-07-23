// template.marko.persisted.mjs
const $Panel_content__walks = "D l", $Panel_content__template = "<p> </p>";
const $template = "<button>count <!></button><div></div>";
const $walks = " Db%l b";
const $inputtag_content__title = /*@__PURE__*/ _closure_get("title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.title);
	}
});
const $inputtag_content__setup = ($scope) => {
	if (!updating) $inputtag_content__title($scope);
};
const $inputtag_content = /*@__PURE__*/ _content("__tests__/template.marko_5_content", " ", " b", $inputtag_content__setup);
const $else_content__input_id = /*@__PURE__*/ _if_closure("#div/2", 2, ($scope) => {
	if (!updating) {
		getTitle($scope._.input_id);
	}
});
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__input_id._($scope);
	$Panel_content__setup._($scope["#childScope/0"], $scope._);
};
const $elseif_content__title__closure = /*@__PURE__*/ _closure($inputtag_content__title);
const $elseif_content__title = /*@__PURE__*/ _const_persisted("title", $elseif_content__title__closure);
const $elseif_content__input_id = /*@__PURE__*/ _if_closure("#div/2", 1, ($scope) => {
	if (!updating) {
		$elseif_content__title($scope, getTitle($scope._.input_id));
	}
});
const $elseif_content__setup = ($scope) => {
	if (!updating) $elseif_content__input_id._($scope);
	if (!updating) $elseif_content__input_tag._($scope);
};
const $elseif_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $elseif_content__input_tag = /*@__PURE__*/ _if_closure("#div/2", 1, ($scope) => {
	if (!updating) {
		$elseif_content__dynamicTag($scope, $scope._.input_tag);
	}
});
const $if_content__title = ($scope, title) => _text($scope["#text/0"], title);
const $if_content__input_id = /*@__PURE__*/ _if_closure("#div/2", 0, ($scope) => {
	if (!updating) {
		$if_content__title($scope, getTitle($scope._.input_id));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_id._($scope);
};
const $Panel_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $Panel_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	if (!updating) $Panel_content__input_title($scope);
});
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/9", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/2", "<h2> </h2>", "D l", $if_content__setup, "<!><!><!>", "b%c", $elseif_content__setup, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $else_content__setup);
const $input_kind = ($scope, input_kind) => {
	if (!updating) $if($scope, input_kind === "native" ? 0 : input_kind === "dynamic" ? 1 : 2);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_kind($scope, input.kind);
	$input_id($scope, input.id);
	$input_tag($scope, input.tag);
};
const $input_title__closure = /*@__PURE__*/ _closure($Panel_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $input_title__closure);
const $input_id = /*@__PURE__*/ _const_persisted("input_id", ($scope) => {
	$if_content__input_id($scope);
	$elseif_content__input_id($scope);
	$else_content__input_id($scope);
});
const $input_tag = /*@__PURE__*/ _const_persisted("input_tag", $elseif_content__input_tag);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $elseif_content__update = ($patch, $live) => {
	if ("title" in $patch) $live["title"] = $patch["title"];
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_id" in $patch) $live["input_id"] = $patch["input_id"];
	if ("input_tag" in $patch) $live["input_tag"] = $patch["input_tag"];
	if ("ConditionalRenderer:#div/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#div/2", "BranchScopes:#div/2", [
		$if_content_holes,
		$elseif_content__update,
		0
	], [
		"__tests__/template.marko_2_update",
		"__tests__/template.marko_3_update",
		"__tests__/template.marko_4_update"
	]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_5_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.ts
function getTitle(id) {
	return `server title ${id}`;
}

// template.marko
const $Panel_content__walks = "D l", $Panel_content__template = "<p> </p>";
const $template = "<button>count <!></button><div></div>";
const $walks = " Db%l b";
const $inputtag_content__title = /*@__PURE__*/ _closure_get("title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.title);
	}
});
const $inputtag_content__setup = ($scope) => {
	if (!updating) $inputtag_content__title($scope);
};
const $inputtag_content = _content_resume("__tests__/template.marko_5_content", " ", " b", $inputtag_content__setup);
const $else_content__input_id = /*@__PURE__*/ _if_closure("#div/2", 2, ($scope) => {
	if (!updating) {
		getTitle($scope._.input_id);
	}
});
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__input_id._($scope);
	$Panel_content__setup._($scope["#childScope/0"], $scope._);
};
const $elseif_content__title__closure = /*@__PURE__*/ _closure($inputtag_content__title);
const $elseif_content__title = /*@__PURE__*/ _const_persisted("title", $elseif_content__title__closure);
const $elseif_content__input_id = /*@__PURE__*/ _if_closure("#div/2", 1, ($scope) => {
	if (!updating) {
		$elseif_content__title($scope, getTitle($scope._.input_id));
	}
});
const $elseif_content__setup = ($scope) => {
	if (!updating) $elseif_content__input_id._($scope);
	if (!updating) $elseif_content__input_tag._($scope);
};
const $elseif_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $elseif_content__input_tag = /*@__PURE__*/ _if_closure("#div/2", 1, ($scope) => {
	if (!updating) {
		$elseif_content__dynamicTag($scope, $scope._.input_tag);
	}
});
const $if_content__title = ($scope, title) => _text($scope["#text/0"], title);
const $if_content__input_id = /*@__PURE__*/ _if_closure("#div/2", 0, ($scope) => {
	if (!updating) {
		$if_content__title($scope, getTitle($scope._.input_id));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_id._($scope);
};
const $Panel_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $Panel_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	if (!updating) $Panel_content__input_title($scope);
});
const $count = /*@__PURE__*/ _let_persisted("count/9", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/2", "<h2> </h2>", "D l", $if_content__setup, "<!><!><!>", "b%c", $elseif_content__setup, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $else_content__setup);
const $input_kind = ($scope, input_kind) => {
	if (!updating) $if($scope, input_kind === "native" ? 0 : input_kind === "dynamic" ? 1 : 2);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_kind($scope, input.kind);
	$input_id($scope, input.id);
	$input_tag($scope, input.tag);
};
const $input_title__closure = /*@__PURE__*/ _closure($Panel_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $input_title__closure);
const $input_id = /*@__PURE__*/ _const_persisted("input_id", ($scope) => {
	$if_content__input_id($scope);
	$elseif_content__input_id($scope);
	$else_content__input_id($scope);
});
const $input_tag = /*@__PURE__*/ _const_persisted("input_tag", $elseif_content__input_tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
