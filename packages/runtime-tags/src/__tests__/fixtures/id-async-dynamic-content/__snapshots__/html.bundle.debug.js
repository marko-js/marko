// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "#input/2", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/loaded.marko
var loaded_default = _template("__tests__/tags/loaded.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_name << 3 | $wg__input_name << 7);
	const $childScope = _peek_scope_id();
	field_default({ name: input.name });
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/tags/loaded.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items__OR__input_loaded = _write_if($scope0_reason, 0), $wg__input_items__OR__input_loaded = _write_guard($scope0_reason, 0), $wi__input_loaded = _write_if($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 1), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_loaded__closures = new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_promise__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", item.promise, (ready) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", input.loaded ? loaded_default : "section", { name: ready }, _content_resume("__tests__/template.marko_4*content", () => {
					const $scope4_id = _scope_id();
					const $scope4_reason = _scope_reason();
					field_default({ name: item.key });
					$wi__input_items__OR__input_loaded && _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "6:7");
					$wi__input_items__OR__input_loaded && _resume_branch($scope4_id);
				}, $scope3_id, ($scope) => [
					{ "#LoopKey": item?.key },
					{ _: $scope($scope1_id) },
					{ _: $scope($scope2_id) }
				]), 0, $wg__input_items__OR__input_loaded);
				$wi__input_items__OR__input_loaded && _subscribe($wi__input_loaded && $input_loaded__closures, _scope($scope3_id, { ready: $wi__input_loaded && ready }, "__tests__/template.marko", "5:4", { ready: "5:10" }), "__tests__/template.marko_3_input_loaded#0:4/subscribe", $wg__input_items__OR__input_loaded);
				$wg__input_items__OR__input_loaded || $wi__input_items__OR__input_loaded && _resume_branch($scope3_id);
			}, $wg__input_items__OR__input_loaded);
			$wi__input_items__OR__input_loaded && _subscribe($wi__input_items && $for_content__item_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:3"), "__tests__/template.marko_2_item_promise#1:3/subscribe", 0);
			$wi__input_items__OR__input_loaded && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			field_default({ name: "loading" });
		}, void 0, "__tests__/template.marko_5*content");
		$wi__input_items__OR__input_loaded && _scope($scope1_id, {
			"#LoopKey": $wi__input_loaded && item?.key,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item_promise/6": $wi__input_items && $for_content__item_promise__closures
		}, "__tests__/template.marko", "2:2", { "#LoopKey": ["item.key", "2:6"] });
	}, "key", $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items__OR__input_loaded && _scope($scope0_id, {
		input_loaded: $wi__input_items && input.loaded,
		"ClosureScopes:input_loaded/5": $wi__input_loaded && $input_loaded__closures
	}, "__tests__/template.marko", 0, { input_loaded: ["input.loaded"] });
}, 1);
