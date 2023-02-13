import { StyleSheet } from "react-native";
import { dimensions } from "../services/constants";



export const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderStyle: {
        height: 0,
    },
    carousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
        color: 'black',
    },
    list: {
        marginTop: 25,
    },
    container: {
        padding: 5,
        position: 'relative',
        alignItems: 'center',
        height: 200,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 20,
    },
    detailImage: {
        height: dimensions.height / 2.5,
    },
    movieName: {
        position: 'absolute',
        width: 100,
        top: 10,
        textAlign: 'center',
        color: 'black',
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
    },
    genresContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    genre: {
        marginRight: 10,
        fontWeight: 'bold',
    },
    overview: {
        padding: 15,
    },
    releaseDate: {
        fontWeight: 'bold',
    },
    button: {
        alignContent: 'center',
        borderRadius: 50,
        width: 50,
        padding: 10,
        backgroundColor: '#4481FC',
    },
    playButton: {
        position: 'absolute',
        top: -40,
        right: 20,
    },
    videoModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
    },
    mainNav: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        borderRadius: 15,
        borderWidth: 0.5,
        height: 50,
        padding: 8
    },
    searchContainer: {
        padding: 10,
        paddingTop: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    form: {
        flexBasis: "auto",
        flexGrow: 1,
        paddingRight: 8
    }
});