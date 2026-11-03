// tags/labeled.marko
var labeled_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/plain.marko
var plain_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.name, $wg__input_name)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.on ? labeled_default : plain_default, { name: item.key }, 0, 0, $wg__input_items);
		$wi__input_items && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const $for_content2__item_key__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope2_id, "a", item.on ? "p" : "div", {}, _content("a0", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			const bodyId = _id();
			_html(`<label${_attr("for", bodyId)}>${_text_resume($scope3_id, "b", item.key, $wg__input_items)}</label><input${_attr("id", bodyId)}>`);
			$wi__input_items && _subscribe($for_content2__item_key__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a1", $wg__input_items);
			$wg__input_items || $wi__input_items && _resume_branch($scope3_id);
		}, $scope2_id), 0, $wg__input_items);
		$wi__input_items && _scope($scope2_id, { f: $for_content2__item_key__closures });
	}, 0, $scope0_id, "b", $wg__input_items, $wg__input_items);
	_for_of(input.items, (item) => {
		const $scope4_id = _scope_id();
		const $for_content3__item_key__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope4_id, "a", item.on ? plain_default : null, { name: item.key }, _content("a2", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			const nullId = _id();
			_html(`<label${_attr("for", nullId)}>${_text_resume($scope5_id, "b", item.key, $wg__input_items)}</label><input${_attr("id", nullId)}>`);
			$wi__input_items && _subscribe($for_content3__item_key__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }), "a3", $wg__input_items);
			$wg__input_items || $wi__input_items && _resume_branch($scope5_id);
		}, $scope4_id), 0, $wg__input_items);
		$wi__input_items && _scope($scope4_id, { g: $for_content3__item_key__closures });
	}, 0, $scope0_id, "c", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {});
}, 1);
