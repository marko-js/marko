// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_related = _serialize_guard($scope0_reason, 1), $sg__input_note = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_related__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "a", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}<section>`);
	_try($scope0_id, "d", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.related, 1), (related) => {
			const $scope3_id = _scope_id();
			_html("<ul>");
			_for_of(related, (item) => {
				const $scope4_id = _scope_id();
				_html(`<li>${_escape(_hole_value($scope4_id, "a", item.name, _persisted_reason()))}${_el_resume($scope4_id, "a", $sg__input_related)} costs ${_sep($sg__input_related)}${_escape(_hole_value($scope4_id, "b", item.price, _persisted_reason()))}${_el_resume($scope4_id, "b", $sg__input_related)}</li>`);
				$sg__input_related && writeScope($scope4_id, {});
			}, function(item) {
				return item.id;
			}, $scope3_id, "a", $sg__input_related, $sg__input_related, $sg__input_related, "</ul>", 1);
			$sg__input_related && writeScope($scope3_id, {});
		}, $sg__input_related);
		$sg__input_related && _subscribe($input_related__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("loading related…");
	}, $scope0_id) }) }, $sg__input_related);
	_html("</section><footer>");
	_await($scope0_id, "e", resolveAfter(input.note, 2), (note) => {
		const $scope5_id = _scope_id();
		_html(`<em>${_escape(_hole_value($scope5_id, "a", note, _persisted_reason()))}${_el_resume($scope5_id, "a", $sg__input_note)}</em>`);
		$sg__input_note && writeScope($scope5_id, {});
	}, $sg__input_note);
	_html("</footer>");
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		k: _state_reason() && count,
		Bi: $sg__input_related && $input_related__closures
	});
	_resume_branch($scope0_id);
}, 1);
