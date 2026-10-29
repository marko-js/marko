// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/thrower.marko
var thrower_default = _template("__tests__/tags/thrower.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", (() => {
		throw new Error("probe");
	})(), {}, 0, 0, 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			thrower_default({});
		}, void 0, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			card_default({ content: entry });
			_subscribe($for_content__entry__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/outer.marko", "3:37"), "__tests__/tags/outer.marko_2_entry#1:2/subscribe");
		}, void 0, "__tests__/tags/outer.marko_2*content");
		_scope($scope1_id, {
			entry,
			"ClosureScopes:entry/3": $for_content__entry__closures
		}, "__tests__/tags/outer.marko", "3:2", { entry: "3:6" });
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html("<h1>Rows whose catch keeps content</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const uid = _id();
				_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "#text/2", input.label, $wg__input_label)}</label>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:17"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
				$wg__input_label || _resume_branch($scope2_id);
			}, $scope1_id) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
