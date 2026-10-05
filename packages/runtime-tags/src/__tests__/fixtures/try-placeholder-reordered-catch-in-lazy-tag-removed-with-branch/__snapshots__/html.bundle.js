// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<pre id=log></pre><button class=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<button class=hide></button>${_el_resume($scope0_id, "c")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", resolveAfter(1, 1), (v) => {
					const $scope5_id = _scope_id();
					_try($scope5_id, "a", () => {
						_scope_reason();
						const $scope6_id = _scope_id();
						_await($scope6_id, "a", rejectAfter(/* @__PURE__ */ new Error("nope"), 2), (x) => {
							_scope_id();
							_html(`${_escape(v)}${_escape(x)}`);
						}, 0);
					}, () => {
						_scope_reason();
						_scope_id();
						_html("loading");
					}, void 0, "a2");
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("outer loading");
			}, (err) => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", count)}</span>`);
				_script($scope2_id, "a0");
				_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
			}, "a3", "a4");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d");
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		e: count,
		g: $count__closures
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	$Child_withLoadAssets({});
}, 1);
