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
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 4), $wi__input_show__OR__input_on__OR__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__v__closures = new Set();
			const $childScope = _peek_scope_id();
			let v = counter_default({});
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_v#3/var");
			_dynamic_tag($scope1_id, "#text/2", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_text_resume($scope2_id, "#text/0", input.note, _write_guard($scope0_reason, 4))} ${_text_resume($scope2_id, "#text/1", v, 2)}</em>`);
				_subscribe($if_content__v__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8"), "__tests__/template.marko_2_input_note#0:5/subscribe"));
			}, $scope1_id, ($scope) => [{ input_note: input.note }, {
				v,
				_: $scope($scope0_id)
			}]), 0, _write_guard($scope0_reason, 3));
			_scope($scope1_id, {
				v: _write_if($scope0_reason, 3) && v,
				_: $wi__input_show__OR__input_on__OR__input_note && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"ClosureScopes:v/8": $if_content__v__closures
			}, "__tests__/template.marko", "3:4", { v: "4:14" });
			return 0;
		}
	}, $scope0_id, "#main/0", _write_guard($scope0_reason, 0), $wg__input_show, $wg__input_show, "</main>");
	$wi__input_show__OR__input_on__OR__input_note && _scope($scope0_id, {
		input_on: _write_if($scope0_reason, 2) && input.on,
		input_note: _write_if($scope0_reason, 0) && input.note,
		"ClosureScopes:input_note/7": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_note: ["input.note"]
	});
}, 1);
