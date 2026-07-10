// tags/my-tabs/index.marko
var my_tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_tab = _serialize_guard($scope0_reason, 0), $si__input_tab = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=tabs>");
	_for_of(input.tab, (tab) => {
		const $scope1_id = _scope_id();
		_html(`<h2>${_escape(tab.title)}${_el_resume($scope1_id, "a", $sg__input_tab)}</h2><div>`);
		_dynamic_tag($scope1_id, "b", tab.content, {}, 0, 0, $sg__input_tab);
		_html("</div>");
		$si__input_tab && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_tab, $sg__input_tab, $sg__input_tab, "</div>");
	$si__input_tab && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	my_tabs_default({ tab: attrTags(attrTags(attrTag({
		title: "Install",
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<p>npm install marko</p>");
		})
	}), {
		title: "Run",
		content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("<p>npm start</p>");
		})
	}), {
		title: "Escape & sons",
		content: _content("a2", () => {
			_scope_reason();
			_scope_id();
			_html("<p>5 &lt; 6 &amp;&amp; \"quotes\" > 'ticks'</p>");
		})
	}) });
}, 1);
