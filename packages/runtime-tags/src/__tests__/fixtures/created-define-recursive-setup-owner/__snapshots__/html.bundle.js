// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content("a2", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__n = _write_if($scope1_reason, 0), $wg__n = _write_guard($scope1_reason, 0);
		let x = 0;
		_html(`<button>${_text_resume($scope1_id, "b", x)}</button>${_el_resume($scope1_id, "a")}`);
		_dynamic_tag($scope1_id, "c", content, {}, 0, 0, _write_guard($scope1_reason, 1));
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__n << 1);
				const $childScope = _peek_scope_id();
				Card.content({
					n: n - 1,
					content: _content("a1", () => {
						_scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "a", input.label, $wg__input_label)}</em>`);
						($wi__input_label__OR__input_show || $wi__n) && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $wg__input_label);
						$wg__input_label || ($wi__input_label__OR__input_show || $wi__n) && _resume_branch($scope3_id);
					}, $scope2_id)
				});
				($wi__input_label__OR__input_show || $wi__n) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: $wi__n && _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "d", $wg__n, $wg__n);
		_script($scope1_id, "a3");
		_scope($scope1_id, {
			i: x,
			_: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			Card.content({
				n: 2,
				content: _content("a5", () => {
					_scope_reason();
					const $scope5_id = _scope_id();
					_html(`<strong>${_text_resume($scope5_id, "a", input.label, $wg__input_label)}</strong>`);
					$wi__input_label__OR__input_show && _subscribe($wi__input_label && $input_label__closures, _scope($scope5_id, {
						_: _scope_with_id($scope4_id),
						Cf: $wi__input_label && 1
					}), "a4", $wg__input_label);
					$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope5_id);
				}, $scope4_id)
			});
			$wi__input_label__OR__input_show && _scope($scope4_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
