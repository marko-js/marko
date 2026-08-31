// counter.marko
var counter_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=counter>count:${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: n });
	_resume_branch($scope0_id);
});

// layout.marko
var layout_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<main><h1>static heading</h1>");
	counter_default({});
	_html("</main>");
});

// template.marko
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	layout_default({});
}, 1);
