// tags/todo-view.marko
var todo_view_default = _template("__tests__/tags/todo-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_todo = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let log = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div class=all>${_text_mark($scope1_id, "#text/0", JSON.stringify(input.todo), $wg__input_todo)}</div>`);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/todo-view.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1), 0, 0, 1);
	_html(`<button class=view>view</button>${_el_mark($scope0_id, "#button/1")}<div class=view-log>${_text_mark($scope0_id, "#text/2", log)}</div>`);
	_script($scope0_id, "__tests__/tags/todo-view.marko_0");
	_scope($scope0_id, {
		input_todo: _write_if($scope0_reason, 1) && input.todo,
		input_todo_id: input.todo?.id,
		log
	}, "__tests__/tags/todo-view.marko", 0, {
		input_todo: ["input.todo"],
		input_todo_id: ["input.todo.id"],
		log: "1:6"
	});
});

// tags/todo-box.marko
var todo_box_default = _template("__tests__/tags/todo-box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_todo = _write_guard($scope0_reason, 0), $wi__input_todo = _write_if($scope0_reason, 0), $wi__input_open = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_todo__closures = new Set();
	let log = "";
	const Box = { content: _content("__tests__/tags/todo-box.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<div class=all>${_text_mark($scope2_id, "#text/0", JSON.stringify(input.todo), $wg__input_todo)}</div>`);
				($wi__input_todo || $wi__open) && _subscribe($wi__input_todo && $input_todo__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/todo-box.marko", "3:4"), "__tests__/tags/todo-box.marko_2_input_todo#0:5/subscribe", $wg__input_todo);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__open, $wg__open, 0, 0, 1);
		($wi__input_todo || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/todo-box.marko", "2:2");
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	Box.content({ open: input.open });
	_html(`<button class=box>box</button>${_el_mark($scope0_id, "#button/1")}<div class=box-log>${_text_mark($scope0_id, "#text/2", log)}</div>`);
	_script($scope0_id, "__tests__/tags/todo-box.marko_0");
	_scope($scope0_id, {
		input_todo: $wi__input_open && input.todo,
		input_todo_id: input.todo?.id,
		log,
		"ClosureScopes:input_todo/9": $wi__input_todo && $input_todo__closures,
		"#childScope/0": $wi__input_open && _existing_scope($childScope)
	}, "__tests__/tags/todo-box.marko", 0, {
		input_todo: ["input.todo"],
		input_todo_id: ["input.todo.id"],
		log: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	todo_view_default({
		show: false,
		todo: { id: 1 }
	});
	todo_box_default({
		open: false,
		todo: { id: 2 }
	});
}, 1);
