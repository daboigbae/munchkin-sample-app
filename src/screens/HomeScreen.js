import React from "react";
import { View } from "react-native";

import {
	getStorybookUI,
	configure,
	addDecorator
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import "../storybook/rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
	require("../storybook/stories");
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

const HomeScreen = () => {
	return (
		<View className="h-full w-full bg-gray-800">
			<StorybookUIRoot />
		</View>
	);
};

export default HomeScreen;
