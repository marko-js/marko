// tags/card.marko
function boom() {
	throw new Error("boom");
}
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const $fail__closures = new Set();
	let fail = false;
	_html(`<button id=toggle>fail</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_if(() => {
			if (fail) {
				const $scope4_id = _scope_id();
				_html(_escape(boom()));
				_scope($scope4_id, {}, "__tests__/tags/card.marko", "13:4");
				return 0;
			}
		}, $scope3_id, "#text/0");
		_subscribe($fail__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "6:2"), "__tests__/tags/card.marko_3_fail#0:5/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err = _write_guard($scope1_reason, 0), $wg__err_message = _write_guard($scope1_reason, 1);
		const $scope1_id = _scope_id();
		_html(`<i>${_text_resume($scope1_id, "#text/0", err.message, $wg__err_message)}</i>`);
		_if(() => {
			if (err) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
				_subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "9:6"), "__tests__/tags/card.marko_2_input_content#0:4/subscribe", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__err, $wg__err);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "7:4");
	}, void 0, "__tests__/tags/card.marko_1*content");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		"ClosureScopes:input_content/6": $wi__input_content && $input_content__closures,
		"ClosureScopes:fail/7": $fail__closures
	}, "__tests__/tags/card.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_1_input_note#0:4/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_on);
	_html("</main>");
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		input_note: _write_if($scope0_reason, 1) && input.note,
		"ClosureScopes:input_note/5": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
