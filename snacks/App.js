import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import {
    AmazonSocialButton,
    AppleSocialButton,
    FacebookSocialButton,
    GitHubSocialButton,
    GoogleSocialButton,
    InstagramSocialButton,
    LinkedInSocialButton,
    MicrosoftSocialButton,
    TwitterSocialButton
} from "react-native-social-buttons";

export default function App() {
    const handlePressed = name => () => Alert.alert(name);

    return (
        <SafeAreaView style={styles.container}>
            <AmazonSocialButton onPress={handlePressed('Amazon')}/>
            <AppleSocialButton onPress={handlePressed('Apple')}/>
            <FacebookSocialButton onPress={handlePressed('Facebook')}/>
            <GitHubSocialButton onPress={handlePressed('Github')}/>
            <GoogleSocialButton onPress={handlePressed('Google')}/>
            <InstagramSocialButton onPress={handlePressed('Instagram')}/>
            <LinkedInSocialButton onPress={handlePressed('LinkedIn')}/>
            <MicrosoftSocialButton onPress={handlePressed('Microsoft')}/>
            <TwitterSocialButton onPress={handlePressed('Twitter')}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
