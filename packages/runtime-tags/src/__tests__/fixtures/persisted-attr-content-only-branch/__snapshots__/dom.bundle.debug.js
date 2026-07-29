// template.marko.persisted.mjs
const $Panel_content__walks = " Db%l", $Panel_content__template = "<button class=hit>hits <!></button>", $if_content__walks = " b", $if_content__template = "<div class=host></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__Panel = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_attr_content($scope, "#div/0", $scope._.Panel);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__Panel._($scope);
};
const $Panel_content__hits = _var_resume("__tests__/template.marko_1_hits/var", /*@__PURE__*/ _let_persisted("hits/2", ($scope) => _text($scope["#text/1"], $scope.hits)));
const $Panel_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$Panel_content__hits($scope, $scope.hits + 1);
}));
const $Panel_content__setup = ($scope) => {
	$Panel_content__hits($scope, 0);
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup);
const $Panel = /*@__PURE__*/ _const_persisted("Panel");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_2_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_2_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_update": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_1_content": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $hits_seed = _update_signal("__tests__/template.marko_1_hits/var");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__construct = ($scope) => {
	_construct_attr_content($scope, "ConditionalRenderer:#div/0", "BranchScopes:#div/0");
};
const $Panel_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.hits);
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("hits" in $patch) _update_seed($live, $hits_seed, $patch["hits"]);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("Panel" in $patch) $live["Panel"] = $patch["Panel"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", 0, ["__tests__/template.marko_2_update"]);
};
_construct("__tests__/template.marko_2_update", $if_content__construct);
_construct("__tests__/template.marko_1_update", $Panel_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_content", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__Panel = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_attr_content($scope, "#div/0", $scope._.Panel);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__Panel._($scope);
};
const $Panel_content__hits = /*@__PURE__*/ _let_persisted("hits/2", ($scope) => _text($scope["#text/1"], $scope.hits));
const $Panel_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Panel_content__hits($scope, $scope.hits + 1);
}));
const $Panel_content__setup = ($scope) => {
	$Panel_content__hits($scope, 0);
	$Panel_content__setup__script($scope);
};
const $Panel_content = _content_resume("__tests__/template.marko_1_content", "<button class=hit>hits <!></button>", " Db%", $Panel_content__setup);
const $Panel = /*@__PURE__*/ _const_persisted("Panel");
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<div class=host></div>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
