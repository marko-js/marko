// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1), $si__input_show__OR__rest = _serialize_if($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 1), $si__rest = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $rest__closures = new Set();
	const $show__closures = new Set();
	const { show, ...rest } = input;
	_try($scope0_id, "#text/0", _content_resume("__tests__/tags/wrapper.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html("<section");
				_attrs_content(rest, "#section/0", $scope2_id, "section");
				_html(`</section>${_el_resume($scope2_id, "#section/0")}`);
				_script($scope2_id, "__tests__/tags/wrapper.marko_2_rest#4");
				_subscribe($si__rest && $rest__closures, _scope($scope2_id, { _: $si__input_show__OR__rest && _scope_with_id($scope1_id) }, "__tests__/tags/wrapper.marko", "4:4", { "EventAttributes:#section/0": ["...rest", "4:24"] }), "__tests__/tags/wrapper.marko_2_rest#4/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
		$si__input_show__OR__rest && _subscribe($si__input_show && $show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "2:2"), "__tests__/tags/wrapper.marko_1_show#3/subscribe", $sg__input_show);
		$sg__input_show || $si__input_show__OR__rest && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/tags/wrapper.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("wrapper loading");
	}, $scope0_id) }) });
	$si__input_show__OR__rest && _scope($scope0_id, {
		rest: $si__input_show && rest,
		"ClosureScopes:rest": $si__rest && $rest__closures,
		"ClosureScopes:show": $si__input_show && $show__closures
	}, "__tests__/tags/wrapper.marko", 0, { rest: "1:19" });
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=layout>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/0")}`);
	const Content = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter("defined"), (v) => {
			const $scope4_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, $scope0_id) };
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html("<div>");
				_attr_content("#div/0", $scope3_id, Content, 0);
				_html("</div>");
				_scope($scope3_id, {}, "__tests__/template.marko", "10:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), "__tests__/template.marko_1_show#4/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("define loading");
	}, $scope0_id) }) });
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	wrapper_default({
		show,
		content: _content_resume("__tests__/template.marko_6*content", () => {
			_scope_reason();
			const $scope6_id = _scope_id();
			_await($scope6_id, "#text/0", resolveAfter("wrapped"), (v) => {
				const $scope7_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, $scope0_id)
	});
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_8*content", () => {
		const $scope8_id = _scope_id();
		_scope_reason();
		layout_default({ content: _content("__tests__/template.marko_10*content", () => {
			_scope_reason();
			const $scope10_id = _scope_id();
			_await($scope10_id, "#text/0", resolveAfter("laid out"), (v) => {
				const $scope11_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, $scope8_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content("__tests__/template.marko_9*content", () => {
		_scope_reason();
		const $scope9_id = _scope_id();
		_html("layout loading");
	}, $scope0_id) }) }, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		Content,
		"ClosureScopes:show": $show__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { Content: "5:9" });
}, 1);
