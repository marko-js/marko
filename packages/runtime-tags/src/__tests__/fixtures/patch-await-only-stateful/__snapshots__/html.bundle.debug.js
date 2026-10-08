// template.marko
const $template = "<button>toggle</button><!><p> </p>";
const $walks = " b%bD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%bD ;<button>toggle</button><!><p> </p>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve("loaded"), (v) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_escape(v)}</em>`);
			}, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<p>${_patch_text($scope0_id, "#text/2", input.title, void 0, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", open, 1);
	$scope0_page && _scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
