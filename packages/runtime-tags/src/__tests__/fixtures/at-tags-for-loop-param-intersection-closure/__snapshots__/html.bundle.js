// tags/list/index.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $mult__closures = /* @__PURE__ */ new Set();
	let mult = 2;
	let $item;
	forOf([
		1,
		2,
		3
	], (item) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(item * mult)}${_el_resume($scope1_id, "a")}`);
			_subscribe($mult__closures, writeScope($scope1_id, {
				f: item,
				_: _scope_with_id($scope0_id)
			}));
			_resume_branch($scope1_id);
		}) });
	});
	list_default({ item: $item });
	_html(`<button>Multiplier: <!>${_escape(mult)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: mult,
		Bd: $mult__closures
	});
	_resume_branch($scope0_id);
}, 1);
