// template.marko
const $List_content__walks = " b b";
const $List_content__template = "<ul></ul><button class=add>+</button>";
_shells({ a: /*@__PURE__*/ (() => `a !a6;${((_w0) => `b/${_w0}& b`)($List_content__walks)};${((_w0) => `<!>${_w0}<button class=toggle>toggle</button>`)($List_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	const List = { content: _content("a1", ({ selected, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let rows = [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 }
		];
		_html("<ul>");
		_for_of(rows, (row) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_escape(row.id)}</li>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_scope($scope2_id, { M: row?.id });
		}, "id", $scope1_id, "a", 1, 1, 1, "</ul>", 1);
		_html(`<button class=add>+</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a2");
		_patch_fill($scope1_id, "va5", rows, 1);
		_scope($scope1_id, {
			e: selected,
			f: flag,
			g: rows
		}) || (_filled_guard($scope1_reason, 1) && _patch_fill($scope1_id, "va3", selected, !_server_guard($scope1_reason, 1)), _filled_guard($scope1_reason, 2) && _patch_fill($scope1_id, "va4", flag, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	List.content({
		selected: input.sel,
		flag: on
	});
	_patch_child_end();
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		f: on,
		a: _existing_scope($childScope)
	});
}, 1);
