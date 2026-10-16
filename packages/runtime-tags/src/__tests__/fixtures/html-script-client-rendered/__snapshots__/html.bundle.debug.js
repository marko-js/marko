// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<main><button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<script${_attr_nonce()}>
      { const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.nonce;
      main.dataset.inPlace = document.currentScript.parentNode === main; }
    <\/script>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
