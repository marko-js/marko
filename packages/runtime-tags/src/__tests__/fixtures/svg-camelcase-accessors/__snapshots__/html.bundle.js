// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let gradId = "grad";
	let show = true;
	_html(`<svg><linearGradient${_attr("id", gradId)}><stop offset=0% stop-color=gold></stop></linearGradient>${_el_resume($scope0_id, "a")}<clipPath>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<rect width=10 height=10></rect>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, "</clipPath>", 1);
	_html(`</svg><button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: show });
	_resume_branch($scope0_id);
}, 1);
