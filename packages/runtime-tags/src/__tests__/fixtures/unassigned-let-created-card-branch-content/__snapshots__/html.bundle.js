// tags/wrap.marko
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/show-value.marko
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			wrap_default({ content: _content("b1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<b>${_escape(n)}</b> <i>${_text_resume($scope2_id, "b", input.w, $wg__input_w)}</i>`);
				$wi__input_w && _subscribe($input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_w);
				$wg__input_w || $wi__input_w && _resume_branch($scope2_id);
			}, $scope1_id) });
			_set_scope_reason($wg__input_w << 1);
			const $childScope = _peek_scope_id();
			show_value_default({ value: input.w });
			$wi__input_w && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_w, 0);
	$wi__input_w && _scope($scope0_id, { g: $input_w__closures });
	$wi__input_w && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 0, 0, $wg__input_on__OR__input_n__OR__input_w);
	_html("</main>");
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.on,
		e: _write_if($scope0_reason, 1) && input.n,
		f: _write_if($scope0_reason, 0) && input.w
	});
}, 1);
