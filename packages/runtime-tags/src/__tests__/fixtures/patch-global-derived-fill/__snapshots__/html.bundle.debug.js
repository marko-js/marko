// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>inc</button><!><!>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const greeting = $global$1.prefix + ":" + input.name;
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (count < 2) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", greeting, $scope0_page || _source_guard($scope0_reason, 0))} ${_text_resume($scope1_id, "#text/1", count, 2)}</span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_fill_global_subscribe("__tests__/template.marko_0_input_name#4_$global_prefix#7/global", $scope0_id, _client_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "input_name", input.name, 1);
	_patch_value($scope0_id, "__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_name: _source_if($scope0_reason, 0) && input.name,
		greeting,
		count
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		greeting: "1:8",
		count: "2:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko_fill0", greeting);
}, 1);
