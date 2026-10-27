// tags/one.marko
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>one ${_text_resume($scope0_id, "a", input.id, $wg__input_id * 2)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/two.marko
var two_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>two ${_text_resume($scope0_id, "a", input.id, $wg__input_id * 2)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_html("</section>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 4), $wi__input_id = _write_if($scope0_reason, 4), $wi__input_show__OR__input_id = _write_if($scope0_reason, 0), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_which = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	const $input_which__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("a5", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.which ? one_default : two_default, { id: input.id }, 0, 0, $wg__input_which__OR__input_id);
			_try($scope1_id, "b", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_text_resume($scope3_id, "a", input.id, $wg__input_id)}</p>`);
				$wi__input_show__OR__input_id && _subscribe($wi__input_id && $input_id__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Ch: $wi__input_id && 2
				}), "a1", $wg__input_id);
				$wg__input_id || $wi__input_show__OR__input_id && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_resume($scope2_id, "a", input.id, $wg__input_id * 2)}`);
				_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ch: $wi__input_id && 1
				}), "a0", $wg__input_id);
				$wg__input_id || _resume_branch($scope2_id);
			}, void 0, "a2");
			_subscribe($wi__input_id && $input_id__closures, _subscribe($wi__input_which && $input_which__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_which__OR__input_id), "a4", $wg__input_which__OR__input_id);
			$wg__input_which__OR__input_id || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_scope($scope0_id, {
		e: $wi__input_show__OR__input_id && input.which,
		f: input.id,
		h: $wi__input_id && $input_id__closures,
		g: $wi__input_which && $input_which__closures,
		a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
	});
}, 1);
