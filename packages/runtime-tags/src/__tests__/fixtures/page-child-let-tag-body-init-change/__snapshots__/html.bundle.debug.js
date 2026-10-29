// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let tag = input.tag;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", tag, {}, _content_resume("__tests__/tags/outer.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(_text_resume($scope2_id, "#text/0", input.label, $wg__input_label));
				$wi__input_more__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/outer.marko", "2:19"), "__tests__/tags/outer.marko_2_input_label#0:5/subscribe", $wg__input_label);
				$wg__input_label || $wi__input_more__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ input_label: input.label }, { _: $scope($scope0_id) }]), 0, 0);
			$wi__input_more__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_more, $wg__input_more);
	$wi__input_more__OR__input_label && _scope($scope0_id, {
		input_label: $wi__input_more && input.label,
		tag: $wi__input_more && tag,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		tag: "1:6"
	});
	$wg__input_more || $wi__input_more__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		tag: input.alt ? "b" : "em",
		label: input.label,
		more: input.more
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
