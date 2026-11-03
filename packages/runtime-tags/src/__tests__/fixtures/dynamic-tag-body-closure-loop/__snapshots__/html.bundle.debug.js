// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
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
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 1), $wi__input_n__OR__input_type = _write_if($scope0_reason, 0), $wg__input_type = _write_guard($scope0_reason, 2), $wi__input_type = _write_if($scope0_reason, 2), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_type__closures = new Set();
	_set_scope_reason($wg__input_n << 1);
	let $item;
	forUntil(input.n, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("__tests__/tags/heading.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $wg__i = _write_guard($scope1_reason, 0), $wi__i = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $item_content__i__closures = new Set();
			_dynamic_tag($scope1_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`item ${_text_resume($scope2_id, "#text/0", i, $wg__i * 2)} of ${_text_resume($scope2_id, "#text/1", input.n, $wg__input_n * 2)}`);
				($wi__input_n__OR__input_type || $wi__i) && _subscribe($wi__i && $item_content__i__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/heading.marko", "3:15"), "__tests__/tags/heading.marko_2_input_n#0:3/subscribe", $wg__input_n || $wg__i), "__tests__/tags/heading.marko_2_i#1:1/subscribe", $wg__input_n || $wg__i);
				$wg__input_n || $wg__i || ($wi__input_n__OR__input_type || $wi__i) && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ input_n: input.n }, {
				i,
				_: $scope($scope0_id)
			}]), 0, $wg__input_type);
			($wi__input_n__OR__input_type || $wi__i) && _subscribe($wi__input_type && $input_type__closures, _scope($scope1_id, {
				i: $wi__input_type && i,
				_: $wi__input_n__OR__input_type && _scope_with_id($scope0_id),
				"ClosureScopes:i/7": $wi__i && $item_content__i__closures
			}, "__tests__/tags/heading.marko", "3:6", { i: "2:8" }), "__tests__/tags/heading.marko_1_input_type#0:4/subscribe", $wg__input_type);
			$wg__input_type || ($wi__input_n__OR__input_type || $wi__i) && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	$wi__input_n__OR__input_type && _scope($scope0_id, {
		input_n: $wi__input_type && input.n,
		input_type: $wi__input_n && input.type,
		"ClosureScopes:input_n/5": $wi__input_n && $input_n__closures,
		"ClosureScopes:input_type/6": $wi__input_type && $input_type__closures,
		"#childScope/0": $wi__input_n && _existing_scope($childScope)
	}, "__tests__/tags/heading.marko", 0, {
		input_n: ["input.n"],
		input_type: ["input.type"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_n << 1 | $wg__input_n << 3);
	const $childScope = _peek_scope_id();
	heading_default({
		type: card_default,
		n: input.n
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
