// Button.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";

import { text } from "@storybook/addon-knobs";
import { TextInput } from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";

storiesOf("Text Input", module)
	.add("Standard", () => (
		<StoryWrapper
			title="Default text input"
			description="Default text input with label and error message."
			sampleCode={
				"<TextInput\n\tlabel={text(\"Label\", \"Label\")}\n\terror=\"Sample error message\"\n\t/>"
			}
		>
			<View className="w-full px-4 bg-white py-4">
				<TextInput
					label={text("Label", "Label")}
					error="Sample error message"
				/>
			</View>
		</StoryWrapper>
	))
	.add("Email", () => (
		<StoryWrapper
			title="Email text input"
			description="Default email input with label and error message."
			sampleCode={"<TextInput\n\ttype=\"email\"\n\t/>"}
		>
			<View className="w-full px-4 bg-white py-4">
				<TextInput type="email" />
			</View>
		</StoryWrapper>
	))
	.add("Password", () => (
		<StoryWrapper
			title="Password text input"
			description="Default password input with label and error message."
			sampleCode={"<TextInput\n\ttype=\"password\"\n\t/>"}
		>
			<View className="w-full px-4 bg-white py-4">
				<TextInput type="password" />
			</View>
		</StoryWrapper>
	));
