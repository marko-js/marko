// tags/tabs.marko
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab__OR__input_selected = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", [...input.tab].find((t) => t.id === input.selected)?.content, {}, 0, 0, $wg__input_tab__OR__input_selected);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.tab,
		e: _write_if($scope0_reason, 1) && input.selected
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_y = _write_if($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason($wg__input_x << 1 | $wg__input_x << 5);
	const $childScope = _peek_scope_id();
	tabs_default({
		selected: input.x,
		tab: attrTags(attrTag({
			id: 1,
			content: _content_resume("a2", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`A${_text_resume($scope1_id, "a", input.y, $wg__input_y * 2)}`);
				$wi__input_x__OR__input_y && _subscribe($wi__input_y && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_y);
				$wg__input_y || $wi__input_x__OR__input_y && _resume_branch($scope1_id);
			}, $scope0_id)
		}), {
			id: 2,
			content: _content_resume("a3", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`B${_text_resume($scope2_id, "a", s, 2)}`);
				_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a1");
			}, $scope0_id)
		})
	});
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: $wi__input_x && input.y,
		g: s,
		h: $wi__input_y && $input_y__closures,
		i: $s__closures,
		b: $wi__input_x && _existing_scope($childScope)
	});
}, 1);
