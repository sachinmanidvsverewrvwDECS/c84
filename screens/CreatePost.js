import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateStory extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorImageContainer}></View>
                    <Image source={require("../assets/profile_img.png")}style={styles.profileImage}>

                    </Image>
                </View>
                <View style={styles.authorNameContainer}>
                    <Text style={styles.authorNameText}>{this.props.post.author}
                    </Text>
                </View>
                

            </View>
        )
    }
}