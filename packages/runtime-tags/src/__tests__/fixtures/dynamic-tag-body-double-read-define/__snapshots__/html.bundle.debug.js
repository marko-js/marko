// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const Wrap = { content: _content_resume("__tests__/template.marko_2*content", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		let open = false;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "#button/0")}<section>`);
		_dynamic_tag($scope2_id, "#text/1", content, {}, 0, 0, $wg__content);
		_html("</section>");
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", content, {}, 0, 0, $wg__content);
				_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope2_id, "#text/2");
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			content,
			open
		}, "__tests__/template.marko", "1:2", {
			content: "1:16",
			open: "2:8"
		});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? Wrap : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:6"), "__tests__/template.marko_1_input_note#0:4/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_on);
	_html("</main>");
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		input_note: $wi__input_on && input.note,
		Wrap: $wi__input_on && Wrap,
		"ClosureScopes:input_note/7": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		Wrap: "1:9"
	});
}, 1);
