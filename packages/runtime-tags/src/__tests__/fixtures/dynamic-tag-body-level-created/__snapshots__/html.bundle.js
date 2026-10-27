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
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 4), $wi__input_show__OR__input_on__OR__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__v__closures = /* @__PURE__ */ new Set();
			const $childScope = _peek_scope_id();
			let v = counter_default({});
			_var($scope1_id, "b", $childScope, "a0");
			_dynamic_tag($scope1_id, "c", input.on ? card_default : "div", {}, _content_resume("a1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", input.note, _write_guard($scope0_reason, 4))} ${_text_resume($scope2_id, "b", v, 2)}</em>`);
				_subscribe($if_content__v__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2"));
			}, $scope1_id, ($scope) => [{ f: input.note }, {
				d: v,
				_: $scope($scope0_id)
			}]), 0, _write_guard($scope0_reason, 3));
			_scope($scope1_id, {
				d: _write_if($scope0_reason, 3) && v,
				_: $wi__input_show__OR__input_on__OR__input_note && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				i: $if_content__v__closures
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, $wg__input_show, "</main>");
	$wi__input_show__OR__input_on__OR__input_note && _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.on,
		f: _write_if($scope0_reason, 0) && input.note,
		h: $wi__input_note && $input_note__closures
	});
}, 1);
