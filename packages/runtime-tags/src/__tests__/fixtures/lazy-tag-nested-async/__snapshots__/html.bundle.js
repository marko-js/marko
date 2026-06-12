// grand-child.marko
var grand_child_default = _template("b", (input) => {
	const $sg__input_value = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let n = input.value;
	_html(`<button id=grand>grand:<!>${_escape(n)}${_el_resume($scope0_id, "b")}:${_sep($sg__input_value)}${_escape(input.value)}${_el_resume($scope0_id, "c", $sg__input_value)}</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "d", resolveAfter(20, 2), (v) => {
		_scope_id();
		_html(`<span id=grand-await>${_escape(v)}</span>`);
	}, 0);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { h: n });
	_resume_branch($scope0_id);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = input.value;
	_html(`<button id=child>child:<!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "c", resolveAfter(10, 1), (value) => {
		const $scope1_id = _scope_id();
		_html(`<span id=child-await>${_escape(value)}</span>`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		$GrandChild_withLoadAssets({ value: count });
		_subscribe($count__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			c: _existing_scope($childScope)
		}));
		_resume_branch($scope1_id);
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: count,
		Bg: $count__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=before>before</div>");
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ value: input.value });
	_html("<div id=after>after</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
