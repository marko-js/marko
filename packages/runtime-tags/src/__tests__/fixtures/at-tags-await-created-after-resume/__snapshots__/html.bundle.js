// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html(`<button id=show>show</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", input.item, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {}, $scope1_id, "a");
		_subscribe($show__closures, _scope($scope1_id, {
			d: item?.content,
			_: _scope_with_id($scope0_id)
		}), "b0");
	});
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: _serialize_if($scope0_reason, 0) && show,
		g: $show__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}`);
	child_default({ item: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`Item ${_text_resume($scope1_id, "a", count, 2)}`);
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
}, 1);
