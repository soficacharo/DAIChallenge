import React from "react";
import {TouchableOpacity, View, Text, Linking} from "react-native";


const Footer = () => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={() => Linking.openURL(props.linkAddress)}>
                <Text style={textStyle}> { props.footerText}</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = {
    textStyle: {
        fontSize: 18
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
export {Footer};