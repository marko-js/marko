// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_selected = _write_guard($scope0_reason, 0), $wi__input_selected = _write_if($scope0_reason, 0), $fg__input_selected = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html("<main><ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id)}`);
		_if(() => {
			if (input.selected === item.id) {
				const $scope2_id = _scope_id();
				_html("<span>*</span>");
				$wi__input_selected && _scope($scope2_id, {}, "__tests__/template.marko", "5:22");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__input_selected, $wg__input_selected, 0, 0, 1);
		_html("</li>");
		_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_selected#0:4/setup");
		_scope($scope1_id, { "#LoopKey": $wi__input_selected && item?.id }, "__tests__/template.marko", "4:6", { "#LoopKey": ["item.id", "4:10"] });
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_selected && _patch_render($scope0_id, "__tests__/template.marko_1_input_selected#0:4/setup", "input_selected");
	_scope($scope0_id, {
		input_selected: input.selected,
		items
	}, "__tests__/template.marko", 0, {
		input_selected: ["input.selected"],
		items: "1:6"
	}) || $fg__input_selected && _patch_write($scope0_id, "PatchMarkedWrite:input_selected", input.selected, !_server_guard($scope0_reason, 0));
}, 1);
