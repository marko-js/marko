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
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = new Set();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (v) {
					const $scope3_id = _scope_id();
					_set_scope_reason(2);
					const $childScope = _peek_scope_id();
					card_default({ content: entry });
					_subscribe($for_content__entry__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/tags/outer.marko", "3:46"), "__tests__/tags/outer.marko_3_entry#1:2/subscribe");
					return 0;
				}
			}, $scope2_id, "#text/0", $wg__input_promise, $wg__input_promise, 0, 0, 1);
			_scope($scope2_id, {}, "__tests__/tags/outer.marko", "3:22");
		});
		_scope($scope1_id, {
			entry: _write_if($scope0_reason, 0) && entry,
			"ClosureScopes:entry/8": $for_content__entry__closures
		}, "__tests__/tags/outer.marko", "3:2", { entry: "3:6" });
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { input_promise: input.promise }, "__tests__/tags/outer.marko", 0, { input_promise: ["input.promise"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_promise__OR__input_label = _write_if($scope0_reason, 1), $wg__input_promise = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html("<h1>Rows that wait on a value</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_promise << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				promise: input.promise,
				content: _content_resume("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id();
					_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "#text/2", input.label, $wg__input_label)}</label>`);
					$wi__input_show__OR__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:17"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
					$wg__input_label || $wi__input_show__OR__input_promise__OR__input_label && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			$wi__input_show__OR__input_promise__OR__input_label && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _write_if($scope0_reason, 3) && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_promise__OR__input_label && _scope($scope0_id, {
		input_promise: _write_if($scope0_reason, 2) && input.promise,
		input_label: _write_if($scope0_reason, 0) && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		input_label: ["input.label"]
	});
}, 1);
