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

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 3), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = new Set();
			const x = input.note + "!";
			_html(`<div></div>${_el_resume($scope1_id, "#div/0")}`);
			_dynamic_tag($scope1_id, "#text/1", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_text_resume($scope2_id, "#text/0", x, $wg__input_note)}</em>`);
				$wi__input_note__OR__input_on && _subscribe($wi__input_note && $if_content__x__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:8"), "__tests__/template.marko_2_x#1:2/subscribe", $wg__input_note);
				$wg__input_note || $wi__input_note__OR__input_on && _resume_branch($scope2_id);
			}, $scope1_id), 0, _write_guard($scope0_reason, 4));
			_script($scope1_id, "__tests__/template.marko_1_x#2");
			_scope($scope1_id, {
				x,
				_: $wi__input_note__OR__input_on && _scope_with_id($scope0_id),
				"ClosureScopes:x/8": $wi__input_note && $if_content__x__closures
			}, "__tests__/template.marko", "3:4", { x: "4:12" });
			return 0;
		}
	}, $scope0_id, "#main/0", _write_guard($scope0_reason, 1), $wg__input_show, $wg__input_show, "</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_note: input.note,
		input_on: input.on
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_on: ["input.on"]
	});
}, 1);
