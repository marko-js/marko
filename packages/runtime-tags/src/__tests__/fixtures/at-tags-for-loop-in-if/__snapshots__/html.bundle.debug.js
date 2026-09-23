// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "2:4");
	}, 0, $scope0_id, "#div/0", $sg__input_item, $sg__input_item, $sg__input_item, "</div>");
	$si__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/labeled-list.marko
var labeled_list_default = _template("__tests__/tags/labeled-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 2), $sg__input_label_text = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.label?.text, $sg__input_label_text)}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		_serialize_if($scope0_reason, 2) && _scope($scope1_id, {}, "__tests__/tags/labeled-list.marko", "3:4");
	}, 0, $scope0_id, "#text/1", $sg__input_item, $sg__input_item, $sg__input_item);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/labeled-list.marko", 0);
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
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`static ${_text_resume($scope1_id, "#text/0", i, 2)}`);
				_scope($scope1_id, {}, "__tests__/template.marko", "8:22");
			}, $scope0_id) });
		});
	}
	list_default({ item: $item });
	_set_serialize_reason(2);
	let $item2;
	if (mode === 0) {
		forUntil(count, 0, 1, ($i) => {
			$item2 = attrTags($item2, { content: _content("__tests__/template.marko_2*content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`if ${_text_resume($scope2_id, "#text/0", $i, 2)}`);
				_scope($scope2_id, {}, "__tests__/template.marko", "14:26");
			}, $scope0_id) });
		});
	}
	const $childScope = _peek_scope_id();
	list_default({ item: $item2 });
	_set_serialize_reason(2);
	let $item3;
	if (mode === 0) {} else if (mode === 1) {
		forUntil(count, 0, 1, ($i2) => {
			$item3 = attrTags($item3, { content: _content("__tests__/template.marko_3*content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`else-if ${_text_resume($scope3_id, "#text/0", $i2, 2)}`);
				_scope($scope3_id, {}, "__tests__/template.marko", "21:26");
			}, $scope0_id) });
		});
	}
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item3 });
	_set_serialize_reason(2);
	let $item4;
	if (mode !== 2) {} else {
		if (count) {
			forUntil(count, 0, 1, ($i3) => {
				$item4 = attrTags($item4, { content: _content("__tests__/template.marko_4*content", () => {
					_scope_reason();
					const $scope4_id = _scope_id();
					_html(`else ${_text_resume($scope4_id, "#text/0", $i3, 2)}`);
					_scope($scope4_id, {}, "__tests__/template.marko", "29:28");
				}, $scope0_id) });
			});
		}
	}
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item4 });
	_set_serialize_reason(2);
	let $item5;
	forUntil(count, 0, 1, (j) => {
		if (j % 2 === mode % 2) {
			$item5 = attrTags($item5, { content: _content("__tests__/template.marko_5*content", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html(`for-if ${_text_resume($scope5_id, "#text/0", j, 2)}`);
				_scope($scope5_id, {}, "__tests__/template.marko", "36:29");
			}, $scope0_id) });
		}
	});
	const $childScope4 = _peek_scope_id();
	list_default({ item: $item5 });
	_set_serialize_reason(42);
	let $label;
	let $item6;
	if (mode === 0) {
		$label = attrTag({ text: "zero" });
	} else {
		forUntil(count, 0, 1, ($i4) => {
			$item6 = attrTags($item6, { content: _content("__tests__/template.marko_6*content", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html(`labeled ${_text_resume($scope6_id, "#text/0", $i4, 2)}`);
				_scope($scope6_id, {}, "__tests__/template.marko", "43:26");
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
