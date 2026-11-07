// tags/menu.marko
var menu_default = _template("__tests__/tags/menu.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_option = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.option, (option) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "#text/1", option.label, $wg__input_option)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/menu.marko_1");
		_scope($scope1_id, { option_onSelect: option?.onSelect }, "__tests__/tags/menu.marko", "1:2", { option_onSelect: ["option.onSelect", "1:6"] });
	}, 0, $scope0_id, "#text/0", $wg__input_option, $wg__input_option, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/menu.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: "a" }, { id: "b" }];
	forOf(items, (item) => {
		const $scope1_id = _scope_id();
		let $option;
		forOf([1, 2], (n) => $option = attrTags($option, {
			label: item.id + n,
			onSelect: _resume_locals(function() {
				document.getElementById("log").textContent = item.id + n;
			}, "__tests__/template.marko_1/onSelect", { "n/9": n }, $scope1_id)
		}));
		menu_default({ option: $option });
		_scope($scope1_id, { "#LoopKey": item?.id }, "__tests__/template.marko", "2:2", { "#LoopKey": ["item.id", "2:6"] });
	});
	_html("<div id=log></div>");
}, 1);
