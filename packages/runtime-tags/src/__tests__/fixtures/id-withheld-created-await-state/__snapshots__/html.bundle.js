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
	let c = input.content;
	let p = input.promise;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", p, () => {
		_scope_id();
		card_default({ content: c });
	}, 0);
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 5), $wi__input_show__OR__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>A value the client holds</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			outer_default({
				promise: input.promise,
				content: _content("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id();
					_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "c", input.label, $wg__input_label)}</label>`);
					$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
					$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_write_if($scope0_reason, 2) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 4) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		e: $wi__input_show && input.promise,
		f: $wi__input_show && input.label,
		h: $wi__input_label && $input_label__closures
	});
}, 1);
