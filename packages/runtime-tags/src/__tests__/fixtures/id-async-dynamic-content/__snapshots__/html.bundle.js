// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// tags/loaded.marko
var loaded_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_name << 3 | $wg__input_name << 7);
	const $childScope = _peek_scope_id();
	field_default({ name: input.name });
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _write_if($scope0_reason, 1) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items__OR__input_loaded = _write_if($scope0_reason, 0), $wg__input_items__OR__input_loaded = _write_guard($scope0_reason, 0), $wi__input_loaded = _write_if($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 1), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_loaded__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_promise__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", item.promise, (ready) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", input.loaded ? loaded_default : "section", { name: ready }, _content_resume("a0", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					field_default({ name: item.key });
					$wi__input_items__OR__input_loaded && _scope($scope4_id, { _: _scope_with_id($scope3_id) });
					$wi__input_items__OR__input_loaded && _resume_branch($scope4_id);
				}, $scope3_id, ($scope) => [
					{ M: item?.key },
					{ _: $scope($scope1_id) },
					{ _: $scope($scope2_id) }
				]), 0, $wg__input_items__OR__input_loaded);
				$wi__input_items__OR__input_loaded && _subscribe($wi__input_loaded && $input_loaded__closures, _scope($scope3_id, { c: $wi__input_loaded && ready }), "a1", $wg__input_items__OR__input_loaded);
				$wg__input_items__OR__input_loaded || $wi__input_items__OR__input_loaded && _resume_branch($scope3_id);
			}, $wg__input_items__OR__input_loaded);
			$wi__input_items__OR__input_loaded && _subscribe($wi__input_items && $for_content__item_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2", 0);
			$wi__input_items__OR__input_loaded && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			field_default({ name: "loading" });
		}, void 0, "a3");
		$wi__input_items__OR__input_loaded && _scope($scope1_id, {
			M: $wi__input_loaded && item?.key,
			_: _scope_with_id($scope0_id),
			g: $wi__input_items && $for_content__item_promise__closures
		});
	}, "key", $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items__OR__input_loaded && _scope($scope0_id, {
		e: $wi__input_items && input.loaded,
		f: $wi__input_loaded && $input_loaded__closures
	});
}, 1);
