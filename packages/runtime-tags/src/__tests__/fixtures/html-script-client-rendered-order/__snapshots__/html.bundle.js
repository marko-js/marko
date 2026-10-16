// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<script${_attr_nonce()}>document.querySelector("main").dataset.ran += " child";<\/script>`);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<main data-ran><button>show</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.n,
		f: show
	});
}, 1);
