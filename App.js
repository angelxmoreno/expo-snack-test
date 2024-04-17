import { SafeAreaView, StyleSheet } from 'react-native';
import SnapchatSocialButton from './components/SnapchatSocialButton'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <SnapchatSocialButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});
