// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/list.marko
var list_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {});
});

// tags/heading.marko
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 1), $wi__input_n__OR__input_type = _write_if($scope0_reason, 0), $wg__input_type = _write_guard($scope0_reason, 2), $wi__input_type = _write_if($scope0_reason, 2), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_type__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_n << 1);
	let $item;
	forUntil(input.n, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("c4", () => {
			const $scope1_reason = _scope_reason(), $wg__i = _write_guard($scope1_reason, 0), $wi__i = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $item_content__i__closures = /* @__PURE__ */ new Set();
			_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("c0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`item ${_text_resume($scope2_id, "a", i, $wg__i * 2)} of ${_text_resume($scope2_id, "b", input.n, $wg__input_n * 2)}`);
				($wi__input_n__OR__input_type || $wi__i) && _subscribe($wi__i && $item_content__i__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c1", $wg__input_n || $wg__i), "c2", $wg__input_n || $wg__i);
				$wg__input_n || $wg__i || ($wi__input_n__OR__input_type || $wi__i) && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ d: input.n }, {
				b: i,
				_: $scope($scope0_id)
			}]), 0, $wg__input_type);
			($wi__input_n__OR__input_type || $wi__i) && _subscribe($wi__input_type && $input_type__closures, _scope($scope1_id, {
				b: $wi__input_type && i,
				_: $wi__input_n__OR__input_type && _scope_with_id($scope0_id),
				h: $wi__i && $item_content__i__closures
			}), "c3", $wg__input_type);
			$wg__input_type || ($wi__input_n__OR__input_type || $wi__i) && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	$wi__input_n__OR__input_type && _scope($scope0_id, {
		d: $wi__input_type && input.n,
		e: $wi__input_n && input.type,
		f: $wi__input_n && $input_n__closures,
		g: $wi__input_type && $input_type__closures,
		a: $wi__input_n && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_n << 1 | $wg__input_n << 3);
	const $childScope = _peek_scope_id();
	heading_default({
		type: card_default,
		n: input.n
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
