// tags/card.marko
var card_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.item,
		f: open
	});
});

// tags/heading.marko
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 1), $sg__input_text = _serialize_guard($scope0_reason, 2), $si__input_type__OR__input_text = _serialize_if($scope0_reason, 0), $si__input_text = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	let $item;
	forUntil(2, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_resume("c1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`item ${_text_resume($scope1_id, "a", i, $sg__input_type * 2)} ${_text_resume($scope1_id, "b", input.text, $sg__input_text * 2)}`);
			$si__input_type__OR__input_text && _subscribe($si__input_text && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c0", $sg__input_type || $sg__input_text);
			$sg__input_type || $sg__input_text || $si__input_type__OR__input_text && _resume_branch($scope1_id);
		}, $scope0_id, ($scope) => [{ 2: i }, { e: input.text }]) });
	});
	_dynamic_tag($scope0_id, "a", input.type, { item: $item }, 0, 0, $sg__input_type);
	$si__input_type__OR__input_text && _scope($scope0_id, {
		e: _serialize_if($scope0_reason, 1) && input.text,
		f: $si__input_text && $input_text__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({
		type: card_default,
		text: "Hello"
	});
}, 1);
