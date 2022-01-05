import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,SafeAreaView,FlatList } from 'react-native';
import { FlatList } from 'react-native-web';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { RFValue } from "react-native-responsive-fontsize";
import CreatePost from "./CreatePost";
import { FlatList } from "react-native-gesture-handler";

export default class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
      }
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
    
      renderItem = ({ item:Post }) => {
        return <CreatePost Post={Post} />;
      };
    
      keyExtractor = (item, index) => index.toString()

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <Veiw>
                    <Image source={require("../assets.logo.png")}style={styles.iconImage}>

                    </Image>
                </Veiw>
                <View style={styles.appTittleText}>
                    <Text  style={styles.appTittleText}>Spectagram</Text>
                    </View>

                    <View style={styles.cardContainer}>
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={post}
                        renderItem={this.renderItem}
                        
                        />
                    </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },

    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitle: {
        flex: 0.07,
        flexDirection: "row"
      },
      appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
      },
      cardContainer: {
        flex: 0.85
      }
})