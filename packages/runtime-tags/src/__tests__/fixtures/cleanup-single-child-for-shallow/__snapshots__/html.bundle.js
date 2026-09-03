// tags/child.marko
var child_default = _template("b", (input) => {
	const $sg__input_name = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { name, write } = input;
	_html(`<div>${_text_resume($scope0_id, "a", name, $sg__input_name)}</div>`);
	_script($scope0_id, "b0", $sg__input_name);
	_scope($scope0_id, {
		d: name,
		e: write
	});
	$sg__input_name || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		1,
		2,
		3
	];
	const write = _resume(function(msg) {
		((el) => el())(_el_read_error).innerHTML += "\n" + msg;
	}, "a0", $scope0_id);
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "b")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(1);
		const $childScope = _peek_scope_id();
		child_default({
			write,
			name: item
		});
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: items,
		e: write
	});
}, 1);
