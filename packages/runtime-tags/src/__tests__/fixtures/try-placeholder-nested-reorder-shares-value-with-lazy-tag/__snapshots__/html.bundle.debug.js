// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		input_shared: input.shared,
		count
	}, "__tests__/child.marko", 0, {
		input_shared: ["input.shared"],
		count: "5:6"
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("a", 1), (a) => {
			const $scope3_id = _scope_id();
			_html(_escape(a));
			_try($scope3_id, "#text/1", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "#text/0", resolveAfter("b", 1), (b) => {
					const $scope6_id = _scope_id();
					_html(_escape(b));
					_try($scope6_id, "#text/1", () => {
						_scope_reason();
						const $scope7_id = _scope_id();
						_await($scope7_id, "#text/0", resolveAfter("c", 3), (c) => {
							const $scope9_id = _scope_id();
							_html(_escape(c));
						}, 0);
					}, () => {
						_scope_reason();
						const $scope8_id = _scope_id();
						const shared = { n: 1 };
						$Child_withLoadAssets({ shared });
						let count = 0;
						_html(`<button class=placeholder>${_text_resume($scope8_id, "#text/3", count)}</button>${_el_resume($scope8_id, "#button/2")}`);
						_script($scope8_id, "__tests__/template.marko_8");
						_scope($scope8_id, {
							shared,
							count
						}, "__tests__/template.marko", "13:12", {
							shared: "14:20",
							count: "16:18"
						});
					}, void 0, "__tests__/template.marko_8*content");
				}, 0);
			}, () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("middle");
			}, void 0, "__tests__/template.marko_5*content");
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("outer");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
