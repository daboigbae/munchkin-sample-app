// Button.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Button } from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";
import Icon from "react-native-vector-icons/MaterialIcons";

storiesOf("Buttons", module)
	.add("Simple Button", () => (
		<StoryWrapper
			title="Simple Button"
			description="Button with customizable background text colors."
			sampleCode={
				"<Button\n \tlabel={(text(\"label\", \"Button Label\"))} \n\tonPress={action(\"clicked-text\")}\n \tbuttonColor=\"bg-slate-300\"/>"
			}
		>
			<Button
				label={text("label", "Button Label")}
				onPress={action("clicked-text")}
				buttonColor="bg-gray-500"
				textColor="text-white"
			/>
		</StoryWrapper>
	))
	.add("Outline Button", () => (
		<StoryWrapper
			title="Outline Button"
			description="Button with customizable border and text colors."
			sampleCode={
				"<Button\n\ttype=\"outlined\"\n\tlabel={(text(\"label\", \"Button Label\"))} \n\tonPress={action(\"clicked-text\")}\n\tbuttonColor=\"bg-teal-400\"\n\ttextColor=\"text-teal-400\"/>"
			}
		>
			<Button
				type="outlined"
				label={text("label", "Button Label")}
				onPress={action("clicked-text")}
				buttonColor="bg-teal-400"
				textColor="text-teal-400"
			/>
		</StoryWrapper>
	))
	.add("Text Button", () => (
		<StoryWrapper
			title="Text Button"
			description="Button with customizable text color."
			sampleCode={
				"<Button\n\ttype=\"text\"\n\tlabel={(text(\"label\", \"Button Label\"))} \n\tonPress={action(\"clicked-text\")}\n\ttextColor=\"text-red-400\"/>"
			}
		>
			<Button
				type="text"
				label={text("label", "Button Label")}
				onPress={action("clicked-text")}
				textColor="text-red-400"
			/>
		</StoryWrapper>
	))
	.add("Icon Button", () => (
		<StoryWrapper
			title="Icon Button"
			description="Button with customizable left and right icons."
			sampleCode={
				"<Button\n\tlabel={(text(\"label\", \"Button Label\"))} \n\tonPress={action(\"clicked-text\")}\n\tbuttonColor=\"bg-pink-700\"\n\ttextColor=\"text-white\n\tleftIcon={\n\t<View className=\"w-full h-full items-center justify-center\">\n\t<Icon name=\"close\" size={32} color=\"white\"/>\n\t</View>\n\t}\n\trightIcon={\n\t<View className=\"w-full h-full items-center justify-center\">\n\t<Icon name=\"chevron-right\" size={32} color=\"white\"/>\n\t</View>\n\t}/>"
			}
		>
			<Button
				label={text("label", "Button Label")}
				onPress={action("clicked-text")}
				buttonColor="bg-pink-700"
				textColor="text-white"
				leftIcon={
					<View className="w-full h-full items-center justify-center">
						<Icon name="close" size={32} color="white" />
					</View>
				}
				rightIcon={
					<View className="w-full h-full items-center justify-center">
						<Icon name="chevron-right" size={32} color="white" />
					</View>
				}
			/>
		</StoryWrapper>
	));
