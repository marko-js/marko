// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix__OR__input_level = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "#text/0", input.prefix + input.level, {}, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>${_text_mark($scope1_id, "#text/1", count)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_1_count#0:6/subscribe");
	}, $scope0_id), 0, $wg__input_prefix__OR__input_level);
	_scope($scope0_id, {
		input_prefix: _write_if($scope0_reason, 2) && input.prefix,
		input_level: _write_if($scope0_reason, 1) && input.level,
		count,
		"ClosureScopes:count/7": $count__closures
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		input_level: ["input.level"],
		count: "1:6"
	});
	$wg__input_prefix__OR__input_level || _resume_branch($scope0_id);
}, 1);
