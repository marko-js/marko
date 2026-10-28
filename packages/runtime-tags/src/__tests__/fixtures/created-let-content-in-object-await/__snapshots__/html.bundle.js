// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = { content: input.content };
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	card_default({ content: o.content });
	_script($scope0_id, "c0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_await($scope0_id, "b", resolveAfter(input.label, 3), (v) => {
		const $scope3_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<div>${_text_resume($scope4_id, "a", v, $wg__input_label)}</div>`);
				$wi__input_show__OR__input_label && _scope($scope4_id, { _: $wi__input_label && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
		$wi__input_show && _subscribe($input_show__closures, _scope($scope3_id, { c: v }), "a2", $wg__input_show);
		$wg__input_show || $wi__input_show && _resume_branch($scope3_id);
	}, $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		f: $wi__input_show && input.label,
		h: $wi__input_label && $input_label__closures,
		g: $wi__input_show && $input_show__closures
	});
}, 1);
