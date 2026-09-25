// tags/card.marko
var card_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
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
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {});
});

// tags/heading.marko
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_type = _serialize_if($scope0_reason, 0), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_type__closures = /* @__PURE__ */ new Set();
	let $item;
	forUntil(2, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("c2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("c0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`item ${_escape(i)}`);
				$si__input_type && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				$si__input_type && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ b: i }]), 0, $sg__input_type);
			$si__input_type && _subscribe($input_type__closures, _scope($scope1_id, {
				b: i,
				_: _scope_with_id($scope0_id)
			}), "c1", $sg__input_type);
			$sg__input_type || $si__input_type && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	list_default({ item: $item });
	$si__input_type && _scope($scope0_id, { e: $input_type__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({ type: card_default });
}, 1);
