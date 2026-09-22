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
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let $item;
	forOf(["a", "b"], (item) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<span>${_escape(item)}</span>`);
					$si__input_show && _scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
			$si__input_show && _subscribe($input_show__closures, _scope($scope1_id, {
				b: item,
				_: _scope_with_id($scope0_id)
			}));
			$sg__input_show || $si__input_show && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	list_default({ item: $item });
	$si__input_show && _scope($scope0_id, { e: $input_show__closures });
}, 1);
