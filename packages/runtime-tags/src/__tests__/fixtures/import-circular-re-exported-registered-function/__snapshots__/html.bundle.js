// tags/chain-b.marko
function bFn(message) {
	return message + "-b";
}
var chain_b_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>b</div>");
});

// tags/chain-a.marko
function aFn(message) {
	return message + "-a";
}
var chain_a_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>a</div>");
});

// template.marko
_resume(bFn, "c0");
_resume(aFn, "b0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let first = aFn;
	let second = bFn;
	let message = "start";
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<div>${_escape(message)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: first,
		d: second,
		e: message
	});
	_resume_branch($scope0_id);
}, 1);
