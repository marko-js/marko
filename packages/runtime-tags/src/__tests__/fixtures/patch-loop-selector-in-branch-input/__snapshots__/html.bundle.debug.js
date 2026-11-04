// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_selected = _write_guard($scope0_reason, 0), $fg__input_selected = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li>${_escape(row.id)}${_text_mark($scope2_id, "#text/1", input.selected === row.id ? "*" : "", $wg__input_selected * 2)}</li>`);
				_client_guard($scope0_reason, 0) && _patch_render($scope2_id, "__tests__/template.marko_2_input_selected#0:4/setup");
				_scope($scope2_id, { "#LoopKey": _write_if($scope0_reason, 0) && row?.id }, "__tests__/template.marko", "4:6", { "#LoopKey": ["row.id", "4:10"] });
			}, "id", $scope1_id, "#ul/0", 1, 1, 1, "</ul>", 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_selected && _patch_render($scope0_id, "__tests__/template.marko_1_input_selected#0:4/setup", "input_selected");
	_scope($scope0_id, {
		input_selected: input.selected,
		rows
	}, "__tests__/template.marko", 0, {
		input_selected: ["input.selected"],
		rows: "1:6"
	}) || $fg__input_selected && _patch_write($scope0_id, "PatchMarkedWrite:input_selected", input.selected, !_server_guard($scope0_reason, 0));
}, 1);
