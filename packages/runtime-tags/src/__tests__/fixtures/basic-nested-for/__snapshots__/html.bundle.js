// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name } = input;
	_html(`<div>${_escape(name)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [0, 1];
	_html(`<button>Push</button>${_el_resume($scope0_id, "a")}`);
	_for_of(items, (outer) => {
		const $scope1_id = _scope_id();
		_for_of(items, (inner) => {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			child_default({ name: `${outer}.${inner}` });
			writeScope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {
			c: outer,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: items });
	_resume_branch($scope0_id);
}, 1);
