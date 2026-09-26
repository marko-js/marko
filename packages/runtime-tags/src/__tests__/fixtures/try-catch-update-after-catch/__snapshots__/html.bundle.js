// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div>`);
	let $catch;
	forOf([`empty ${n}`], (label) => {
		$catch = attrTags($catch, {});
	});
	_try($scope0_id, "b", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", `body ${n}`));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id), { catch: $catch });
	_html("</div><div>");
	_try($scope0_id, "c", _content_resume("a7", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let $catch2;
		forOf([`inner ${n}`], (label) => {
			$catch2 = attrTags($catch2, { content: _content_resume("a3", (err) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`${_text_resume($scope3_id, "a", label)} caught ${_text_resume($scope3_id, "b", err.message, _serialize_guard($scope3_reason, 0) * 2)}${_text_resume($scope3_id, "c", "", 2)}`);
				_subscribe($n__closures, _scope($scope3_id, {
					g: err?.message,
					_: _scope_with_id($scope2_id),
					Ce: 2
				}), "a2");
			}, $scope2_id, () => [{ 3: label }]) });
		});
		_try($scope2_id, "a", _content_resume("a4", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_html(_text_resume($scope4_id, "a", "ok"));
			_subscribe($n__closures, _scope($scope4_id, {
				_: _scope_with_id($scope2_id),
				Ce: 3
			}), "a5");
		}, $scope2_id), { catch: $catch2 });
		_subscribe($n__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ce: 1
		}), "a8", 0);
		_resume_branch($scope2_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a6", (outer) => {
		const $scope5_reason = _scope_reason(), $sg__outer_message = _serialize_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`outer caught ${_text_resume($scope5_id, "a", outer.message, $sg__outer_message * 2)}`);
		_serialize_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, $scope0_id) }) });
	_html("</div>");
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		d: n,
		e: $n__closures
	});
}, 1);
