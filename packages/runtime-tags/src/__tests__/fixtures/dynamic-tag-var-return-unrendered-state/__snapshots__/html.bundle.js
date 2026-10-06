// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	return {
		n,
		set: _resume(function(value) {
			n = value;
		}, "b0", $scope0_id)
	};
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = child_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "a", Tag, {});
	_var($scope0_id, "b", $Tag_scope, "a0");
	_html(`<button class=inc>${_text_resume($scope0_id, "d", v.n)}</button>${_el_resume($scope0_id, "c")}`);
	forUntil(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		const $Tag_scope2 = _peek_scope_id();
		let row = _dynamic_tag($scope1_id, "a", Tag, {});
		_var($scope1_id, "b", $Tag_scope2, "a1");
		_html(`<button class=row>${_text_resume($scope1_id, "d", row.n)}</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, { e: row });
	});
	_script($scope0_id, "a3");
	_scope($scope0_id, { g: v });
}, 1);
