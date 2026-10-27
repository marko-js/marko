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
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_w__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 4), $wi__input_w = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_w__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.w, (w) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "#text/0", input.note, $wg__input_note)} ${_text_resume($scope2_id, "#text/1", w, $wg__input_w * 2)}</em>`);
			$wi__input_on__OR__input_w__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:6"), "__tests__/template.marko_2_input_note#0:5/subscribe", $wg__input_w || $wg__input_note);
			$wg__input_w || $wg__input_note || $wi__input_on__OR__input_w__OR__input_note && _resume_branch($scope2_id);
		}, _write_guard($scope0_reason, 1));
		$wi__input_on__OR__input_w__OR__input_note && _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_1_input_w#0:4/subscribe", 0);
		$wi__input_on__OR__input_w__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		input_note: input.note,
		input_w: input.w
	}]), 0, $wg__input_on);
	_html("</main>");
	$wi__input_on__OR__input_w__OR__input_note && _scope($scope0_id, {
		input_w: $wi__input_on && input.w,
		input_note: $wi__input_on && input.note,
		"ClosureScopes:input_note/7": $wi__input_note && $input_note__closures,
		"ClosureScopes:input_w/6": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		input_note: ["input.note"]
	});
}, 1);
