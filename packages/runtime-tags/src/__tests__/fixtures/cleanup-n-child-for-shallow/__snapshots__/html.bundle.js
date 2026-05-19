// tags/child.marko
var child_default = _template("b", (input) => {
	const $sg__input_name = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { name, write } = input;
	_html(`<div>${_escape(name)}${_el_resume($scope0_id, "a", $sg__input_name)}</div><span>${_escape(name)}${_el_resume($scope0_id, "b", $sg__input_name)}</span><p>${_escape(name)}${_el_resume($scope0_id, "c", $sg__input_name)}</p>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		f: name,
		g: write
	});
	_resume_branch($scope0_id);
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
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		child_default({
			write,
			name: item
		});
		writeScope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "c");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: items,
		e: write
	});
	_resume_branch($scope0_id);
}, 1);
