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
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			wrap_default({ content: _content("__tests__/tags/card.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<b>${_escape(n)}</b> <i>${_text_resume($scope2_id, "#text/1", input.w, $wg__input_w)}</i>`);
				$wi__input_w && _subscribe($input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "3:4"), "__tests__/tags/card.marko_2_input_w#0:4/subscribe", $wg__input_w);
				$wg__input_w || $wi__input_w && _resume_branch($scope2_id);
			}, $scope1_id) });
			_set_scope_reason($wg__input_w << 1);
			const $childScope = _peek_scope_id();
			show_value_default({ value: input.w });
			$wi__input_w && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/tags/card.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_w, 0);
	$wi__input_w && _scope($scope0_id, { "ClosureScopes:input_w/6": $input_w__closures }, "__tests__/tags/card.marko", 0);
	$wi__input_w && _resume_branch($scope0_id);
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
