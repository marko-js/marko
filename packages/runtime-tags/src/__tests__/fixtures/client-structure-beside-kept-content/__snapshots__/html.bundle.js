// tags/card.marko
var card_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// tags/badge.marko
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 0), $wi__input_tag = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.tag, $wg__input_tag)}</span>`);
	_if(() => {
		if (input.tag === "t3") {
			const $scope1_id = _scope_id();
			_html("<em>three</em>");
			$wi__input_tag && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_tag, $wg__input_tag, 0, 0, 1);
	$wi__input_tag && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let show = true;
	let items = [1, 2];
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_label);
	}, $scope0_id) });
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_tag << 1);
			const $childScope = _peek_scope_id();
			badge_default({ tag: input.tag });
			_scope($scope2_id, { a: $wi__input_tag && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_for_of(items, (item) => {
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__input_tag << 1);
		const $childScope2 = _peek_scope_id();
		badge_default({ tag: input.tag });
		_scope($scope3_id, { a: $wi__input_tag && _existing_scope($childScope2) });
	}, 0, $scope0_id, "c");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: input.tag,
		i: show,
		k: $wi__input_label && $input_label__closures
	});
}, 1);
