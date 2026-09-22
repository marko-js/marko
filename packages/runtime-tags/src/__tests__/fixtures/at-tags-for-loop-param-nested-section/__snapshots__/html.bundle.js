// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let count = 2;
	let show = true;
	let items = [{ text: "a" }, { text: "b" }];
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "a")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "b")}<button id=rename>rename</button>${_el_resume($scope0_id, "c")}`);
	_set_serialize_reason(2);
	let $item;
	forUntil(count, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const $item_content__i__closures = /* @__PURE__ */ new Set();
			_if(() => {
				{
					const $scope3_id = _scope_id();
					_html(`<em>if ${_text_resume($scope3_id, "a", i, 2)}</em>`);
					_scope($scope3_id, {});
					return 0;
				}
			}, $scope1_id, "a", 1, 1, 1, 0, 1);
			_dynamic_tag($scope1_id, "b", "b", {}, _content("a0", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_html(`tag ${_text_resume($scope4_id, "a", i, 2)}`);
				_subscribe($item_content__i__closures, _scope($scope4_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id));
			_for_until(2, 0, 1, (j) => {
				const $scope5_id = _scope_id();
				_html(`<span>${_text_resume($scope5_id, "a", i)}.${_escape(j)}</span>`);
				_scope($scope5_id, { _: _scope_with_id($scope1_id) });
			}, 0, $scope1_id, "c", 1, 0, 0, 0, 1);
			_subscribe($show__closures, _scope($scope1_id, {
				d: i,
				_: _scope_with_id($scope0_id),
				e: $item_content__i__closures
			}));
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_set_serialize_reason(2);
	let $item2;
	forOf(items, (item) => {
		$item2 = attrTags($item2, { content: _content("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				{
					const $scope6_id = _scope_id();
					_html(`<strong>${_text_resume($scope6_id, "a", item.text)}</strong>`);
					_scope($scope6_id, {});
					return 0;
				}
			}, $scope2_id, "a", 1, 1, 1, 0, 1);
			_subscribe($show__closures, _scope($scope2_id, {
				b: item?.text,
				_: _scope_with_id($scope0_id),
				Ci: 1
			}));
		}, $scope0_id) });
	});
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item2 });
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: count,
		g: show,
		h: items,
		i: $show__closures,
		d: _existing_scope($childScope),
		e: _existing_scope($childScope2)
	});
}, 1);
