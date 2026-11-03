// tags/my-for.marko
var my_for_default = _template("__tests__/tags/my-for.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_to__OR__input_content = _write_guard($scope0_reason, 0), $wg__input_to = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, [...args], 0, 1, $wg__input_to__OR__input_content);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			args: _write_if($scope0_reason, 2) && args,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/my-for.marko", "1:2", { args: "1:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_to__OR__input_content, $wg__input_to);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/my-for.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			my_for_default({
				to: 2,
				content: _content("__tests__/template.marko_2*content", (i) => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<button class=r>${_text_resume($scope2_id, "#text/1", count)}</button>${_el_resume($scope2_id, "#button/0")}`);
					_script($scope2_id, "__tests__/template.marko_2");
					_subscribe($count__closures, _scope($scope2_id, {
						i,
						_: _scope_with_id($scope1_id)
					}, "__tests__/template.marko", "3:4", { i: "3:11" }), "__tests__/template.marko_2_count#0:4/subscribe");
				}, $scope1_id)
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/5": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
	$wg__input_show || _resume_branch($scope0_id);
}, 1);
