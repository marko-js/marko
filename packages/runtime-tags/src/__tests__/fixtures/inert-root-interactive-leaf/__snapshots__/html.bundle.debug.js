// counter.marko
var counter_default = _template("__tests__/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=counter>count:${_text_resume($scope0_id, "#text/1", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/counter.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// layout.marko
var layout_default = _template("__tests__/layout.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main><h1>static heading</h1>");
	counter_default({});
	_html("</main>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	layout_default({});
}, 1);
