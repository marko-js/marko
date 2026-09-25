// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>pick</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.onPick });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const inc = function() {
		n++;
	};
	child_default({ onPick: _resume(function() {
		inc();
		inc();
	}, "a0", $scope0_id) });
	_html(`<p>${_text_resume($scope0_id, "b", n)}</p>`);
	_scope($scope0_id, { c: n });
}, 1);
