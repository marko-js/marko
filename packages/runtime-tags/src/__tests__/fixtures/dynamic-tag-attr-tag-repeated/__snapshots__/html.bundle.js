// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_a = _write_if($scope0_reason, 0), $wg__input_b = _write_guard($scope0_reason, 5), $wi__input_on__OR__input_b = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_on = _write_if($scope0_reason, 3), $wi__input_a = _write_if($scope0_reason, 4), $wi__input_b = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content_resume("a0", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item = _write_guard($scope3_reason, 0);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "a")}`);
		_if(() => {
			{
				const $scope4_id = _scope_id();
				_for_of(item, (it) => {
					const $scope5_id = _scope_id();
					_dynamic_tag($scope5_id, "a", it, {}, 0, 0, $wg__item);
					_write_if($scope3_reason, 0) && _scope($scope5_id, {});
				}, 0, $scope4_id, "a", $wg__item, $wg__item);
				_scope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b");
		_script($scope3_id, "a1");
		_scope($scope3_id, {
			e: item,
			f: open
		});
	}, $scope0_id) };
	const Plain = { content: _content_resume("a2", ({ item }) => {
		const $scope6_id = _scope_id();
		const $scope6_reason = _scope_reason(), $wg__item2 = _write_guard($scope6_reason, 0), $wi__item = _write_if($scope6_reason, 0);
		_for_of(item, (it) => {
			const $scope7_id = _scope_id();
			_dynamic_tag($scope7_id, "a", it, {}, 0, 0, $wg__item2);
			$wi__item && _scope($scope7_id, {});
		}, 0, $scope6_id, "a", $wg__item2, $wg__item2);
		$wi__item && _scope($scope6_id, {});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? Wrap : Plain, { item: attrTags(attrTag({ content: _content_resume("a5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</em>`);
		$wi__input_on__OR__input_a && _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_a);
		$wg__input_a || $wi__input_on__OR__input_a && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.a }]) }), { content: _content_resume("a6", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", input.b, $wg__input_b)}</b>`);
		$wi__input_on__OR__input_b && _subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a4", $wg__input_b);
		$wg__input_b || $wi__input_on__OR__input_b && _resume_branch($scope2_id);
	}, $scope0_id, ($scope2) => [{ f: input.b }]) }) }, 0, 0, $wg__input_on);
	_html("</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: $wi__input_on && input.a,
		f: $wi__input_on && input.b,
		g: $wi__input_on && Wrap,
		h: $wi__input_on && Plain,
		j: $wi__input_a && $input_a__closures,
		k: $wi__input_b && $input_b__closures
	});
}, 1);
