// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(input.item)}${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 2))}</span>`);
			_script($scope1_id, "b0");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, 0, 1);
	writeScope($scope0_id, {
		c: input,
		e: _serialize_if($scope0_reason, 1) && input.item
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const log = _el($scope0_id, "a0");
	let items = ["first", "second"];
	let show = false;
	_html(`<button id=show>show</button>${_el_resume($scope0_id, "a")}<button id=clear>clear</button>${_el_resume($scope0_id, "b")}<div></div>${_el_resume($scope0_id, "c")}`);
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
			c: item,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { f: show });
	_resume_branch($scope0_id);
}, 1);
