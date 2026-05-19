// tags/recurse.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $si__input_level = _serialize_if($scope0_reason, 0), $sg__input_level = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_level__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.level) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr("data-level", input.level)}>`);
			_try($scope1_id, "b", _content_resume("b2", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(0), () => {
					const $scope3_id = _scope_id();
					$si__input_level && _script($scope3_id, "b0");
					const $childScope = _peek_scope_id();
					_set_serialize_reason($sg__input_level);
					$content({ level: input.level - 1 });
					$si__input_level && writeScope($scope3_id, {
						_: _scope_with_id($scope2_id),
						a: _existing_scope($childScope)
					});
					_resume_branch($scope3_id);
				}, $sg__input_level);
				$si__input_level && writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("b1", () => {
				_scope_reason();
				_scope_id();
				_html("LOADING...");
			}, $scope1_id) }) });
			_html(`</div>${_el_resume($scope1_id, "a", $sg__input_level)}`);
			$si__input_level && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $sg__input_level, $sg__input_level, $sg__input_level, 0, 1);
	$si__input_level && writeScope($scope0_id, {
		d: input.level,
		Bd: $input_level__closures
	});
};
var recurse_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	recurse_default({ level: 4 });
}, 1);
