// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// tags/show-value.marko
var show_value_default = _template("__tests__/tags/show-value.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/show-value.marko", 0);
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	wrap_default({ content: _content("__tests__/tags/card.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_escape(n)}</b>`);
	}, $scope0_id) });
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html("<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>");
			_set_scope_reason($wg__input_w << 1);
			const $childScope = _peek_scope_id();
			show_value_default({ value: input.w });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_w, 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 0, 0, $wg__input_on__OR__input_n__OR__input_w);
	_html("</main>");
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		input_on: _write_if($scope0_reason, 2) && input.on,
		input_n: _write_if($scope0_reason, 1) && input.n,
		input_w: _write_if($scope0_reason, 0) && input.w
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"],
		input_w: ["input.w"]
	});
}, 1);
