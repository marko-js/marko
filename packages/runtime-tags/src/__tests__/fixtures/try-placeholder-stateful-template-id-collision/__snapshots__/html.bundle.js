// tags/n2.marko
var n2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=n2>${_escape(input.label)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/n5.marko
var n5_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n5>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} <!>${_escape(n)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "f0");
	writeScope($scope0_id, { g: n });
	_resume_branch($scope0_id);
});

// tags/n1.marko
var n1_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n1>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} <!>${_escape(n)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { g: n });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = /* @__PURE__ */ new Set();
	const $tag__closures = /* @__PURE__ */ new Set();
	let clicks = 0;
	let tag = n5_default;
	_html(`<button>clicks <!>${_escape(clicks)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button class=swap>swap</button>${_el_resume($scope0_id, "c")}`);
	_try($scope0_id, "d", _content_resume("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", resolveAfter("body", 2), (body) => {
			const $scope3_id = _scope_id();
			_script($scope3_id, "a0");
			_script($scope3_id, "a1");
			_dynamic_tag($scope3_id, "a", tag, { label: `${body} ${clicks}` });
			writeScope($scope3_id, {
				c: body,
				_: _scope_with_id($scope2_id),
				Cg: 1
			});
			_resume_branch($scope3_id);
		});
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(1);
		const $childScope = _peek_scope_id();
		n1_default({ label: `placeholder ${clicks}` });
		_subscribe($clicks__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		e: clicks,
		f: tag,
		g: $clicks__closures,
		h: $tag__closures
	});
	_resume_branch($scope0_id);
}, 1);
