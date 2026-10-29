// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let T = input.tag;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${T ? "has" : "none"}</p>`);
			_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_more, $wg__input_more, 0, 0, 1);
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/1", T, { label: input.label }, 0, 0, $wg__input_label);
	_html("</section>");
	$wi__input_more__OR__input_label && _scope($scope0_id, { T }, "__tests__/tags/outer.marko", 0, { T: "1:6" });
	$wg__input_more || $wg__input_label || $wi__input_more__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_more__OR__input_label << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 4) << 5);
			const $childScope = _peek_scope_id();
			outer_default({
				tag: card_default,
				more: input.more,
				label: input.label
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_more__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_more__OR__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_more: input.more,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_more: ["input.more"],
		input_label: ["input.label"]
	});
}, 1);
