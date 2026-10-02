// tags/recurse.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_level = _write_guard($scope0_reason, 0), $wi__input_level = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_level__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.level) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr("data-level", input.level)}>`);
			_try($scope1_id, "b", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", resolveAfter(0), () => {
					const $scope3_id = _scope_id();
					_set_scope_reason($wg__input_level << 1);
					const $childScope = _peek_scope_id();
					$content({ level: input.level - 1 });
					$wi__input_level && _subscribe($input_level__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						a: _existing_scope($childScope)
					}), "b0", $wg__input_level);
					$wg__input_level || $wi__input_level && _resume_branch($scope3_id);
				}, $wg__input_level);
				$wi__input_level && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, () => {
				_scope_reason();
				_scope_id();
				_html("LOADING...");
			}, void 0, "b1");
			_html(`</div>${_el_resume($scope1_id, "a", $wg__input_level)}`);
			$wi__input_level && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_level, $wg__input_level, 0, 0, 1);
	$wi__input_level && _scope($scope0_id, { e: $input_level__closures });
};
var recurse_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	recurse_default({ level: 4 });
}, 1);
