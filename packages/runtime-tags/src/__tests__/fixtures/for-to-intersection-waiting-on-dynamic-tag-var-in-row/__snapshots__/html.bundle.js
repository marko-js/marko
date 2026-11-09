// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.v;
});

// tags/other.marko
var other_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return !input.v;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useChild = true;
	forOf([0, 1], (outer) => {
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		const $useChildChildOther_scope = _peek_scope_id();
		let r = _dynamic_tag($scope1_id, "a", child_default, { v: short });
		_var($scope1_id, "b", $useChildChildOther_scope, "a0");
		_for_to(r ? 0 : l.length - 1, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "a", l[i].name)}</span>`);
			_scope($scope2_id, { M: i });
		}, 0, $scope1_id, "c", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "d")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			e: l,
			f: l?.length,
			i: r,
			_: _scope_with_id($scope0_id)
		});
	});
	_scope($scope0_id, { b: useChild });
}, 1);
