// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	card_default({ content: o });
	_script($scope0_id, "d0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// tags/host.marko
var host_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 4);
	const $wg__input_label = _write_guard($scope0_reason, 6), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.native ? "section" : input.wrap, {}, _content_resume("c0", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<i>${_text_resume($scope3_id, "a", input.label, $wg__input_label)}</i>`);
				$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "c1", $wg__input_label);
				$wg__input_label || $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _resume_branch($scope3_id);
			}, $scope2_id, ($scope) => [{ i: input.label }, { _: $scope($scope0_id) }]), 0, $wg__input_wrap__OR__input_native);
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", _write_guard($scope0_reason, 2), _write_guard($scope0_reason, 5));
	_script($scope0_id, "c2");
	_scope($scope0_id, {
		f: input.wrap,
		h: _write_if($scope0_reason, 0) && input.native,
		i: _write_if($scope0_reason, 2) && input.label,
		j: flag,
		m: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 3), $wg__input_show__OR__input_label__OR__input_native = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_html("<main>");
	_set_scope_reason($wg__input_show << 1 | _write_guard($scope0_reason, 5) << 3 | _write_guard($scope0_reason, 1) << 5 | $wg__input_show__OR__input_label__OR__input_native << 7 | $wg__input_show << 11 | $wg__input_label << 13);
	const $childScope = _peek_scope_id();
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a3", ({ content }) => {
			const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "a")}`);
			_if(() => {
				{
					const $scope4_id = _scope_id();
					_dynamic_tag($scope4_id, "a", content, {}, 0, 0, $wg__content);
					_scope($scope4_id, {});
					return 0;
				}
			}, $scope3_id, "b");
			_script($scope3_id, "a2");
			_scope($scope3_id, {
				e: content,
				f: open
			});
		}, $scope0_id) })
	});
	_html("</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 3) && input.label,
		h: $wi__input_label && $input_label__closures,
		b: _existing_scope($childScope)
	});
}, 1);
