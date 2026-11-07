// tags/menu.marko
var menu_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_option = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.option, (option) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "b", option.label, $wg__input_option)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, { e: option?.onSelect });
	}, 0, $scope0_id, "a", $wg__input_option, $wg__input_option, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([{ id: "a" }, { id: "b" }], (item) => {
		const $scope1_id = _scope_id();
		let $option;
		forOf([1, 2], (n) => $option = attrTags($option, {
			label: item.id + n,
			onSelect: _resume_locals(function() {
				document.getElementById("log").textContent = item.id + n;
			}, "a0", { j: n }, $scope1_id)
		}));
		menu_default({ option: $option });
		_scope($scope1_id, { M: item?.id });
	});
	_html("<div id=log></div>");
}, 1);
