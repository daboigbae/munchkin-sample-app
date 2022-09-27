// Button.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import { Loader } from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";
import { View } from "react-native";

storiesOf("Loader", module).add("Loader", () => (
	<StoryWrapper
		title="Loader (with color)"
		description="Re-usable wrapper for the activity indicator"
		sampleCode={"<Loader\n\tcolor=\"#0f0\"/>"}
	>
		<View>
			<Loader color="#0f0" />
		</View>
	</StoryWrapper>
));
