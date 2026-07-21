// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "b")}</div>`);
	_try($scope0_id, "c", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(count), (a) => {
			const $scope5_id = _scope_id();
			_html(`a: <!>${_escape(a)}${_el_resume($scope5_id, "a")}`);
			writeScope($scope5_id, {});
		});
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("LOADING A...");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("a1", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`error: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope4_id, "a", $sg__err_message)}`);
			_serialize_if($scope4_reason, 0) && writeScope($scope4_id, {});
		}, $scope0_id) })
	});
	_try($scope0_id, "d", _content_resume("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", resolveAfter(count * 10, 2), (b) => {
			const $scope7_id = _scope_id();
			_html(`b: <!>${_escape(b)}${_el_resume($scope7_id, "a")}`);
			writeScope($scope7_id, {});
		});
		_subscribe($count__closures, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cf: 1
		}));
		_resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING B...");
	}, $scope0_id) }) });
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		e: count,
		f: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
