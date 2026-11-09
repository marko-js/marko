// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const $return = { get: _resume(() => count, "b0", $scope0_id) };
	_scope($scope0_id, { a: count });
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	_if(() => {
		{
			const $scope1_id = _scope_id();
			let x = child_default({});
			_html(`<button class=whole>whole</button>${_el_mark($scope1_id, "c")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				d: x,
				e: x.get,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0, 0, 1);
	_html(`<button class=hoisted>hoisted</button>${_el_mark($scope0_id, "b")}<div>${_text_mark($scope0_id, "c", log)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: log });
}, 1);
