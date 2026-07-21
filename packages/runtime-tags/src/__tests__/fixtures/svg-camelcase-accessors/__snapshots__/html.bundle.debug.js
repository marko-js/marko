// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let gradId = "grad";
	let show = true;
	_html(`<svg><linearGradient${_attr("id", gradId)}><stop offset=0% stop-color=gold></stop></linearGradient>${_el_resume($scope0_id, "#lineargradient/0")}<clipPath>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<rect width=10 height=10></rect>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "8:6");
			return 0;
		}
	}, $scope0_id, "#clippath/1", 1, 1, 1, "</clipPath>", 1);
	_html(`</svg><button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
	_resume_branch($scope0_id);
}, 1);
