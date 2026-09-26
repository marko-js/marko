// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_for_of(input.item, (item) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
				_serialize_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/card.marko", "4:4");
			}, 0, $scope1_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_item: input.item,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_item: ["input.item"],
		open: "1:6"
	});
});

// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 1), $sg__input_text = _serialize_guard($scope0_reason, 2), $si__input_type__OR__input_text = _serialize_if($scope0_reason, 0), $si__input_text = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	let $item;
	forUntil(2, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_resume("__tests__/tags/heading.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`item ${_text_resume($scope1_id, "#text/0", i, $sg__input_type * 2)} ${_text_resume($scope1_id, "#text/1", input.text, $sg__input_text * 2)}`);
			$si__input_type__OR__input_text && _subscribe($si__input_text && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "3:6"), "__tests__/tags/heading.marko_1_input_text#4/subscribe", $sg__input_type || $sg__input_text);
			$sg__input_type || $sg__input_text || $si__input_type__OR__input_text && _resume_branch($scope1_id);
		}, $scope0_id, ($scope) => [{ i }, { input_text: input.text }]) });
	});
	_dynamic_tag($scope0_id, "#text/0", input.type, { item: $item }, 0, 0, $sg__input_type);
	$si__input_type__OR__input_text && _scope($scope0_id, {
		input_text: _serialize_if($scope0_reason, 1) && input.text,
		"ClosureScopes:input_text/5": $si__input_text && $input_text__closures
	}, "__tests__/tags/heading.marko", 0, { input_text: ["input.text"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({
		type: card_default,
		text: "Hello"
	});
}, 1);
