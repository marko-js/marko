// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = 1;
	_html(`<button></button>${_el_resume($scope0_id, "a")}<div id=one>Fail</div><div id=two>Fail</div>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a4", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(0, 1), () => {
					const $scope3_id = _scope_id();
					_script($scope3_id, "a0");
					_html(`${_escape(show)}${_el_resume($scope3_id, "a")}`);
					_script($scope3_id, "a1");
					writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
					_resume_branch($scope3_id);
				});
				_await($scope2_id, "b", resolveAfter(0, 1), () => {
					const $scope5_id = _scope_id();
					_script($scope5_id, "a2");
					_resume_branch($scope5_id);
				}, 0);
				writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
				_scope_reason();
				_scope_id();
				_html("loading...");
			}, $scope1_id) }) });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		c: show,
		Bc: $show__closures
	});
	_resume_branch($scope0_id);
}, 1);
