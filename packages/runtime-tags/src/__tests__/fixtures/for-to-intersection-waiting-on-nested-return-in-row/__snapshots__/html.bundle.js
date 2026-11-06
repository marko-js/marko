// tags/grand.marko
var grand_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return input.v;
});

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let g = grand_default({ v: input.v });
	$wi__input_v && _var($scope0_id, "b", $childScope, "b0");
	const $return = g;
	$wi__input_v && _scope($scope0_id, { a: _existing_scope($childScope) });
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([0, 1], (outer) => {
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		let r = child_default({ v: short });
		_var($scope1_id, "b", $childScope, "a0");
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
			h: r,
			a: _existing_scope($childScope)
		});
	});
}, 1);
