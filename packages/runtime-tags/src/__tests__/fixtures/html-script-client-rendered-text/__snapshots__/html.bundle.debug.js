// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let count = 1;
	_html(`<main><button class=show>show</button>${_el_resume($scope0_id, "#button/0")}<button class=inc>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<script${_attr_nonce()}>${_escape_script(`document.querySelector("main").dataset.count = ${_to_text(count)};`)}<\/script>${_el_resume($scope1_id, "#script/0")}`);
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
