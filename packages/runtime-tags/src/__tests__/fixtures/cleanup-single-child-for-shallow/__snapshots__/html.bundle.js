// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name, write } = input;
	_html(`<div>${_escape(name)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		d: name,
		e: write
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
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: items,
		e: write
	});
	_resume_branch($scope0_id);
}, 1);
