// tags/tabs.marko
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let i = 0;
	const tabs = [...input.tab ?? []];
	_for_of(tabs, (tab, j) => {
		const $scope1_id = _scope_id();
		_html(`<button${_attr("data-tab", j)}>${_text_resume($scope1_id, "b", tab.title, $wg__input_tab)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {
			M: j,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_tab, $wg__input_tab, 0, 0, 1);
	_html("<div>");
	_dynamic_tag($scope0_id, "b", tabs[i].content, {});
	_html("</div>");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && i,
		g: tabs
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $tab;
	forOf(["a", "b"], (t) => {
		$tab = attrTags($tab, {
			title: t,
			content: _content_resume("a1", () => {
				const $scope1_reason = _scope_reason();
				const $scope1_id = _scope_id();
				let count = 0;
				_html(`<button class=inc>${_text_resume($scope1_id, "b", t, _write_guard($scope1_reason, 0))}: ${_text_resume($scope1_id, "c", count, 2)}</button>${_el_resume($scope1_id, "a")}`);
				_script($scope1_id, "a0");
				_scope($scope1_id, { e: count });
			}, $scope0_id, () => [{ 3: t }])
		});
	});
	tabs_default({ tab: $tab });
}, 1);
