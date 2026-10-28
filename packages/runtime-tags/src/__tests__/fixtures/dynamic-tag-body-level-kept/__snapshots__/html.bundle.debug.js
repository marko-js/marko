// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
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

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = c;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { c }, "__tests__/tags/counter.marko", 0, { c: "1:6" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_on = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $v__closures = new Set();
	_html("<main>");
	const $childScope = _peek_scope_id();
	let v = counter_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#7/var");
	_dynamic_tag($scope0_id, "#text/2", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, _write_guard($scope0_reason, 1))} ${_text_resume($scope1_id, "#text/1", v, 2)}</em>`);
		_subscribe($v__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_1_input_note#0:6/subscribe"));
	}, $scope0_id, ($scope) => [{
		v,
		input_note: input.note
	}]), 0, _write_guard($scope0_reason, 0));
	_html("</main>");
	_scope($scope0_id, {
		input_note: $wi__input_on && input.note,
		v: $wi__input_on && v,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_note/8": $wi__input_note && $input_note__closures,
		"ClosureScopes:v/9": $v__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		v: "3:12"
	});
}, 1);
