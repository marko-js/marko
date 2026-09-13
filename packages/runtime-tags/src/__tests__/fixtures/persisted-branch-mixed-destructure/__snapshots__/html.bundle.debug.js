// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	const { min } = input;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (count > min) {
			const $scope1_id = _scope_id();
			_html("<p>over</p>");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		count,
		min
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		min: "2:10"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", min);
}, 1, 0);
