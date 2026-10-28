// tags/toggle.marko
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", open && input.content, {});
	_script($scope0_id, "__tests__/tags/toggle.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/toggle.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	card_default({ content: o });
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 3), $wg__input_note = _write_guard($scope0_reason, 6), $wi__input_on__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_note = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_note__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:17"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/1", input.on ? toggle_default : "div", {}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<em>${_text_resume($scope3_id, "#text/0", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:6"), "__tests__/template.marko_3_input_note#0:7/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope3_id);
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_on);
	_html("</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 3) && input.label,
		input_note: _write_if($scope0_reason, 5) && input.note,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_note/9": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_note: ["input.note"]
	});
}, 1);
