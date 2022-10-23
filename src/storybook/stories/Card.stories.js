// Card.stories.js

import React from "react";

import { text } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import {
	Button,
	Card,
	ItemSeparator,
	Text
} from "@digital-art-dealers/react-native-component-lib";
import StoryWrapper from "./StoryWrapper";
import { action } from "@storybook/addon-actions";

storiesOf("Card", module)
	.add("Elevated Card", () => (
		<StoryWrapper
			title="Elevated Card"
			description={
				"Elevated card with customizable background color\n\n** Card image is optional **"
			}
			sampleCode={
				"<Card\n \ttype=\"elevated\" \n\tcardColor=\"bg-white\"\n \timageURL=\"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg\" \n>\n{CHILDREN_COMPONENTS}\n</Card>"
			}
		>
			<View className="w-full h-[52vh] p-8 bg-white mt-4">
				<Card
					type="elevated"
					cardColor="bg-white"
					imageURL={text(
						"Image Url",
						"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg"
					)}
				>
					<View className="w-full h-full">
						<Text type="title" textColor="text-black" text="Card Title" />
						<Text
							textColor="text-black"
							text="It is a long established fact that a reader will be distracted by
						the readable content."
						/>
						<ItemSeparator separatorStyle="h-4" />
						<Button
							buttonColor="bg-blue-600"
							textColor="text-white"
							label="Action Button"
							onPress={action("clicked Button")}
						/>
					</View>
				</Card>
			</View>
		</StoryWrapper>
	))
	.add("Outlined Card", () => (
		<StoryWrapper
			title="Elevated Card"
			description={
				"Outlined card with customizable border color\n\n** Card image is optional **"
			}
			sampleCode={
				"<Card\n \ttype=\"outlined\" \n\tcardColor=\"bg-black\"\n>\n{CHILDREN_COMPONENTS}\n</Card>"
			}
		>
			<View className="w-full h-[52vh] p-8 bg-white mt-4">
				<Card
					type="outlined"
					cardColor="bg-black"
					imageURL={text(
						"Image Url",
						"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg"
					)}
				>
					<Text type="title" textColor="text-black" text="Card Title" />
					<Text
						textColor="text-black"
						text="It is a long established fact that a reader will be distracted by
						the readable content."
					/>
					<ItemSeparator separatorStyle="h-4" />
					<Button
						type="outlined"
						buttonColor="bg-black"
						textColor="text-black"
						label="Action Button"
						onPress={action("clicked Button")}
					/>
				</Card>
			</View>
		</StoryWrapper>
	))
	.add("Flat Card", () => (
		<StoryWrapper
			title="Flat Card"
			description={
				"Flat card with customizable background color\n\n** Card image is optional **"
			}
			sampleCode={
				"<Card\n \ttype=\"flat\" \n\tcardColor=\"bg-blue-600\"\n>\n{CHILDREN_COMPONENTS}\n</Card>"
			}
		>
			<View className="w-full h-[52vh] p-8 bg-white mt-4">
				<Card
					cardColor="bg-blue-600"
					imageURL={text(
						"Image Url",
						"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg"
					)}
				>
					<Text type="title" textColor="text-white" text="Card Title" />
					<Text
						textColor="text-white"
						text="It is a long established fact that a reader will be distracted by
						the readable content."
					/>
					<ItemSeparator separatorStyle="h-4" />
					<Button
						type="outlined"
						buttonColor="bg-white"
						textColor="text-white"
						label="Action Button"
						onPress={action("clicked Button")}
					/>
				</Card>
			</View>
		</StoryWrapper>
	));
