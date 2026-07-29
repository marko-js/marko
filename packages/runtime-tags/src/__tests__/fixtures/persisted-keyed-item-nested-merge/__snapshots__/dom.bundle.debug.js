// template.marko.persisted.mjs
const $for_content__walks = "E l b l", $for_content__template = "<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>";
const $template = "<button class=count>clicked <!></button><ul class=rows></ul>";
const $walks = " Db%l b";
const $for_content2__cell_text = ($scope, cell_text) => _text($scope["#text/0"], cell_text);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell_text($scope, $params3[0]?.text);
const $for_content__note = _var_resume("__tests__/template.marko_1_note/var", /*@__PURE__*/ _let_persisted("note/7", ($scope) => _attr_input_value($scope, "#input/1", $scope.note, $valueChange($scope))));
const $for_content__setup__script = _script_shared(($scope) => _attr_input_value_script($scope, "#input/1"));
const $for_content__setup = ($scope) => {
	$for_content__note($scope, "");
	$for_content__setup__script($scope);
};
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/0"], row_label);
const $for_content__for = 0;
const $for_content__row_cells = ($scope, row_cells) => {
	if (!updating) $for_content__for($scope, [row_cells, (cell) => cell.id]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_label($scope, $params2[0]?.label);
	$for_content__row_cells($scope, $params2[0]?.cells);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_rows = ($scope, input_rows) => {
	if (!updating) $for($scope, [input_rows, (row) => row.id]);
};
const $input = ($scope, input) => $input_rows($scope, input.rows);
function $valueChange($scope) {
	return (_new_note) => {
		$for_content__note($scope, _new_note);
	};
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $note_seed = _update_signal("__tests__/template.marko_1_note/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_content__construct = ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.note, $scope["ControlledHandler:#input/1"]);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("note" in $patch) _update_seed($live, $note_seed, $patch["note"]);
	$for_content_holes($patch, $live);
	if ("ConditionalRenderer:#ol/2" in $patch) _update_region("#ol/2")($patch, $live);
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
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul class=rows></ul>";
const $walks = " Db%l b";
const $for_content2__cell_text = ($scope, cell_text) => _text($scope["#text/0"], cell_text);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell_text($scope, $params3[0]?.text);
const $for_content__note = /*@__PURE__*/ _let_persisted("note/7", ($scope) => _attr_input_value($scope, "#input/1", $scope.note, $valueChange($scope)));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/1"));
const $for_content__setup = ($scope) => {
	$for_content__note($scope, "");
	$for_content__setup__script($scope);
};
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/0"], row_label);
const $for_content__for = /*@__PURE__*/ _for_of("#ol/2", "<li class=cell> </li>", "D ", 0, $for_content2__$params);
const $for_content__row_cells = ($scope, row_cells) => {
	if (!updating) $for_content__for($scope, [row_cells, (cell) => cell.id]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_label($scope, $params2[0]?.label);
	$for_content__row_cells($scope, $params2[0]?.cells);
};
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>", "E l b ", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => {
	if (!updating) $for($scope, [input_rows, (row) => row.id]);
};
const $input = ($scope, input) => $input_rows($scope, input.rows);
function $valueChange($scope) {
	return (_new_note) => {
		$for_content__note($scope, _new_note);
	};
}
_resume("__tests__/template.marko_1/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
