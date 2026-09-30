// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, () => {
			const $scope2_id = _scope_id();
			_html(`<div id=done>${_patch_text($scope2_id, "#text/0", input.msg, void 0, $scope0_reason, 2)} done</div>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_msg#0:6/init");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_msg#0:6/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:5/init");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_msg: _unfilled_if($scope0_reason, 1) && input.msg,
		count,
		"ClosureScopes:input_msg/9": _unfilled_if($scope0_reason, 2) && $input_msg__closures,
		"ClosureScopes:input_promise/8": _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	});
}, 1, 0);
