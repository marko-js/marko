// tags/wrapper.marko
var wrapper_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1), $si__input_show__OR__rest = _serialize_if($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 1), $si__rest = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $rest__closures = /* @__PURE__ */ new Set();
	const $show__closures = /* @__PURE__ */ new Set();
	const { show, ...rest } = input;
	_try($scope0_id, "a", _content_resume("d3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html("<section");
				_attrs_content(rest, "a", $scope2_id, "section");
				_html(`</section>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "d0");
				_subscribe($si__rest && $rest__closures, _scope($scope2_id, { _: $si__input_show__OR__rest && _scope_with_id($scope1_id) }), "d1");
				return 0;
			}
		}, $scope1_id, "a", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
		$si__input_show__OR__rest && _subscribe($si__input_show && $show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "d4", $sg__input_show);
		$sg__input_show || $si__input_show__OR__rest && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("d2", () => {
		_scope_reason();
		_scope_id();
		_html("wrapper loading");
	}, $scope0_id) }) });
	$si__input_show__OR__rest && _scope($scope0_id, {
		e: $si__input_show && rest,
		g: $si__rest && $rest__closures,
		f: $si__input_show && $show__closures
	});
});

// tags/layout.marko
var layout_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=layout>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/base-button.marko
var base_button_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button");
	_attrs_content(input, "a", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html(`<button>show</button>${_el_resume($scope0_id, "a")}`);
	const Content = { content: _content_resume("a0", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_await($scope3_id, "a", resolveAfter("defined"), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, $scope0_id) };
	_try($scope0_id, "b", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("define loading");
	}, $scope0_id) }) });
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	wrapper_default({
		show,
		content: _content_resume("a4", () => {
			_scope_reason();
			_await(_scope_id(), "a", resolveAfter("wrapped"), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, $scope0_id)
	});
	_try($scope0_id, "d", _content_resume("a7", () => {
		const $scope10_id = _scope_id();
		_scope_reason();
		layout_default({ content: _content("a5", () => {
			_scope_reason();
			_await(_scope_id(), "a", resolveAfter("laid out"), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, $scope10_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
		_scope_reason();
		_scope_id();
		_html("layout loading");
	}, $scope0_id) }) });
	_try($scope0_id, "e", _content_resume("a9", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_if(() => {}, $scope2_id, "a", 1, 1, 1, 0, 1);
		_subscribe($show__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ci: 1
		}), "a10");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a8", () => {
		_scope_reason();
		_scope_id();
		_html("layout attr loading");
	}, $scope0_id) }) });
	_try($scope0_id, "f", _content_resume("a13", () => {
		const $scope15_id = _scope_id();
		_scope_reason();
		_await($scope15_id, "a", resolveAfter("pressed"), (v) => {
			base_button_default({ content: _content("a11", () => {
				_scope_reason();
				_scope_id();
				_html(_escape(v));
			}, _scope_id()) });
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a12", () => {
		_scope_reason();
		_scope_id();
		_html("button loading");
	}, $scope0_id) }) });
	_script($scope0_id, "a14");
	_scope($scope0_id, {
		h: Content,
		i: $show__closures,
		c: _existing_scope($childScope)
	});
}, 1);
