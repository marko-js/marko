// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { rest: x, ...rest } = input;
	_html(`<span${_attrs(rest, "a", $scope0_id, "span")}>${_text_mark($scope0_id, "b", x, _write_guard($scope0_reason, 0))}</span>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = {
		rest: 1,
		a: 2
	};
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default(o);
	_html(`<button>Change</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
