// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/counter.marko
var counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = c;
	_script($scope0_id, "c0");
	_scope($scope0_id, { c });
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_on = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $v__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	const $childScope = _peek_scope_id();
	let v = counter_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", {}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, _write_guard($scope0_reason, 1))} ${_text_resume($scope1_id, "b", v, 2)}</em>`);
		_subscribe($v__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2"));
	}, $scope0_id, ($scope) => [{
		h: v,
		g: input.note
	}]), 0, _write_guard($scope0_reason, 0));
	_html("</main>");
	_scope($scope0_id, {
		g: $wi__input_on && input.note,
		h: $wi__input_on && v,
		a: _existing_scope($childScope),
		i: $wi__input_note && $input_note__closures,
		j: $v__closures
	});
}, 1);
