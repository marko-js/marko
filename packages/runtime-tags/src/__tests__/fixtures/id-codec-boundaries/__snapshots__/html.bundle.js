// tags/field.marko
var field_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}>`);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_keys = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const keyId = _id();
		_html(`<label${_attr("for", keyId)}>key</label><input${_attr("id", keyId)}>`);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {});
	}, (key) => key, $scope0_id, "a", $wg__input_keys, $wg__input_keys);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl0</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl1</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "c", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl2</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope4_id, {});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope5_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl3</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope5_id, {});
			return 0;
		}
	}, $scope0_id, "e", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope6_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl4</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope6_id, {});
			return 0;
		}
	}, $scope0_id, "f", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope7_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl5</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope7_id, {});
			return 0;
		}
	}, $scope0_id, "g", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope8_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl6</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope8_id, {});
			return 0;
		}
	}, $scope0_id, "h", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope9_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl7</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope9_id, {});
			return 0;
		}
	}, $scope0_id, "i", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope10_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl8</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope10_id, {});
			return 0;
		}
	}, $scope0_id, "j", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope11_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl9</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope11_id, {});
			return 0;
		}
	}, $scope0_id, "k", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl10</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope12_id, {});
			return 0;
		}
	}, $scope0_id, "l", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope13_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl11</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope13_id, {});
			return 0;
		}
	}, $scope0_id, "m", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope14_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl12</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope14_id, {});
			return 0;
		}
	}, $scope0_id, "n", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope15_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl13</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope15_id, {});
			return 0;
		}
	}, $scope0_id, "o", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope16_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl14</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope16_id, {});
			return 0;
		}
	}, $scope0_id, "p", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope17_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl15</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope17_id, {});
			return 0;
		}
	}, $scope0_id, "q", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope18_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl16</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope18_id, {});
			return 0;
		}
	}, $scope0_id, "r", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope19_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl17</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope19_id, {});
			return 0;
		}
	}, $scope0_id, "s", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope20_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl18</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope20_id, {});
			return 0;
		}
	}, $scope0_id, "t", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope21_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl19</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope21_id, {});
			return 0;
		}
	}, $scope0_id, "u", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope22_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl20</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope22_id, {});
			return 0;
		}
	}, $scope0_id, "v", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope23_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl21</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope23_id, {});
			return 0;
		}
	}, $scope0_id, "w", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope24_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl22</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope24_id, {});
			return 0;
		}
	}, $scope0_id, "x", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope25_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl23</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope25_id, {});
			return 0;
		}
	}, $scope0_id, "y", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope26_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl24</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope26_id, {});
			return 0;
		}
	}, $scope0_id, "z", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope27_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl25</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope27_id, {});
			return 0;
		}
	}, $scope0_id, "a0", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope28_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl26</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope28_id, {});
			return 0;
		}
	}, $scope0_id, "a1", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope29_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl27</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope29_id, {});
			return 0;
		}
	}, $scope0_id, "a2", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope30_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl28</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope30_id, {});
			return 0;
		}
	}, $scope0_id, "a3", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope31_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl29</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope31_id, {});
			return 0;
		}
	}, $scope0_id, "a4", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope32_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl30</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope32_id, {});
			return 0;
		}
	}, $scope0_id, "a5", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope33_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl31</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope33_id, {});
			return 0;
		}
	}, $scope0_id, "a6", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope34_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl32</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope34_id, {});
			return 0;
		}
	}, $scope0_id, "a7", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope35_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl33</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope35_id, {});
			return 0;
		}
	}, $scope0_id, "a8", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope36_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl34</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope36_id, {});
			return 0;
		}
	}, $scope0_id, "a9", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope37_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl35</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope37_id, {});
			return 0;
		}
	}, $scope0_id, "aa", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope38_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl36</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope38_id, {});
			return 0;
		}
	}, $scope0_id, "ab", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope39_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl37</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope39_id, {});
			return 0;
		}
	}, $scope0_id, "ac", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope40_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl38</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope40_id, {});
			return 0;
		}
	}, $scope0_id, "ad", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope41_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl39</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope41_id, {});
			return 0;
		}
	}, $scope0_id, "ae", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope42_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl40</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope42_id, {});
			return 0;
		}
	}, $scope0_id, "af", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope43_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl41</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope43_id, {});
			return 0;
		}
	}, $scope0_id, "ag", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope44_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl42</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope44_id, {});
			return 0;
		}
	}, $scope0_id, "ah", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope45_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl43</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope45_id, {});
			return 0;
		}
	}, $scope0_id, "ai", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope46_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl44</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope46_id, {});
			return 0;
		}
	}, $scope0_id, "aj", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope47_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl45</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope47_id, {});
			return 0;
		}
	}, $scope0_id, "ak", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope48_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl46</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope48_id, {});
			return 0;
		}
	}, $scope0_id, "al", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope49_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl47</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope49_id, {});
			return 0;
		}
	}, $scope0_id, "am", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope50_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl48</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope50_id, {});
			return 0;
		}
	}, $scope0_id, "an", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope51_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl49</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope51_id, {});
			return 0;
		}
	}, $scope0_id, "ao", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope52_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl50</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope52_id, {});
			return 0;
		}
	}, $scope0_id, "ap", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope53_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl51</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope53_id, {});
			return 0;
		}
	}, $scope0_id, "aq", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope54_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl52</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope54_id, {});
			return 0;
		}
	}, $scope0_id, "ar", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope55_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl53</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope55_id, {});
			return 0;
		}
	}, $scope0_id, "as", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope56_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl54</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope56_id, {});
			return 0;
		}
	}, $scope0_id, "at", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope57_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl55</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope57_id, {});
			return 0;
		}
	}, $scope0_id, "au", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope58_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl56</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope58_id, {});
			return 0;
		}
	}, $scope0_id, "av", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope59_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl57</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope59_id, {});
			return 0;
		}
	}, $scope0_id, "aw", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope60_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl58</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope60_id, {});
			return 0;
		}
	}, $scope0_id, "ax", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope61_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl59</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope61_id, {});
			return 0;
		}
	}, $scope0_id, "ay", $wg__input_show, $wg__input_show);
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	field_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
