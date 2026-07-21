// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $id__closures = /* @__PURE__ */ new Set();
	const $payloadId__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let id = 1;
	const payloadId = id * 100;
	let count = 0;
	_try($scope0_id, "a", _content_resume("a7", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter({ id: payloadId }), (data) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a0");
			_script($scope2_id, "a1");
			_script($scope2_id, "a2");
			_html(`<h2>Id: <!>${_escape(id)}${_el_resume($scope2_id, "a")} --> <!>${_escape(payloadId)}${_el_resume($scope2_id, "b")}</h2><pre>${_escape(JSON.stringify(data))}${_el_resume($scope2_id, "c")}</pre><button id=inc>${_escape(id)}${_el_resume($scope2_id, "e")}</button>${_el_resume($scope2_id, "d")}<button id=count>${_escape(count)}${_el_resume($scope2_id, "g")}</button>${_el_resume($scope2_id, "f")}`);
			_script($scope2_id, "a3");
			_script($scope2_id, "a4");
			_script($scope2_id, "a5");
			writeScope($scope2_id, {
				i: data,
				_: _scope_with_id($scope1_id),
				Cf: 1
			});
			_resume_branch($scope2_id);
		});
		_subscribe($payloadId__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		b: id,
		c: payloadId,
		d: count,
		e: $id__closures,
		f: $payloadId__closures,
		g: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
