// tags/spread-attr-tag.marko
var spread_attr_tag_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button class=inc");
	_attrs_partial_content(input.button, { class: 1 }, "a", $scope0_id, "button");
	_html(`</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// tags/spread-input.marko
var spread_input_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button class=dec");
	_attrs_partial_content(input, { class: 1 }, "a", $scope0_id, "button");
	_html(`</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, {});
});

// tags/run-menu.marko
var run_menu_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=run>run</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.menu });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	spread_attr_tag_default({ button: attrTag({
		onClick: _resume(function() {
			count++;
		}, "a0", $scope0_id),
		content: _content("a4", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", count));
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3");
		}, $scope0_id)
	}) });
	spread_input_default({
		onClick: _resume(function() {
			count--;
		}, "a1", $scope0_id),
		content: _content("a6", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "a", count));
			_subscribe($count__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Ce: 1
			}), "a5");
		}, $scope0_id)
	});
	run_menu_default({ menu: attrTag({ item: attrTag({ run: _resume(function() {
		count += 10;
	}, "a2", $scope0_id) }) }) });
	_scope($scope0_id, {
		d: count,
		e: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
