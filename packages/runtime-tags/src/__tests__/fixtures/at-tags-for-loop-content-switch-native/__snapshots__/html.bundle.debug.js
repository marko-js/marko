// tags/tabs.marko
var tabs_default = _template("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let i = 0;
	const tabs = [...input.tab ?? []];
	_for_of(tabs, (tab, j) => {
		const $scope1_id = _scope_id();
		_html(`<button${_attr("data-tab", j)}>${_text_resume($scope1_id, "#text/1", tab.title, $wg__input_tab)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/tabs.marko_1");
		_scope($scope1_id, {
			"#LoopKey": j,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/tabs.marko", "3:2", { "#LoopKey": "3:11" });
	}, 0, $scope0_id, "#text/0", $wg__input_tab, $wg__input_tab, 0, 0, 1);
	_html("<section");
	_attrs_content(tabs[i], "#section/1", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "#section/1")}`);
	_script($scope0_id, "__tests__/tags/tabs.marko_0_i#5_tabs#6");
	_scope($scope0_id, {
		i: _write_if($scope0_reason, 0) && i,
		tabs
	}, "__tests__/tags/tabs.marko", 0, {
		i: "1:6",
		tabs: "2:8",
		"EventAttributes:#section/1": ["...tabs[i]", "6:13"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $tab;
	forOf(["a", "b"], (t) => {
		$tab = attrTags($tab, {
			title: t,
			content: _content_resume("__tests__/template.marko_1*content", () => {
				const $scope1_reason = _scope_reason();
				const $scope1_id = _scope_id();
				let count = 0;
				_html(`<button class=inc>${_text_resume($scope1_id, "#text/1", t, _write_guard($scope1_reason, 0))}: ${_text_resume($scope1_id, "#text/2", count, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
				_script($scope1_id, "__tests__/template.marko_1");
				_scope($scope1_id, { count }, "__tests__/template.marko", "3:6", { count: "4:12" });
			}, $scope0_id, () => [{ t }])
		});
	});
	tabs_default({ tab: $tab });
}, 1);
