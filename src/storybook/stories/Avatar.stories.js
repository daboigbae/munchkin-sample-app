// Avatar.stories.js

import React from "react";

import { text } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Avatar } from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";

storiesOf("Avatar", module)
	.add("Avatar with image", () => (
		<StoryWrapper
			title="Image Avatar"
			description="Avatar with image source"
			sampleCode={
				"<Avatar\n \timage=\"https://www.w3schools.com/howto/img_avatar.png\"\n/>"
			}
		>
			<View className="h-32 w-32 mt-4">
				<Avatar image="https://www.w3schools.com/howto/img_avatar.png" />
			</View>
		</StoryWrapper>
	))
	.add("Avatar with username", () => (
		<StoryWrapper
			title="Username Avatar"
			description="Avatar with no image, but instead a username provided and with a random generated background color"
			sampleCode={"<Avatar\n \tusername=\"Test User\"\n/>"}
		>
			<View className="h-32 w-32 mt-4">
				<Avatar username={text("username", "Test User")} />
			</View>
		</StoryWrapper>
	));
