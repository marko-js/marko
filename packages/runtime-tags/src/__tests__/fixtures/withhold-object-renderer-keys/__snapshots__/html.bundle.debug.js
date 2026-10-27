// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, { class: "x" }, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/holder.marko
var holder_default = _template("__tests__/tags/holder.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const frag = { content: _content_resume("__tests__/tags/holder.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<em>held</em>");
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, $wg__input_mode);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $wg__input_mode)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { frag_content: frag?.content }, "__tests__/tags/holder.marko", 0, { frag_content: ["frag.content", "1:9"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let m = false;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	holder_default({ mode: m || input.mode });
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/1", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:6"), "__tests__/template.marko_1_input_note#0:7/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, _write_guard($scope0_reason, 1));
	_html(`</main><button class=m>m</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_mode: input.mode,
		input_note: _write_if($scope0_reason, 1) && input.note,
		m,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_note/10": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_note: ["input.note"],
		m: "3:6"
	});
}, 1);
