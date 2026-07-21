// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<button id=hide>hide</button>${_el_resume($scope0_id, "b")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</div>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(count), (value) => {
					const $scope4_id = _scope_id();
					_html(`resolved: <!>${_escape(value)}${_el_resume($scope4_id, "a")}`);
					writeScope($scope4_id, {});
				});
				_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("LOADING...");
			}, $scope1_id) }) });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: count,
		g: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
