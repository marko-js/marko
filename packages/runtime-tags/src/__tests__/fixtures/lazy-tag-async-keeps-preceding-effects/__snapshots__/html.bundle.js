// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", resolveAfter("done", 1), (v) => {
		_scope_id();
		_html(`<span>${_escape(v)}</span>`);
	}, 0);
});

// tags/counter.marko
var counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { c: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a", [{ type: "idle" }]);
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	counter_default({});
	$Child_withLoadAssets({});
}, 1);
