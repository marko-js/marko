// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_selected__OR__input_selectedChange = _unfilled_if($scope0_reason, 0), $ui__input_selectedChange = _unfilled_if($scope0_reason, 2), $ui__input_selected = _unfilled_if($scope0_reason, 1), $fg__input_selected = _filled_guard($scope0_reason, 1), $fg__input_selectedChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	let selected = input.selected;
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${selected === row.id ? " class=sel" : ""}>${_escape(row.id)}</li>${_el_mark($scope2_id, "#li/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, { "#LoopKey": row?.id }, "__tests__/template.marko", "5:6", { "#LoopKey": ["row.id", "5:10"] });
			}, "id", $scope1_id, "#ul/0", 1, 1, 1, "</ul>", 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_selected#3_input_selectedChange#4/setup", (($fg__input_selected ? " input_selected" : "") + ($fg__input_selectedChange ? " input_selectedChange" : "")).slice(1), $scope0_reason, 0);
	const $selectedChange = input.selectedChange || void 0;
	_patch_let_change($scope0_id, "PatchFill:__tests__/template.marko_0_selected#8/fill", selected, "PatchWrite:TagVariableChange:selected", $selectedChange, $scope0_reason, 0);
	_scope($scope0_id, {
		input_selected: ($ui__input_selectedChange || $ui__input_selected__OR__input_selectedChange) && input.selected,
		input_selectedChange: ($ui__input_selected || $ui__input_selected__OR__input_selectedChange) && input.selectedChange,
		selected,
		"TagVariableChange:selected": $selectedChange
	}, "__tests__/template.marko", 0, {
		input_selected: ["input.selected"],
		input_selectedChange: ["input.selectedChange"],
		selected: "2:6",
		"TagVariableChange:selected": ["selectedChange", "2:6"]
	}) || ($fg__input_selected && $ui__input_selectedChange && _patch_write($scope0_id, "PatchMarkedWrite:input_selected", input.selected, !_server_guard($scope0_reason, 1)), $fg__input_selectedChange && $ui__input_selected && _patch_write($scope0_id, "PatchMarkedWrite:input_selectedChange", input.selectedChange, !_server_guard($scope0_reason, 2)));
}, 1);
