// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label__OR__input_more = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const g = _resume((v) => f(v), "__tests__/tags/outer.marko_0/g", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "#text/0", g(input.label), $wg__input_label)}</p>`);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(g("constant"))}</p>`);
			_write_if($scope0_reason, 2) && _scope($scope1_id, {}, "__tests__/tags/outer.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_more, $wg__input_more, 0, 0, 1);
	$wi__input_label__OR__input_more && _scope($scope0_id, {
		f,
		g
	}, "__tests__/tags/outer.marko", 0, {
		f: "1:6",
		g: "2:8"
	});
	$wg__input_label || $wg__input_more || $wi__input_label__OR__input_more && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label__OR__input_more = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	_set_scope_reason($wg__input_label__OR__input_more << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: fn,
		label: input.label,
		more: input.more
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
