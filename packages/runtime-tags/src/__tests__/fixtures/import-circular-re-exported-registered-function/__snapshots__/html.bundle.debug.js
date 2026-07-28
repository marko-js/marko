// tags/chain-b.marko
function bFn(message) {
	return message + "-b";
}
var chain_b_default = _template("__tests__/tags/chain-b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html_opens("__tests__/tags/chain-b.marko:7:1"), _html("<div>b</div>");
});

// tags/chain-a.marko
function aFn(message) {
	return message + "-a";
}
var chain_a_default = _template("__tests__/tags/chain-a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html_opens("__tests__/tags/chain-a.marko:7:1"), _html("<div>a</div>");
});

// template.marko
_resume(bFn, "__tests__/tags/chain-b.marko_0/export/bFn");
_resume(aFn, "__tests__/tags/chain-a.marko_0/export/aFn");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let first = aFn;
	let second = bFn;
	let message = "start";
	_html_opens("__tests__/template.marko:7:1", "__tests__/template.marko:8:1"), _html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<div>${_escape(message)}${_el_resume($scope0_id, "#text/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		first,
		second,
		message
	}, "__tests__/template.marko", 0, {
		first: "4:6",
		second: "5:6",
		message: "6:6"
	});
	_resume_branch($scope0_id);
}, 1);
