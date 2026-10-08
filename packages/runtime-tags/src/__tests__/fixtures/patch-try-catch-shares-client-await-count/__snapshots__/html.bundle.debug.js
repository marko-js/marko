// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content;D ;<b> </b>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_pending#0:5/init;D%b%;<div><!><!></div>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $pending__closures = new Set();
	let pending = null;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.a, (a) => {
				const $scope6_id = _scope_id();
				_html(`<b>${_patch_text($scope6_id, "#text/0", a, void 0, $scope0_reason, 0)}</b>`);
				_scope($scope6_id, {}, "__tests__/template.marko", "6:10");
			}, 1, "__tests__/template.marko_6*content", 1);
			_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_input_a#0:4/init");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_2_input_a#0:4/subscribe", 0);
			$scope0_page && _resume_branch($scope2_id);
		}, void 0, (e) => {
			const $scope5_reason = _scope_reason(), $wg__e_message = _source_guard($scope5_reason, 0);
			const $scope5_id = _scope_id();
			_html(`<s>${_text_resume($scope5_id, "#text/0", e.message, $wg__e_message)}</s>`);
			_source_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "7:10");
		}, void 0, "__tests__/template.marko_5*content", "__tests__/template.marko_2*content", void 0, 1);
		if ($scope0_page) _if(() => {
			if (pending) {
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", pending, (c) => {
					const $scope7_id = _scope_id();
					_html(`<em>${_text_resume($scope7_id, "#text/0", c)}</em>`);
					_scope($scope7_id, {}, "__tests__/template.marko", "10:10");
				}, void 0, 0);
				_subscribe($pending__closures, _scope($scope3_id, { "ClosureSignalIndex:pending/7": 1 }, "__tests__/template.marko", "9:8"), "__tests__/template.marko_3_pending#0:5/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#text/1");
		_html("</div>");
		_subscribe($pending__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_pending#0:5/subscribe");
	}, () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_1*content", 1);
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", pending, 1);
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_a/6": _unfilled_if($scope0_reason, 0) && $input_a__closures,
		"ClosureScopes:pending/7": $pending__closures
	}, "__tests__/template.marko", 0);
}, 1);
