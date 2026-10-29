// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", f(input.label), $wg__input_label)}</p>`);
			$wi__input_more__OR__input_label && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_more, 0, 0, 1);
	$wi__input_more__OR__input_label && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6"
	});
	$wg__input_more || $wi__input_more__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_alt__OR__input_label__OR__input_more = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const plain = _resume((v) => "p-" + v, "__tests__/template.marko_0/plain");
	const loud = _resume((v) => "l-" + v, "__tests__/template.marko_0/loud");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 1) << 1 | _write_guard($scope0_reason, 6) << 3 | _write_guard($scope0_reason, 5) << 5);
			const $childScope = _peek_scope_id();
			outer_default({
				fmt: input.alt ? loud : plain,
				label: input.label,
				more: input.more
			});
			_write_if($scope0_reason, 3) && _scope($scope1_id, {
				_: $wi__input_alt__OR__input_label__OR__input_more && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_alt__OR__input_label__OR__input_more && _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 3), $wg__input_show);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_alt: $wi__input_show && input.alt,
		input_label: $wi__input_show && input.label,
		input_more: $wi__input_show && input.more,
		plain,
		loud
	}, "__tests__/template.marko", 0, {
		input_alt: ["input.alt"],
		input_label: ["input.label"],
		input_more: ["input.more"],
		plain: "1:8",
		loud: "2:8"
	});
}, 1);
