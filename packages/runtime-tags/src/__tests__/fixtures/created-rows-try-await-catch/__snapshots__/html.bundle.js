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
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				const $scope4_id = _scope_id();
				_set_scope_reason(2);
				const $childScope2 = _peek_scope_id();
				card_default({ content: entry });
				_subscribe($for_content__entry__closures, _scope($scope4_id, {
					a: _existing_scope($childScope2),
					Ci: 1
				}), "c1");
			});
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c2", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			card_default({ content: entry });
			_subscribe($for_content__entry__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			}), "c0");
		}, void 0, "c3");
		_scope($scope1_id, {
			c: entry,
			i: $for_content__entry__closures
		});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "c4");
	_scope($scope0_id, {
		f: input.promise,
		h: $wi__input_promise && $input_promise__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 3), $wg__input_promise = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_promise << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				promise: input.promise,
				content: _content_resume("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id();
					_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "c", input.label, $wg__input_label)}</label>`);
					_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
					$wg__input_label || _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.promise,
		f: input.label,
		h: $wi__input_label && $input_label__closures
	});
}, 1);
