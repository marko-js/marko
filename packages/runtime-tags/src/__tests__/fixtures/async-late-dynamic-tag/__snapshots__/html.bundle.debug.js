// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html("<section>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/frame.marko", "2:11");
			return 0;
		}
	}, $scope0_id, "#section/0", $wg__input_content, 0);
	_html("</section>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 2), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $wg__input_q = _write_guard($scope0_reason, 3), $wi__input_q = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	const $input_q__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.as, { class: "box" }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "#text/0", v, $wg__input_p)}</em>`);
			$wi__input_p && _scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, $wg__input_p);
		$wi__input_as__OR__input_p && _subscribe($wi__input_p && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6"), "__tests__/template.marko_1_input_p#0:6/subscribe", 0);
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_p: input.p }]), 0, _write_guard($scope0_reason, 1));
	frame_default({ content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_text_resume($scope4_id, "#text/0", w, $wg__input_q)}</b>`);
			$wi__input_q && _scope($scope4_id, {}, "__tests__/template.marko", "6:6");
		}, $wg__input_q);
		$wi__input_q && _subscribe($input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_2_input_q#0:7/subscribe", 0);
		$wi__input_q && _resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_p: _write_if($scope0_reason, 1) && input.p,
		"ClosureScopes:input_p/8": $wi__input_p && $input_p__closures,
		"ClosureScopes:input_q/9": $wi__input_q && $input_q__closures
	}, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1);
