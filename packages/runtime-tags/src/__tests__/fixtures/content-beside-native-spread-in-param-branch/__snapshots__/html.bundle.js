// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "c0");
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && input.content });
});

// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_value = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3 | $wg__input_show << 5);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("b1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", input.value, $wg__input_value));
			$wi__input_show__OR__input_value && _subscribe($wi__input_value && $input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", $wg__input_value);
		}, $scope0_id)
	});
	$wi__input_show__OR__input_value && _scope($scope0_id, {
		e: $wi__input_show && input.value,
		f: $wi__input_value && $input_value__closures,
		a: $wi__input_show && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	outer_default({
		value: x,
		show: false
	});
	_html(`<button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: x,
		a: _existing_scope($childScope)
	});
}, 1);
