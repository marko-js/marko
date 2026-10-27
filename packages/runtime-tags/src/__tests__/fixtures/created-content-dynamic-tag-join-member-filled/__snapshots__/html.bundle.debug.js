// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>one ${_text_resume($scope0_id, "#text/0", input.id, $wg__input_id * 2)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/one.marko", 0);
});

// tags/two.marko
var two_default = _template("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>two ${_text_resume($scope0_id, "#text/0", input.id, $wg__input_id * 2)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/two.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_html("</section>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 4), $wi__input_id = _write_if($scope0_reason, 4), $wi__input_show__OR__input_id = _write_if($scope0_reason, 0), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_which = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	const $input_which__closures = new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.which ? one_default : two_default, { id: input.id }, 0, 0, $wg__input_which__OR__input_id);
			_try($scope1_id, "#text/1", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_text_resume($scope3_id, "#text/0", input.id, $wg__input_id)}</p>`);
				$wi__input_show__OR__input_id && _subscribe($wi__input_id && $input_id__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_id/7": $wi__input_id && 2
				}, "__tests__/template.marko", "5:4"), "__tests__/template.marko_3_input_id#0:5/subscribe", $wg__input_id);
				$wg__input_id || $wi__input_show__OR__input_id && _resume_branch($scope3_id);
			}, () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_resume($scope2_id, "#text/0", input.id, $wg__input_id * 2)}`);
				_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_id/7": $wi__input_id && 1
				}, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_input_id#0:5/subscribe", $wg__input_id);
				$wg__input_id || _resume_branch($scope2_id);
			}, void 0, "__tests__/template.marko_2*content");
			_subscribe($wi__input_id && $input_id__closures, _subscribe($wi__input_which && $input_which__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_which#0:4/subscribe", $wg__input_which__OR__input_id), "__tests__/template.marko_1_input_id#0:5/subscribe", $wg__input_which__OR__input_id);
			$wg__input_which__OR__input_id || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		input_which: $wi__input_show__OR__input_id && input.which,
		input_id: input.id,
		"ClosureScopes:input_id/7": $wi__input_id && $input_id__closures,
		"ClosureScopes:input_which/6": $wi__input_which && $input_which__closures,
		"#childScope/0": _write_if($scope0_reason, 2) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_id: ["input.id"]
	});
}, 1);
