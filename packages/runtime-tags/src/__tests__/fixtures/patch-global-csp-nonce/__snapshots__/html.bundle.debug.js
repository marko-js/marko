// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<p>a</p>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell !__tests__/template.marko_2;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_page = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 0) {
			const $scope1_id = _scope_id();
			_html("<p>a</p>");
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			let mounted = false;
			if ($scope0_page) _if(() => {
				if (mounted) {
					const $scope3_id = _scope_id();
					_html(`<style${_attr_nonce()}>
      p {}
    </style>`);
					_scope($scope3_id, {}, "__tests__/template.marko", "7:4");
					return 0;
				}
			}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
			_script($scope2_id, "__tests__/template.marko_2");
			_patch_value($scope2_id, "__tests__/template.marko_fill0", mounted, 1);
			_scope($scope2_id, {}, "__tests__/template.marko", "4:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_page, void 0, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
