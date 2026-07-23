// tags/info-card.marko.persisted.mjs
const $template$1 = "<h3 class=card-title> </h3><p class=card-note> </p>";
const $walks$1 = "D lD l";
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_note$1 = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_note$1($scope, input.note);
};
var info_card_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/info-card.marko", $template$1, $walks$1, $setup$1, $input$1);
const $update2$1 = () => {};
const $merge$1 = _resume("__tests__/tags/info-card.marko_0_update", $update2$1);
_update_content("__tests__/tags/info-card.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_title$1($scope["#childScope/1"], $scope._.input_title);
	}
});
const $if_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_title._($scope);
	if (!updating) $if_content__input_note._($scope);
	if (!updating) $if_content__input_title2._($scope);
	if (!updating) $if_content__input_note2._($scope);
	$if_content__setup__script($scope);
};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_note$1($scope["#childScope/1"], $scope._.input_note);
	}
});
const $if_content__input_title2 = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_title$1($scope["#childScope/3"], $scope._.input_title2);
	}
});
const $if_content__input_note2 = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_note$1($scope["#childScope/3"], $scope._.input_note2);
	}
});
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0, _w1) => `<section class=arrived><button class=inner>inner</button>${_w0}<!>${_w1}<!></section>`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `D b/${_w0}&%b/${_w1}&%l`)($walks$1, $walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_note($scope, input.note);
	$input_title2($scope, input.title2);
	$input_note2($scope, input.note2);
};
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $if_content__input_title);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $if_content__input_note);
const $input_title2 = /*@__PURE__*/ _const_persisted("input_title2", $if_content__input_title2);
const $input_note2 = /*@__PURE__*/ _const_persisted("input_note2", $if_content__input_note2);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
	if ("ConditionalRenderer:#text/4" in $patch) _update_region("#text/4")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_title" in $patch) $live["input_title"] = $patch["input_title"];
	if ("input_note" in $patch) $live["input_note"] = $patch["input_note"];
	if ("input_title2" in $patch) $live["input_title2"] = $patch["input_title2"];
	if ("input_note2" in $patch) $live["input_note2"] = $patch["input_note2"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update], ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/info-card.marko
const $template$1 = "<h3 class=card-title> </h3><p class=card-note> </p>";
const $walks$1 = "D lD l";
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_note$1 = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_note$1($scope, input.note);
};
var info_card_default = /*@__PURE__*/ _template("__tests__/tags/info-card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_title$1($scope["#childScope/1"], $scope._.input_title);
	}
});
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_title._($scope);
	if (!updating) $if_content__input_note._($scope);
	if (!updating) $if_content__input_title2._($scope);
	if (!updating) $if_content__input_note2._($scope);
	$if_content__setup__script($scope);
};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_note$1($scope["#childScope/1"], $scope._.input_note);
	}
});
const $if_content__input_title2 = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_title$1($scope["#childScope/3"], $scope._.input_title2);
	}
});
const $if_content__input_note2 = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		$input_note$1($scope["#childScope/3"], $scope._.input_note2);
	}
});
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0, _w1) => `<section class=arrived><button class=inner>inner</button>${_w0}<!>${_w1}<!></section>`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `D b/${_w0}&%b/${_w1}&%l`)($walks$1, $walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_note($scope, input.note);
	$input_title2($scope, input.title2);
	$input_note2($scope, input.note2);
};
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $if_content__input_title);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $if_content__input_note);
const $input_title2 = /*@__PURE__*/ _const_persisted("input_title2", $if_content__input_title2);
const $input_note2 = /*@__PURE__*/ _const_persisted("input_note2", $if_content__input_note2);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
