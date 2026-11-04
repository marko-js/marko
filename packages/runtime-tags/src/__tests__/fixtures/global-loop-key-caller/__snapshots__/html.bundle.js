// tags/rows.marko
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0), $wi__input_n = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<ul>");
	_for_until(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i + ":" + $global$1.x)}</li>`);
		$wi__input_n && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_n, $wg__input_n, $wg__input_n, "</ul>", 1);
	$wi__input_n && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	rows_default({ n });
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id();
	rows_default({ n: input.m });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: n,
		b: _existing_scope($childScope),
		c: _write_if($scope0_reason, 0) && _existing_scope($childScope2)
	});
}, 1);
