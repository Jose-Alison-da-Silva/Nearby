import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.green.base,
        borderRadius: 10,
        gap: 14,
    },

    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[100],
    },
});