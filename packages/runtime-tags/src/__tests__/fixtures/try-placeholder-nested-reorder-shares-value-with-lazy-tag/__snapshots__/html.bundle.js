// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.shared,
		f: count
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("a", 1), (a) => {
			const $scope3_id = _scope_id();
			_html(_escape(a));
			_try($scope3_id, "b", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "a", resolveAfter("b", 1), (b) => {
					const $scope6_id = _scope_id();
					_html(_escape(b));
					_try($scope6_id, "b", () => {
						_scope_reason();
						const $scope7_id = _scope_id();
						_await($scope7_id, "a", resolveAfter("c", 3), (c) => {
							_scope_id();
							_html(_escape(c));
						}, 0);
					}, () => {
						_scope_reason();
						const $scope8_id = _scope_id();
						const shared = { n: 1 };
						$Child_withLoadAssets({ shared });
						let count = 0;
						_html(`<button class=placeholder>${_text_resume($scope8_id, "d", count)}</button>${_el_resume($scope8_id, "c")}`);
						_script($scope8_id, "b0");
						_scope($scope8_id, {
							e: shared,
							f: count
						});
					}, void 0, "b1");
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("middle");
			}, void 0, "b2");
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer");
	}, void 0, "b3");
}, 1);
