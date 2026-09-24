// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>pick</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, { input_onPick: input.onPick }, "__tests__/tags/child.marko", 0, { input_onPick: ["input.onPick"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const inc = function() {
		n++;
	};
	const twice = _resume(function() {
		inc();
		inc();
	}, "__tests__/template.marko_0/twice", $scope0_id);
	child_default({ onPick: twice });
	_html(`<p>${_text_resume($scope0_id, "#text/1", n)}</p>`);
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
