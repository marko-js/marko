// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_type = _serialize_if($scope0_reason, 0), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_type__closures = new Set();
	let $item;
	forUntil(2, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("__tests__/tags/heading.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`item ${_escape(i)}`);
				$si__input_type && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/heading.marko", "3:15");
				$si__input_type && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ i }]), 0, $sg__input_type);
			$si__input_type && _subscribe($input_type__closures, _scope($scope1_id, {
				i,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/heading.marko", "3:6", { i: "2:8" }), "__tests__/tags/heading.marko_1_input_type#3/subscribe", $sg__input_type);
			$sg__input_type || $si__input_type && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	list_default({ item: $item });
	$si__input_type && _scope($scope0_id, { "ClosureScopes:input_type": $input_type__closures }, "__tests__/tags/heading.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({ type: card_default });
}, 1);
