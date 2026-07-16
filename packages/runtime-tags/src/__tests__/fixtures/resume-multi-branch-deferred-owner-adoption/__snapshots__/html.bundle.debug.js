// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(input.item)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope0_reason, 2))}</span>`);
			_script($scope1_id, "__tests__/tags/child.marko_1_input");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, 0, 1);
	writeScope($scope0_id, {
		input,
		input_item: _serialize_if($scope0_reason, 1) && input.item
	}, "__tests__/tags/child.marko", 0, {
		input: 0,
		input_item: ["input.item"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const log = _el($scope0_id, "__tests__/template.marko_0_#div");
	let items = ["first", "second"];
	let show = false;
	_html(`<button id=show>show</button>${_el_resume($scope0_id, "#button/0")}<button id=clear>clear</button>${_el_resume($scope0_id, "#button/1")}<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		child_default({
			item,
			show,
			log
		});
		_html("</div>");
		writeScope($scope1_id, {
			item,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "7:2", { item: "7:6" });
	}, 0, $scope0_id, "#text/3", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
	_resume_branch($scope0_id);
}, 1);
