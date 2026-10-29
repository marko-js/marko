// tags/outer.marko
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", value.content, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.label !== "x") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</em>`);
				$wi__input_label__OR__input_show && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ch: $wi__input_label && 1
				}), "a0", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "a", $wg__input_label, $wg__input_label, 0, 0, 1);
		$wi__input_label__OR__input_show && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			outer_default({ data: { content: Body.content } });
			$wi__input_show && _scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		d: $wi__input_show && input.label,
		g: $wi__input_show && Body?.content,
		h: $wi__input_label && $input_label__closures
	});
}, 1);
