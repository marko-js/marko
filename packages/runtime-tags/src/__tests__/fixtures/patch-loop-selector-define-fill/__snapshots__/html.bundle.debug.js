// template.marko
const $List_content__walks = " b b";
const $List_content__template = "<ul></ul><button class=add>+</button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=toggle>toggle</button>`)($List_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($List_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($List_content__walks)};${((_w0) => `<!>${_w0}<button class=toggle>toggle</button>`)($List_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	const List = { content: _content("__tests__/template.marko_1*content", ({ selected, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let rows = [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 }
		];
		_html("<ul>");
		if ($scope0_page) _for_of(rows, (row) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_escape(row.id)}</li>${_el_resume($scope2_id, "#li/0")}`);
			_script($scope2_id, "__tests__/template.marko_2_selected#1:4_flag#1:5");
			_scope($scope2_id, { "#LoopKey": row?.id }, "__tests__/template.marko", "5:6", { "#LoopKey": ["row.id", "5:10"] });
		}, "id", $scope1_id, "#ul/0", 1, 1, 1, "</ul>", 1);
		_html(`<button class=add>+</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", rows, 1);
		_scope($scope1_id, {
			selected,
			flag,
			rows
		}, "__tests__/template.marko", "2:2", {
			selected: "2:16",
			flag: "2:26",
			rows: "3:8"
		}) || (_filled_guard($scope1_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", selected, !_server_guard($scope1_reason, 1)), _filled_guard($scope1_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", flag, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	List.content({
		selected: input.sel,
		flag: on
	});
	_patch_child_end();
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
