// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	let p = input.promise;
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/1", p, () => {
		const $scope1_id = _scope_id();
		card_default({ content: c });
	}, 0);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 5), $wi__input_show__OR__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html("<h1>A value the client holds</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			outer_default({
				promise: input.promise,
				content: _content("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id();
					_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "#text/2", input.label, $wg__input_label)}</label>`);
					$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:17"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
					$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_write_if($scope0_reason, 2) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _write_if($scope0_reason, 4) && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		input_promise: $wi__input_show && input.promise,
		input_label: $wi__input_show && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		input_label: ["input.label"]
	});
}, 1);
