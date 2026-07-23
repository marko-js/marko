// template.marko.persisted.mjs
const $template = "<button>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $if_content__input_id = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], have($scope._.input_id));
		$if_content__label($scope, patch$1($scope._.input_id));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_id._($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p><!> / <!></p>", "D%c%l", $if_content__setup, "<p>nothing selected</p>", "b");
const $input_id = /*@__PURE__*/ _const_persisted("input_id", ($scope) => {
	if (!updating) $if($scope, $scope.input_id ? 0 : 1);
	$if_content__input_id($scope);
});
const $input = ($scope, input) => $input_id($scope, input.id);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_id" in $patch) $live["input_id"] = $patch["input_id"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function patch(id) {
	return `server patch ${id}`;
}
function have(id) {
	return `server have ${id}`;
}

// template.marko
const $template = "<button>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $if_content__input_id = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], have($scope._.input_id));
		$if_content__label($scope, patch($scope._.input_id));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_id._($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p><!> / <!></p>", "D%c%l", $if_content__setup, "<p>nothing selected</p>", "b");
const $input_id = /*@__PURE__*/ _const_persisted("input_id", ($scope) => {
	if (!updating) $if($scope, $scope.input_id ? 0 : 1);
	$if_content__input_id($scope);
});
const $input = ($scope, input) => $input_id($scope, input.id);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
