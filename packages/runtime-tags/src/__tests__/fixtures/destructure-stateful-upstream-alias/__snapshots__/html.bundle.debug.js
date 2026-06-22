// tags/store.marko
var store_default = _template("__tests__/tags/store.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = input.value;
	const $return = {
		list,
		listChange: _resume(function(v) {
			list = v;
		}, "__tests__/tags/store.marko_0/_return", $scope0_id),
		clear: _resume(function() {
			list = [];
		}, "__tests__/tags/store.marko_0/_return2", $scope0_id)
	};
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let store = store_default({ value: ["Learn Marko", "Make a Website"] });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_store/var");
	const { list, clear } = store;
	_html(`<button>Clear</button>${_el_resume($scope0_id, "#button/2")}<ul>`);
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "10:4");
	}, 0, $scope0_id, "#ul/3", 1, 1, 1, "</ul>", 1, 1);
	_script($scope0_id, "__tests__/template.marko_0_clear");
	writeScope($scope0_id, {
		clear,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { clear: "6:16" });
}, 1);
