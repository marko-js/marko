// counter.marko
var counter_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	counter_default({});
	_html(`<div>${_unescaped(counter_default.render({ $global: { renderId: "_2" } }).toString())}</div>`);
}, 1);
