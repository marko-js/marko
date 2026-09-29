// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("A Value", 2), (v) => {
			const $scope3_id = _scope_id();
			_html(`<div>Resolved A: ${_escape(v)}</div>`);
		}, 0);
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("Rejected A");
	}, void 0, "__tests__/template.marko_2*content");
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "#text/0", rejectAfter(new Error("rejected b"), 1), (v) => {
			const $scope6_id = _scope_id();
			_html(`<div>Resolved B: ${_escape(v)}</div>`);
		}, 0);
	}, void 0, () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("Rejected B");
	}, void 0, "__tests__/template.marko_5*content");
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		_await($scope7_id, "#text/0", resolveAfter("C Value", 2), (v) => {
			const $scope9_id = _scope_id();
			_html(`<div>Resolved C: ${_escape(v)}</div><button>Before</button>${_el_resume($scope9_id, "#button/1")}`);
			_script($scope9_id, "__tests__/template.marko_9");
			_scope($scope9_id, {}, "__tests__/template.marko", "24:4");
		});
	}, void 0, () => {
		_scope_reason();
		const $scope8_id = _scope_id();
		_html("Rejected C");
	}, void 0, "__tests__/template.marko_8*content");
}, 1);
