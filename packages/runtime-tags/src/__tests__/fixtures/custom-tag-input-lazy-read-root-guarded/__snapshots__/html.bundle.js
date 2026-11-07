// tags/todo-view.marko
var todo_view_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_todo = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let log = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div class=all>${_text_mark($scope1_id, "a", JSON.stringify(input.todo), $wg__input_todo)}</div>`);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1), 0, 0, 1);
	_html(`<button class=view>view</button>${_el_mark($scope0_id, "b")}<div class=view-log>${_text_mark($scope0_id, "c", log)}</div>`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.todo,
		h: input.todo?.id,
		i: log
	});
});

// tags/todo-box.marko
var todo_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_todo = _write_guard($scope0_reason, 0), $wi__input_todo = _write_if($scope0_reason, 0), $wi__input_open = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_todo__closures = /* @__PURE__ */ new Set();
	let log = "";
	const Box = { content: _content("b1", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<div class=all>${_text_mark($scope2_id, "a", JSON.stringify(input.todo), $wg__input_todo)}</div>`);
				($wi__input_todo || $wi__open) && _subscribe($wi__input_todo && $input_todo__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_todo);
				return 0;
			}
		}, $scope1_id, "a", $wg__open, $wg__open, 0, 0, 1);
		($wi__input_todo || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	Box.content({ open: input.open });
	_html(`<button class=box>box</button>${_el_mark($scope0_id, "b")}<div class=box-log>${_text_mark($scope0_id, "c", log)}</div>`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		f: $wi__input_open && input.todo,
		h: input.todo?.id,
		i: log,
		j: $wi__input_todo && $input_todo__closures,
		a: $wi__input_open && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	todo_view_default({
		show: false,
		todo: { id: 1 }
	});
	todo_box_default({
		open: false,
		todo: { id: 2 }
	});
}, 1);
