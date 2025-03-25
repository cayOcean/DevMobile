import {Plataform, StyleSheet} from 'react-native'; 

export default StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: "row", 
        flexWrap: "wrap", 
        backgroundColor: "ghostwhite",
        alignItems: "center",
        ...Plataform.select({
            ios: {
                paddingTop: 40
            },
            android: {
                paddingTop: statusbar.currentHeight
            },
        }),
    },
    
    box: { 
        height: 100,
        widht: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidht: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",
        margin: 10,    
    },

    boxText: { 
        color: "darkslategray",
        fontWeight: "bold",
    },

});