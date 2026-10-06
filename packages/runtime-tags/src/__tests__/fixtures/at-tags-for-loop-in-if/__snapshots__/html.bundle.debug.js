// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "2:4");
	}, 0, $scope0_id, "#div/0", $wg__input_item, $wg__input_item, $wg__input_item, "</div>");
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/labeled-list.marko
var labeled_list_default = _template("__tests__/tags/labeled-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 2), $wg__input_label_text = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.label?.text, $wg__input_label_text)}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		_write_if($scope0_reason, 2) && _scope($scope1_id, {}, "__tests__/tags/labeled-list.marko", "3:4");
	}, 0, $scope0_id, "#text/1", $wg__input_item, $wg__input_item);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/labeled-list.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 2;
	let mode = 0;
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "#button/0")}<button id=mode>mode</button>${_el_resume($scope0_id, "#button/1")}`);
	let $item;
	if (true) {
		forUntil(3, 0, 1, (i) => {
			$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
				const $scope1_reason = _scope_reason(), $wg__i = _write_guard($scope1_reason, 0);
				const $scope1_id = _scope_id();
				_html(`static ${_text_resume($scope1_id, "#text/0", i, $wg__i * 2)}`);
				_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "8:22");
			}, $scope0_id) });
		});
	}
	list_default({ item: $item });
	_set_scope_reason(2);
	let $item2;
	if (mode === 0) {
		forUntil(count, 0, 1, (i) => {
			$item2 = attrTags($item2, { content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason(), $wg__i2 = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`if ${_text_resume($scope2_id, "#text/0", i, $wg__i2 * 2)}`);
				_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "14:26");
			}, $scope0_id) });
		});
	}
	const $childScope = _peek_scope_id();
	list_default({ item: $item2 });
	_set_scope_reason(2);
	let $item3;
	if (mode === 0) {} else if (mode === 1) {
		forUntil(count, 0, 1, (i) => {
			$item3 = attrTags($item3, { content: _content("__tests__/template.marko_3*content", () => {
				const $scope3_reason = _scope_reason(), $wg__i3 = _write_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`else-if ${_text_resume($scope3_id, "#text/0", i, $wg__i3 * 2)}`);
				_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "21:26");
			}, $scope0_id) });
		});
	}
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item3 });
	_set_scope_reason(2);
	let $item4;
	if (mode !== 2) {} else {
		if (count) {
			forUntil(count, 0, 1, (i) => {
				$item4 = attrTags($item4, { content: _content("__tests__/template.marko_4*content", () => {
					const $scope4_reason = _scope_reason(), $wg__i4 = _write_guard($scope4_reason, 0);
					const $scope4_id = _scope_id();
					_html(`else ${_text_resume($scope4_id, "#text/0", i, $wg__i4 * 2)}`);
					_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "29:28");
				}, $scope0_id) });
			});
		}
	}
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item4 });
	_set_scope_reason(2);
	let $item5;
	forUntil(count, 0, 1, (j) => {
		if (j % 2 === mode % 2) {
			$item5 = attrTags($item5, { content: _content("__tests__/template.marko_5*content", () => {
				const $scope5_reason = _scope_reason(), $wg__j = _write_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`for-if ${_text_resume($scope5_id, "#text/0", j, $wg__j * 2)}`);
				_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "36:29");
			}, $scope0_id) });
		}
	});
	const $childScope4 = _peek_scope_id();
	list_default({ item: $item5 });
	_set_scope_reason(42);
	let $label;
	let $item6;
	if (mode === 0) {
		$label = attrTag({ text: "zero" });
	} else {
		forUntil(count, 0, 1, (i) => {
			$item6 = attrTags($item6, { content: _content("__tests__/template.marko_6*content", () => {
				const $scope6_reason = _scope_reason(), $wg__i5 = _write_guard($scope6_reason, 0);
				const $scope6_id = _scope_id();
				_html(`labeled ${_text_resume($scope6_id, "#text/0", i, $wg__i5 * 2)}`);
				_write_if($scope6_reason, 0) && _scope($scope6_id, {}, "__tests__/template.marko", "43:26");
			}, $scope0_id) });
		});
	}
	const $childScope5 = _peek_scope_id();
	labeled_list_default({
		label: $label,
		item: $item6
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		mode,
		"#childScope/3": _existing_scope($childScope),
		"#childScope/4": _existing_scope($childScope2),
		"#childScope/5": _existing_scope($childScope3),
		"#childScope/6": _existing_scope($childScope4),
		"#childScope/7": _existing_scope($childScope5)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		mode: "2:6"
	});
}, 1);
