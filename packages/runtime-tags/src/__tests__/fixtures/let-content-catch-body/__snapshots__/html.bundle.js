// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $o__closures = /* @__PURE__ */ new Set();
	let o = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (o) {
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id();
				card_default({ content: o });
				_subscribe($o__closures, _scope($scope2_id, {
					a: _existing_scope($childScope),
					Cg: 1
				}), "c0");
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_subscribe($o__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c1");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<p>caught ${_text_resume($scope3_id, "a", err.message, $wg__err_message * 2)}</p>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, void 0, "c2");
	_script($scope0_id, "c3");
	_scope($scope0_id, { g: $o__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html(`<h1>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</h1>`);
	outer_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_resume($scope1_id, "a", input.label, $wg__input_label * 2)}</em>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { f: $input_label__closures });
}, 1);
