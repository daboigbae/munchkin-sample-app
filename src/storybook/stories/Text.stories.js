// Text.stories.js

import React from "react";

import { text } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";
import { Text } from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";

storiesOf("Text", module)
	.add("Title", () => (
		<StoryWrapper
			title="Title"
			description="Title text with customizable font color"
			sampleCode={
				"<Text\n \ttype=\"title\" \n\ttext=\"Title Text\"\n \ttextColor=\"text-white\" \n/>"
			}
		>
			<Text
				type="title"
				text={text("text", "Title Text")}
				textColor="text-white"
			/>
		</StoryWrapper>
	))
	.add("Subtitle", () => (
		<StoryWrapper
			title="Subtitle"
			description="Subtitle text with customizable font color"
			sampleCode={
				"<Text\n \ttype=\"subtitle\" \n\ttext=\"Subtitle Text\"\n \ttextColor=\"text-white\" \n/>"
			}
		>
			<Text
				type="subtitle"
				text={text("text", "Subtitle Text")}
				textColor="text-white"
			/>
		</StoryWrapper>
	))
	.add("Default", () => (
		<StoryWrapper
			title="Body Text"
			description="Body text with customizable font color"
			sampleCode={
				"<Text \n\ttext=\"Body Text\"\n \ttextColor=\"text-white\" \n/>"
			}
		>
			<Text text={text("text", "Body Text")} textColor="text-white" />
		</StoryWrapper>
	));
