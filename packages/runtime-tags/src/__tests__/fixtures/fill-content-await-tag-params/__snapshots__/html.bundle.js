// tags/frame.marko
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/inner.marko
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = /* @__PURE__ */ new Set();
	const $input_first__closures = /* @__PURE__ */ new Set();
	const $showSecond__closures = /* @__PURE__ */ new Set();
	let showSecond = false;
	_html("<main>");
	frame_default({ content: _content("c3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		});
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c0", 0), "c1", 0), "c2", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "c4");
	_scope($scope0_id, {
		e: input.second,
		f: input.first,
		g: showSecond,
		h: $wi__input_second && $input_second__closures,
		i: $wi__input_first && $input_first__closures,
		j: $showSecond__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 2) << 1 | _write_guard($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id();
	inner_default({
		first: input.first,
		second: input.second
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
