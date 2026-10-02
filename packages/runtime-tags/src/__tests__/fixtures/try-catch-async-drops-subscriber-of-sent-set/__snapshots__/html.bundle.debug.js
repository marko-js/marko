// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#span#1:0/hoist");
	const $Item_content__subscribers = new Set();
	const Item = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>x</span>${_el_resume($scope1_id, "#span/0")}`);
		_subscribe($Item_content__subscribers, _scope($scope1_id, {}, "__tests__/template.marko", "3:2"));
	}, $scope0_id) };
	Item.content({});
	_await($scope0_id, "#text/1", resolveAfter("a", 3), (a) => {
		const $scope4_id = _scope_id();
		_html(_escape(a));
	}, 0);
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", resolveAfter(1, 1), (v) => {
			const $scope3_id = _scope_id();
			Item.content({});
		}, 0);
		_await($scope2_id, "#text/1", rejectAfter(new Error("ERROR!"), 2), (v) => {
			const $scope6_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`caught ${_text_resume($scope5_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "13:4");
	}, void 0, "__tests__/template.marko_5*content");
	_script($scope0_id, "__tests__/template.marko_0", 0);
	_scope($scope0_id, { "ClosureScopes:1": $Item_content__subscribers }, "__tests__/template.marko", 0);
}, 1);
