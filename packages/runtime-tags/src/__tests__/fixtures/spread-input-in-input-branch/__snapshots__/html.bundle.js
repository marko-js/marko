// tags/my-btn.marko
var my_btn_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $si__input = _serialize_if($scope0_reason, 0), $sg__input_href = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.href) {
			const $scope1_id = _scope_id();
			_html("<a");
			_attrs_content(input, "a", $scope1_id, "a");
			_html(`</a>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: $si__input && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<button");
			_attrs_content(input, "a", $scope2_id, "button");
			_html(`</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "b1");
			_scope($scope2_id, { _: $si__input && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 0), $sg__input_href, $sg__input_href, 0, 1);
	_serialize_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let href = void 0;
	let count = 0;
	_html(`<button class=link>link</button>${_el_resume($scope0_id, "a")}<button class=inc>inc</button>${_el_resume($scope0_id, "b")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	my_btn_default({
		href,
		class: "btn",
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`Label ${_text_resume($scope1_id, "a", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: href,
		e: count,
		f: $count__closures,
		c: _existing_scope($childScope)
	});
}, 1);
