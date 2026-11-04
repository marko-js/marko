// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}>`);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_keys = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const keyId = _id();
		_html(`<label${_attr("for", keyId)}>key</label><input${_attr("id", keyId)}>`);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, (key) => key, $scope0_id, "#text/0", $wg__input_keys, $wg__input_keys);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl0</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope2_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl1</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope3_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl2</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope4_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope5_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl3</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope5_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/4", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope6_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl4</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope6_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/5", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope7_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl5</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope7_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/6", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope8_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl6</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope8_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/7", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope9_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl7</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope9_id, {}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/8", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope10_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl8</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope10_id, {}, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/9", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope11_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl9</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope11_id, {}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/10", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl10</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope12_id, {}, "__tests__/template.marko", "12:2");
			return 0;
		}
	}, $scope0_id, "#text/11", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope13_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl11</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope13_id, {}, "__tests__/template.marko", "13:2");
			return 0;
		}
	}, $scope0_id, "#text/12", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope14_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl12</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope14_id, {}, "__tests__/template.marko", "14:2");
			return 0;
		}
	}, $scope0_id, "#text/13", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope15_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl13</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope15_id, {}, "__tests__/template.marko", "15:2");
			return 0;
		}
	}, $scope0_id, "#text/14", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope16_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl14</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope16_id, {}, "__tests__/template.marko", "16:2");
			return 0;
		}
	}, $scope0_id, "#text/15", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope17_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl15</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope17_id, {}, "__tests__/template.marko", "17:2");
			return 0;
		}
	}, $scope0_id, "#text/16", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope18_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl16</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope18_id, {}, "__tests__/template.marko", "18:2");
			return 0;
		}
	}, $scope0_id, "#text/17", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope19_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl17</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope19_id, {}, "__tests__/template.marko", "19:2");
			return 0;
		}
	}, $scope0_id, "#text/18", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope20_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl18</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope20_id, {}, "__tests__/template.marko", "20:2");
			return 0;
		}
	}, $scope0_id, "#text/19", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope21_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl19</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope21_id, {}, "__tests__/template.marko", "21:2");
			return 0;
		}
	}, $scope0_id, "#text/20", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope22_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl20</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope22_id, {}, "__tests__/template.marko", "22:2");
			return 0;
		}
	}, $scope0_id, "#text/21", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope23_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl21</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope23_id, {}, "__tests__/template.marko", "23:2");
			return 0;
		}
	}, $scope0_id, "#text/22", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope24_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl22</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope24_id, {}, "__tests__/template.marko", "24:2");
			return 0;
		}
	}, $scope0_id, "#text/23", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope25_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl23</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope25_id, {}, "__tests__/template.marko", "25:2");
			return 0;
		}
	}, $scope0_id, "#text/24", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope26_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl24</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope26_id, {}, "__tests__/template.marko", "26:2");
			return 0;
		}
	}, $scope0_id, "#text/25", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope27_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl25</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope27_id, {}, "__tests__/template.marko", "27:2");
			return 0;
		}
	}, $scope0_id, "#text/26", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope28_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl26</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope28_id, {}, "__tests__/template.marko", "28:2");
			return 0;
		}
	}, $scope0_id, "#text/27", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope29_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl27</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope29_id, {}, "__tests__/template.marko", "29:2");
			return 0;
		}
	}, $scope0_id, "#text/28", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope30_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl28</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope30_id, {}, "__tests__/template.marko", "30:2");
			return 0;
		}
	}, $scope0_id, "#text/29", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope31_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl29</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope31_id, {}, "__tests__/template.marko", "31:2");
			return 0;
		}
	}, $scope0_id, "#text/30", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope32_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl30</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope32_id, {}, "__tests__/template.marko", "32:2");
			return 0;
		}
	}, $scope0_id, "#text/31", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope33_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl31</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope33_id, {}, "__tests__/template.marko", "33:2");
			return 0;
		}
	}, $scope0_id, "#text/32", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope34_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl32</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope34_id, {}, "__tests__/template.marko", "34:2");
			return 0;
		}
	}, $scope0_id, "#text/33", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope35_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl33</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope35_id, {}, "__tests__/template.marko", "35:2");
			return 0;
		}
	}, $scope0_id, "#text/34", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope36_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl34</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope36_id, {}, "__tests__/template.marko", "36:2");
			return 0;
		}
	}, $scope0_id, "#text/35", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope37_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl35</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope37_id, {}, "__tests__/template.marko", "37:2");
			return 0;
		}
	}, $scope0_id, "#text/36", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope38_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl36</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope38_id, {}, "__tests__/template.marko", "38:2");
			return 0;
		}
	}, $scope0_id, "#text/37", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope39_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl37</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope39_id, {}, "__tests__/template.marko", "39:2");
			return 0;
		}
	}, $scope0_id, "#text/38", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope40_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl38</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope40_id, {}, "__tests__/template.marko", "40:2");
			return 0;
		}
	}, $scope0_id, "#text/39", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope41_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl39</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope41_id, {}, "__tests__/template.marko", "41:2");
			return 0;
		}
	}, $scope0_id, "#text/40", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope42_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl40</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope42_id, {}, "__tests__/template.marko", "42:2");
			return 0;
		}
	}, $scope0_id, "#text/41", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope43_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl41</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope43_id, {}, "__tests__/template.marko", "43:2");
			return 0;
		}
	}, $scope0_id, "#text/42", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope44_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl42</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope44_id, {}, "__tests__/template.marko", "44:2");
			return 0;
		}
	}, $scope0_id, "#text/43", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope45_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl43</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope45_id, {}, "__tests__/template.marko", "45:2");
			return 0;
		}
	}, $scope0_id, "#text/44", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope46_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl44</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope46_id, {}, "__tests__/template.marko", "46:2");
			return 0;
		}
	}, $scope0_id, "#text/45", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope47_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl45</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope47_id, {}, "__tests__/template.marko", "47:2");
			return 0;
		}
	}, $scope0_id, "#text/46", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope48_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl46</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope48_id, {}, "__tests__/template.marko", "48:2");
			return 0;
		}
	}, $scope0_id, "#text/47", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope49_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl47</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope49_id, {}, "__tests__/template.marko", "49:2");
			return 0;
		}
	}, $scope0_id, "#text/48", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope50_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl48</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope50_id, {}, "__tests__/template.marko", "50:2");
			return 0;
		}
	}, $scope0_id, "#text/49", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope51_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl49</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope51_id, {}, "__tests__/template.marko", "51:2");
			return 0;
		}
	}, $scope0_id, "#text/50", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope52_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl50</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope52_id, {}, "__tests__/template.marko", "52:2");
			return 0;
		}
	}, $scope0_id, "#text/51", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope53_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl51</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope53_id, {}, "__tests__/template.marko", "53:2");
			return 0;
		}
	}, $scope0_id, "#text/52", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope54_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl52</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope54_id, {}, "__tests__/template.marko", "54:2");
			return 0;
		}
	}, $scope0_id, "#text/53", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope55_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl53</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope55_id, {}, "__tests__/template.marko", "55:2");
			return 0;
		}
	}, $scope0_id, "#text/54", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope56_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl54</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope56_id, {}, "__tests__/template.marko", "56:2");
			return 0;
		}
	}, $scope0_id, "#text/55", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope57_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl55</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope57_id, {}, "__tests__/template.marko", "57:2");
			return 0;
		}
	}, $scope0_id, "#text/56", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope58_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl56</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope58_id, {}, "__tests__/template.marko", "58:2");
			return 0;
		}
	}, $scope0_id, "#text/57", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope59_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl57</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope59_id, {}, "__tests__/template.marko", "59:2");
			return 0;
		}
	}, $scope0_id, "#text/58", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope60_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl58</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope60_id, {}, "__tests__/template.marko", "60:2");
			return 0;
		}
	}, $scope0_id, "#text/59", $wg__input_show, $wg__input_show);
	_if(() => {
		if (input.show) {
			const $scope61_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>decl59</label><input${_attr("id", uid)}>`);
			$wi__input_show && _scope($scope61_id, {}, "__tests__/template.marko", "61:2");
			return 0;
		}
	}, $scope0_id, "#text/60", $wg__input_show, $wg__input_show);
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
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
