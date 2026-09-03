// tags/store.marko
var store_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = input.value;
	return {
		list,
		listChange: _resume(function(v) {
			list = v;
		}, "b0", $scope0_id),
		clear: _resume(function() {
			list = [];
		}, "b1", $scope0_id)
	};
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let store = store_default({ value: ["Learn Marko", "Make a Website"] });
	_var($scope0_id, "b", $childScope, "a0");
	let list = store.list;
	_html(`<button>Clear</button>${_el_resume($scope0_id, "c")}<ul>`);
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "d", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		i: store?.clear,
		a: _existing_scope($childScope)
	});
}, 1);
