// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/thrower.marko
var thrower_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", (() => {
		throw new Error("probe");
	})(), {}, 0, 0, 0);
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			_scope_id();
			thrower_default({});
		}, void 0, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			card_default({ content: entry });
			_subscribe($for_content__entry__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			}), "c0");
		}, void 0, "c1");
		_scope($scope1_id, {
			c: entry,
			d: $for_content__entry__closures
		});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "c2");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>Rows whose catch keeps content</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const uid = _id();
				_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "c", input.label, $wg__input_label)}</label>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				$wg__input_label || _resume_branch($scope2_id);
			}, $scope1_id) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
