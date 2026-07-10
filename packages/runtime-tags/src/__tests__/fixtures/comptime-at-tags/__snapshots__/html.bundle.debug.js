// tags/my-tabs/index.marko
var my_tabs_default = _template("__tests__/tags/my-tabs/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_tab = _serialize_guard($scope0_reason, 0), $si__input_tab = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=tabs>");
	_for_of(input.tab, (tab) => {
		const $scope1_id = _scope_id();
		_html(`<h2>${_escape(tab.title)}${_el_resume($scope1_id, "#text/0", $sg__input_tab)}</h2><div>`);
		_dynamic_tag($scope1_id, "#text/1", tab.content, {}, 0, 0, $sg__input_tab);
		_html("</div>");
		$si__input_tab && writeScope($scope1_id, {}, "__tests__/tags/my-tabs/index.marko", "2:4");
	}, 0, $scope0_id, "#div/0", $sg__input_tab, $sg__input_tab, $sg__input_tab, "</div>");
	$si__input_tab && writeScope($scope0_id, {}, "__tests__/tags/my-tabs/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_tabs_default({ tab: attrTags(attrTags(attrTag({
		title: "Install",
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("<p>npm install marko</p>");
		})
	}), {
		title: "Run",
		content: _content("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("<p>npm start</p>");
		})
	}), {
		title: "Escape & sons",
		content: _content("__tests__/template.marko_3_content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html("<p>5 &lt; 6 &amp;&amp; \"quotes\" > 'ticks'</p>");
		})
	}) });
}, 1);
