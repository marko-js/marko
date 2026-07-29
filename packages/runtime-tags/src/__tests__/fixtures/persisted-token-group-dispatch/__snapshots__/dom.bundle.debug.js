// template.marko.persisted.mjs
const $if_content__walks = " Db%lD l", $if_content__template = "<button class=tap>tap <!></button><p class=info> </p>", $if_content2__walks = " Db%lD l", $if_content2__template = "<button class=bump>bump <!></button><span class=badge> </span>";
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $if_content2__tag = ($scope, tag) => _text($scope["#text/2"], tag);
const $if_content2__input_badge = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => {
	if (!updating) {
		$if_content2__tag($scope, $scope._.input_badge.toLowerCase());
	}
});
const $if_content2__m = _var_resume("__tests__/template.marko_2_m/var", /*@__PURE__*/ _let_persisted("m/3", ($scope) => _text($scope["#text/1"], $scope.m)));
const $if_content2__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$if_content2__m($scope, $scope.m + 1);
}));
const $if_content2__setup = ($scope) => {
	if (!updating) $if_content2__input_badge._($scope);
	$if_content2__m($scope, 0);
	$if_content2__setup__script($scope);
};
const $if_content__line = ($scope, line) => _text($scope["#text/2"], line);
const $if_content__input_name__OR__input_price = /*@__PURE__*/ _or(5, ($scope) => {
	if (!updating) $if_content__line($scope, `${$scope._.input_name}/${$scope._.input_price}`);
});
const $if_content__input_name = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) $if_content__input_name__OR__input_price($scope);
});
const $if_content__n = _var_resume("__tests__/template.marko_1_n/var", /*@__PURE__*/ _let_persisted("n/3", ($scope) => _text($scope["#text/1"], $scope.n)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, $scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_name._($scope);
	if (!updating) $if_content__input_price._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $if_content__input_price = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) $if_content__input_name__OR__input_price($scope);
});
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $input_a = ($scope, input_a) => {
	if (!updating) $if($scope, input_a ? 0 : 1);
};
const $if2 = /*@__PURE__*/ _if("#text/3", $if_content2__template, $if_content2__walks, $if_content2__setup);
const $input_b = ($scope, input_b) => {
	if (!updating) $if2($scope, input_b ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_name($scope, input.name);
	$input_price($scope, input.price);
	$input_b($scope, input.b);
	$input_badge($scope, input.badge);
};
const $input_name = /*@__PURE__*/ _const_persisted("input_name", $if_content__input_name);
const $input_price = /*@__PURE__*/ _const_persisted("input_price", $if_content__input_price);
const $input_badge = /*@__PURE__*/ _const_persisted("input_badge", $if_content2__input_badge);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_2_update": [$if_content2__template, $if_content2__walks],
	"__tests__/template.marko_2_content": [$if_content2__template, $if_content2__walks],
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $m_seed = _update_signal("__tests__/template.marko_2_m/var");
const $if_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $n_seed = _update_signal("__tests__/template.marko_1_n/var");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content2__construct = ($scope) => {
	_text($scope["#text/1"], $scope.m);
	_construct_effect($scope, $if_content2__setup__script);
};
const $if_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("m" in $patch) _update_seed($live, $m_seed, $patch["m"]);
	$if_content2_holes($patch, $live);
};
const $if_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_name" in $patch) $live["input_name"] = $patch["input_name"];
	if ("input_price" in $patch) $live["input_price"] = $patch["input_price"];
	if ("input_badge" in $patch) $live["input_badge"] = $patch["input_badge"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update], ["__tests__/template.marko_1_update"]);
	if ("ConditionalRenderer:#text/3" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [$if_content2__update], ["__tests__/template.marko_2_update"]);
};
_construct("__tests__/template.marko_2_update", $if_content2__construct);
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_2_update", $if_content2__update);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $if_content2__tag = ($scope, tag) => _text($scope["#text/2"], tag);
const $if_content2__input_badge = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => {
	if (!updating) {
		$if_content2__tag($scope, $scope._.input_badge.toLowerCase());
	}
});
const $if_content2__m = /*@__PURE__*/ _let_persisted("m/3", ($scope) => _text($scope["#text/1"], $scope.m));
const $if_content2__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content2__m($scope, $scope.m + 1);
}));
const $if_content2__setup = ($scope) => {
	if (!updating) $if_content2__input_badge._($scope);
	$if_content2__m($scope, 0);
	$if_content2__setup__script($scope);
};
const $if_content__line = ($scope, line) => _text($scope["#text/2"], line);
const $if_content__input_name__OR__input_price = /*@__PURE__*/ _or(5, ($scope) => {
	if (!updating) $if_content__line($scope, `${$scope._.input_name}/${$scope._.input_price}`);
});
const $if_content__input_name = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) $if_content__input_name__OR__input_price($scope);
});
const $if_content__n = /*@__PURE__*/ _let_persisted("n/3", ($scope) => _text($scope["#text/1"], $scope.n));
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, $scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_name._($scope);
	if (!updating) $if_content__input_price._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $if_content__input_price = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) $if_content__input_name__OR__input_price($scope);
});
const $count = /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<button class=tap>tap <!></button><p class=info> </p>", " Db%lD ", $if_content__setup);
const $input_a = ($scope, input_a) => {
	if (!updating) $if($scope, input_a ? 0 : 1);
};
const $if2 = /*@__PURE__*/ _if("#text/3", "<button class=bump>bump <!></button><span class=badge> </span>", " Db%lD ", $if_content2__setup);
const $input_b = ($scope, input_b) => {
	if (!updating) $if2($scope, input_b ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_name($scope, input.name);
	$input_price($scope, input.price);
	$input_b($scope, input.b);
	$input_badge($scope, input.badge);
};
const $input_name = /*@__PURE__*/ _const_persisted("input_name", $if_content__input_name);
const $input_price = /*@__PURE__*/ _const_persisted("input_price", $if_content__input_price);
const $input_badge = /*@__PURE__*/ _const_persisted("input_badge", $if_content2__input_badge);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
