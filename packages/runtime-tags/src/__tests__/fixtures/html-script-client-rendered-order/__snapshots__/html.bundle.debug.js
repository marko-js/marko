// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<script${_attr_nonce()}>document.querySelector("main").dataset.ran += " child";<\/script>`);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<main data-ran><button>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<script${_attr_nonce()}${_attr("data-n", input.n)}>document.querySelector("main").dataset.ran += " " + document.currentScript.dataset.n;<\/script>${_el_resume($scope1_id, "#script/0", $wg__input_n)}<script${_attr_nonce()}>document.querySelector("main").dataset.ran += " static";<\/script>`);
			child_default({});
			forOf([1, 2], (i) => {
				const $scope2_id = _scope_id();
				_html(`<script${_attr_nonce()}${_attr("data-i", i)}>document.querySelector("main").dataset.ran += " row" + document.currentScript.dataset.i;<\/script>`);
			});
			_html(`<script${_attr_nonce()}>document.querySelector("main").dataset.ran += " last";<\/script>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0_show#5");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_n: input.n,
		show
	}, "__tests__/template.marko", 0, {
		input_n: ["input.n"],
		show: "1:6"
	});
}, 1);
