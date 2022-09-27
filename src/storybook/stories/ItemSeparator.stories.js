// Button.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";
import { View } from "react-native";

storiesOf("Item Separator", module)
	.add("Item Separator", () => (
		<StoryWrapper
			title="Item Separator (transparent)"
			description="View used to separate components, either inside a view or specifically for a flatlist."
			sampleCode={"<ItemSeparator\n\tseparatorStyle=\"h-12\"/>"}
		>
			<View>
				<Button
					label="Button 1"
					onPress={() => {}}
					buttonColor="bg-teal-400"
					textColor="text-white"
				/>
				<ItemSeparator separatorStyle="h-12" />
				<Button
					label="Button 2"
					onPress={() => {}}
					buttonColor="bg-teal-400"
					textColor="text-white"
				/>
			</View>
		</StoryWrapper>
	))
	.add("Item Separator", () => (
		<StoryWrapper
			title="Item Separator (with border)"
			description="View used to separate components, either inside a view or specifically for a flatlist."
			sampleCode={
				"<ItemSeparator\n\tseparatorStyle=\"h-[.5] bg-teal-400 my-4\"/>"
			}
		>
			<View>
				<Button
					label="Button 1"
					onPress={() => {}}
					buttonColor="bg-teal-400"
					textColor="text-white"
				/>
				<ItemSeparator separatorStyle="h-[.5] bg-teal-400 my-4" />
				<Button
					label="Button 2"
					onPress={() => {}}
					buttonColor="bg-teal-400"
					textColor="text-white"
				/>
			</View>
		</StoryWrapper>
	));
