// tags/keeper.marko
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let content = input.content;
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", content, {});
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_scope($scope0_id, {
		content,
		show
	}, "__tests__/tags/keeper.marko", 0, {
		content: "1:6",
		show: "1:34"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix = _write_guard($scope0_reason, 0), $wi__input_prefix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = new Set();
	keeper_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>${_text_resume($scope1_id, "#text/1", input.prefix + " " + uid, $wg__input_prefix)}</label><input${_attr("id", uid)}${_attr("title", input.prefix + " " + uid)}>${_el_resume($scope1_id, "#input/2", $wg__input_prefix)}`);
		_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope1_id, {
			uid: $wi__input_prefix && uid,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { uid: "2:6" }), "__tests__/template.marko_1_input_prefix#0:3/subscribe", $wg__input_prefix);
		$wg__input_prefix || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		input_prefix: input.prefix,
		"ClosureScopes:input_prefix/4": $wi__input_prefix && $input_prefix__closures
	}, "__tests__/template.marko", 0, { input_prefix: ["input.prefix"] });
}, 1);
