import React from "react";
import Clipboard from "@react-native-clipboard/clipboard";

import PropTypes from "prop-types";

import { View, Text, Alert, ScrollView } from "react-native";

import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";

const StoryWrapper = ({ title, description, sampleCode, children }) => {
	const copyToClipboard = () => {
		Clipboard.setString(sampleCode);
		Alert.alert("Copied to Clipboard"); //TODO replace with toast
	};

	return (
		<ScrollView>
			<View className="h-full pb-4 pt-8 px-4">
				<Text className="text-4xl font-bold text-white">{title}</Text>
				<ItemSeparator separatorStyle="h-2" />
				<Text className="text-white text-base">{description}</Text>
				<ItemSeparator separatorStyle="h-8" />
				<Text className="text-white text-base font-bold">Example:</Text>
				{children}
				<ItemSeparator separatorStyle="h-8" />
				<Text className="text-white text-base font-bold">Sample Code:</Text>
				<ItemSeparator separatorStyle="h-2" />
				<View className="bg-gray-300 p-4 rounded-md">
					<Text className="font-light">{sampleCode}</Text>
				</View>
				<ItemSeparator separatorStyle="h-4" />
				<Button
					label="Copy to Clipboard"
					onPress={copyToClipboard}
					buttonColor="bg-orange-500"
					textColor="text-white"
				/>
			</View>
		</ScrollView>
	);
};

StoryWrapper.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	sampleCode: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
export default StoryWrapper;
