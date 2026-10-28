// tags/toggle.marko
var toggle_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", input.content, {});
	_script($scope0_id, "d0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

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
var outer_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	card_default({ content: o });
	_script($scope0_id, "c0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 3), $wg__input_note = _write_guard($scope0_reason, 6), $wi__input_on__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_note = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
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
	_dynamic_tag($scope0_id, "b", input.on ? toggle_default : "div", {}, _content_resume("a2", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope3_id, "a", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope3_id);
	}, $scope0_id, ($scope) => [{ h: input.note }]), 0, $wg__input_on);
	_html("</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 3) && input.label,
		h: _write_if($scope0_reason, 5) && input.note,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_note && $input_note__closures
	});
}, 1);
