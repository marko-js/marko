// tags/host.marko
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 4);
	const $wg__input_label = _write_guard($scope0_reason, 6), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.native ? "section" : input.wrap, {}, _content_resume("b0", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<i>${_text_resume($scope3_id, "a", input.label, $wg__input_label)}</i>`);
				$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "b1", $wg__input_label);
				$wg__input_label || $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _resume_branch($scope3_id);
			}, $scope2_id, ($scope) => [{ i: input.label }, { _: $scope($scope0_id) }]), 0, $wg__input_wrap__OR__input_native);
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", _write_guard($scope0_reason, 2), _write_guard($scope0_reason, 5));
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		f: input.wrap,
		h: _write_if($scope0_reason, 0) && input.native,
		i: _write_if($scope0_reason, 2) && input.label,
		j: flag,
		m: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wg__input_show__OR__input_native__OR__input_label = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($wg__input_show << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 0) << 5 | $wg__input_show__OR__input_native__OR__input_label << 7 | $wg__input_show << 11 | _write_guard($scope0_reason, 4) << 13);
	const $childScope = _peek_scope_id();
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a1", ({ content }) => {
			const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope1_id, "a")}`);
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "a", content, {}, 0, 0, $wg__content);
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "b");
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				e: content,
				f: open
			});
		}, $scope0_id) })
	});
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
