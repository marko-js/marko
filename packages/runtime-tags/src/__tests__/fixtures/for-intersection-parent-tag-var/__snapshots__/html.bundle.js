// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		inc: _resume(function() {
			n++;
		}, "b0", $scope0_id)
	};
	_scope($scope0_id, { a: n });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = counter_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_for_of([1, 2], (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		const c = v.n + item;
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "b", c + ":0")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			d: item,
			f: m,
			g: c,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, 0, 0, 0, 1);
	_scope($scope0_id, {
		d: v,
		a: _existing_scope($childScope)
	});
}, 1);
