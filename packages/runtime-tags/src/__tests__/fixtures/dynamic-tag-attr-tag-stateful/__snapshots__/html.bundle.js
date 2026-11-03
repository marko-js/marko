// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content_resume("a0", ({ item }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__item = _write_guard($scope2_reason, 0);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "a")}`);
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", item, {}, 0, 0, $wg__item);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope2_id, "b");
		_script($scope2_id, "a1");
		_scope($scope2_id, {
			e: item,
			f: open
		});
	}, $scope0_id) };
	const Plain = { content: _content_resume("a2", ({ item }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__item2 = _write_guard($scope4_reason, 0);
		_dynamic_tag($scope4_id, "a", item, {}, 0, 0, $wg__item2);
		_write_if($scope4_reason, 0) && _scope($scope4_id, {});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? Wrap : Plain, { item: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.note }]) }) }, 0, 0, $wg__input_on);
	_html("</main>");
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		e: $wi__input_on && input.note,
		f: $wi__input_on && Wrap,
		g: $wi__input_on && Plain,
		i: $wi__input_note && $input_note__closures
	});
}, 1);
