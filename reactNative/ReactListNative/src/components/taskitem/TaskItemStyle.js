import { StyleSheet } from "react-native";

export const TaskItemStyle = StyleSheet.create({
    cardBox: {
        width: "100%",
        backgroundColor: "#31364D",
        height: 70,
        alignItems: "center",
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        borderRadius: 5,
    },

    cardText: {
        fontSize: 20,
        color: "#fff",
        paddingLeft: 20,
    },

    imagesCard: {
        height: 70,
        marginLeft: "auto",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginRight: 15,
    },

    buttonEdit: {
        width: 45,
        height: 45,
        borderWidth: 2,
        borderColor: "#3498DB", 
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonDelete: {
        width: 45,
        height: 45,
        borderWidth: 2,
        borderColor: "#E74C3C", 
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        width: 30,
        height: 30,
    },
});