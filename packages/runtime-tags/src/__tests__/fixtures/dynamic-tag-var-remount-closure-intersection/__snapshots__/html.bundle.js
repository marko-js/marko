// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return { n: 0 };
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let b = 0;
	let Tag = child_default;
	let items = [1, 2];
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "a", Tag, {});
	_var($scope0_id, "b", $Tag_scope, "a0");
	const c = (v ? v.n : 0) + b;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "b", "0:" + c)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			e: m,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, 0, 0, 0, 1);
	_html(`<button class=toggle></button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: b,
		f: Tag,
		h: v,
		j: c
	});
}, 1);
