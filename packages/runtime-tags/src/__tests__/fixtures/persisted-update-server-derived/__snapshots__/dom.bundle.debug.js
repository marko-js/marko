// template.marko.persisted.mjs
const $if_content__walks = "E lDb%l l", $if_content__template = "<section><h2> </h2><p>costs <!></p><button class=copy>use price</button></section>", $else_content__walks = "b", $else_content__template = "<p>no selection</p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__details = ($scope, details) => {
	$if_content__details_name($scope, details?.name);
	$if_content__details_price($scope, details?.price);
};
const $if_content__input_detailId = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$if_content__details($scope, getDetails($scope._.input_detailId));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_detailId._($scope);
};
const $if_content__details_name = ($scope, details_name) => _text($scope["#text/0"], details_name);
const $if_content__details_price__script = _script_shared(($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope._, $scope.details_price);
}));
const $if_content__details_price = _var_resume("__tests__/template.marko_1_details_price/var", /*@__PURE__*/ _const_persisted("details_price", ($scope) => {
	_text($scope["#text/1"], $scope.details_price);
	$if_content__details_price__script($scope);
}));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup, $else_content__template, $else_content__walks);
const $input_detailId = /*@__PURE__*/ _const_persisted("input_detailId", ($scope) => {
	if (!updating) $if($scope, $scope.input_detailId ? 0 : 1);
	$if_content__input_detailId($scope);
});
const $input = ($scope, input) => $input_detailId($scope, input.detailId);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_2_update": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_2_content": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $details_price_update = _update_signal("__tests__/template.marko_1_details_price/var");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.details_price);
	_construct_effect($scope, $if_content__details_price__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("details_price" in $patch) $details_price_update($live, $patch["details_price"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_detailId" in $patch) $live["input_detailId"] = $patch["input_detailId"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, 0], ["__tests__/template.marko_1_update", "__tests__/template.marko_2_update"]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function getDetails(id) {
	if (typeof window !== "undefined") {
		throw new Error("getDetails is server-only");
	}
	return {
		name: `Part ${id}`,
		price: id * 10
	};
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__details = ($scope, details) => {
	$if_content__details_name($scope, details?.name);
	$if_content__details_price($scope, details?.price);
};
const $if_content__input_detailId = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$if_content__details($scope, getDetails($scope._.input_detailId));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_detailId._($scope);
};
const $if_content__details_name = ($scope, details_name) => _text($scope["#text/0"], details_name);
const $if_content__details_price__script = _script_update("__tests__/template.marko_1_details_price", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope._, $scope.details_price);
}));
const $if_content__details_price = /*@__PURE__*/ _const_persisted("details_price", ($scope) => {
	_text($scope["#text/1"], $scope.details_price);
	$if_content__details_price__script($scope);
});
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<section><h2> </h2><p>costs <!></p><button class=copy>use price</button></section>", "E lDb%l ", $if_content__setup, "<p>no selection</p>");
const $input_detailId = /*@__PURE__*/ _const_persisted("input_detailId", ($scope) => {
	if (!updating) $if($scope, $scope.input_detailId ? 0 : 1);
	$if_content__input_detailId($scope);
});
const $input = ($scope, input) => $input_detailId($scope, input.detailId);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
