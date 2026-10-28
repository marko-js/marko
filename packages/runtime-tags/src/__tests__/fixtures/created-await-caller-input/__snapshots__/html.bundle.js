// tags/frame.marko
var frame_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// under-wrapper.marko
var under_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = /* @__PURE__ */ new Set();
	const $input_first__closures = /* @__PURE__ */ new Set();
	const $showSecond__closures = /* @__PURE__ */ new Set();
	let showSecond = false;
	_html("<main>");
	frame_default({ content: _content("b3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		});
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", 0), "b1", 0), "b2", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "b4");
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
	const $scope0_reason = _scope_reason(), $wi__input_first__OR__input_second = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 4) << 1 | _write_guard($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id();
			under_wrapper_default({
				first: input.first,
				second: input.second
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_first__OR__input_second && _scope_with_id($scope0_id),
				a: $wi__input_first__OR__input_second && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.first,
		f: input.second
	});
}, 1);
