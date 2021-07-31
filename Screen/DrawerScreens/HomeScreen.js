// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const user = AsyncStorage.getItem('user_id')

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Load Inquiry',
        url: "https://cdn3.vectorstock.com/i/1000x1000/19/62/inquiry-vector-30671962.jpg"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Request Quotation',
        url: "https://img.favpng.com/2/13/7/computer-icons-bidding-gavel-auction-png-favpng-a5maJ4NfLCrqa7t9sgA2CGySD.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'My Orders',
        url: "data:image/png;base64,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"
    },
    {
        id: '58694a0f-33e1-471f-bd96-145571e29d72',
        title: 'Post Loads',
        url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAA/FBMVEX///8zqdsREiQwMDAtmMZFRUXJyckAAADa2tvg4OD7+/vB5fUuns7V0tFBsN8xptiDyOibv9I3NzeoqKghISF+w+Ww3O81NTVGossvotI3nMY7OztBQUHV7fdLS0vf7/W8vLzy8vLE3uwTkcLn5+e/nZ4AABrFxcXV7fZjY2P79PWtKCYAABXK6PVXtuKRkZFVVVV5eXnQ2N6vr69nZ2ednZ2Xsr+Hh4cbGxuUlJoAAA6Oxt8pKSnRxcXoyMfGsLEXGClnaHF5eYEpKjhBQUwAAB9gYGlMTVeGho0sLjmf0+zesLGTISzKucFarc9zt9RTnL+2zdmyPDw6OkT5mhe/AAAMZklEQVR4nO2cDX+ixhaHfSkIGGKKadgUROxS1FajrnItWdsquIre3rvd+v2/yz3zAiJqIlmjce/8d2MEj8M8c86cOYP+kskwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMaVUdXlzUt3VTsN1k70+sbJ3p+D6eGosRFZ8fa4q+Ct7Yl1fP0ivDrY8ORZW+9XBbkrn4Cq9/iz7ZsF+YGAMjIExMAbGwBgYA2Ngkf749wWCVZ/Xh7/++g/8uiiw9n9/PEDv3r2Dx89pd3BnBLv77t3h+nF5MWDVQ9wV6bvPFwP2+bs0en85HnuXCiytw84HJmGw+9KBSst1djB4Tk9tGpRK+DE6vkmb8M8P9hAqYiutz0UvPaStVc4OVqq225VKu11tFG8IWunmrlGtNtrtRrsCj0jXpetlyoXs/GCNSrHYbheBrniHX1sWi8UKCE4XK204KLahl2lj8fxgFAHI2sVlCfyFWACz0Y7I2stS6YeU91jPD1akCEUIvWIJHRcJGTCBJ/FRMf0kewNgERmgPGSzMOUwWQOdRiGKjh5ST7K3ANbGCIisAQDk6XqaITKYZGkT/lsAw4kD4wBYFgFukaFJlu6zpzcBhuKOTDMCliBDR6XSQ7pq8W2AhdMsBCs2KG4lTI3wwjJVLL4RsCJBiMCiBEJTY/sGJlnlEsGIz9AcqxZjZJVGBafGxh1MslQJ//xg7SIlaZA51iArVzI1pq2qzg/WCMkQEQrFCiFrbJA1IOGnmmTnB6s0iqHPKmSOkZy4To04gUDCv0lTVZ0frEg9hKZZBYO1qRM3aqu7lFXVGwALPQTRVwWwSnGLDBcmKauqtwC2JqviWrEYOrEd81nlJt3W5U2AtUMyUgTHyGIJ5C5dVfUmwNZkCKwYIyPnG5gsm01TVZ0fLFZp4HTfiLadm6kRTbKbw784d36wcL2iYNfV9iZZVFulq6rOD1ah4dYOPRbbUG8k/btS9uGSwBqYhO5cULrH2R0OyHkapbDGVa9LDwdzvQGwJQh98XS5/Hhzc53Nftyn5UM2xQ3hs4NlN+5kw+H7vbq6LLDkS+ijFaLkBxP3lw72+QNR8oMmADv8g823CPb3v4j+3gLLvv/pksH2h+Klg+0RA2NgRxcDuzSwq9cHW16dgax0VXl1sOrV1cFfSTiS7q+u3mVeHSxz9/7q9GqcACzz0/2psR6A69XBJMsSv3x/Un2xLEvaC5a9vzoKmCifRSL9LtUOMJJdvhpMqPP79dRrXycBPIaq3C0wut3ciZYObP/FZUE8TIKcGqysau+/F5LCrX348vEBb6W30I7jMcES+XJnOOyU6/B0l0IDxwSDdGxy+Xb0xUo2J5hOB5rry5b4EX376P6rkocglLfVFyx+2FUVLNXomdtoFt+JDDhkYDo7GtonY5SXE1jlgaZQNR1Z/LhNljLdZwq3CRWagtDTNCVPpWjagN9Es4SerikqNVA1rVm3OlsN7dcovwlmlY1Yc4rGOdYHcFrpq8B+y2/qtmP1FU3dOKflOxv96OtJA3Vombf5FIqDCQNF23hR0bq89ZAgQ2BpPtRMgP3WsTrq5mXQlZRejMtRdhgMRHNEKblnpG+AWbyRGCbUhm5isvu14CjVNyI2wW4HVieKQphE63AbWBGXusMgrzWtMmnLeFZaHEzmomGC9qLmNFPcWgzScEm3akx5wyrTbqu6jkdXp4fa0KJxqCQMaL+0Xq2HfbZ2jWHsfh4HE7rh+2l70aH8U2LrUTr8I83aVk0g0ziEi6C0oY3gUioZzb4VH2BkoCIDPTIoi/nDwJQ1mNUjzSmAO4Lm8BMaArBEJnXoB0licoWxBrhVFXCUQadc7vQ0HXcELtQVYh1BBk0wcHp6ZKCLzm1aMFNV6TBpxtApO8OuRiYhsJaT3eN58TCuX35Pvs+k3YbxMsmpOpAQlygOuIzPq9Sg248ZELKOqD0DRsJtDWY1NTKjVN0JyxJOUXQyUNbWwv/7LweB/fNz4n3UHzqn9NZedMB/GKwLHRnGDerUQKMGnDUcPQmmEuesweo4+yiczpmkOfipg9MIbn/LZT//c5DDfk2AyYJOrzOA9oWaJNXEOi8PyYVUtS6KhkIMmpEBvK+jkejRTLSY7QfT6WyKwCAFk3HSkfstSZKQk0yDDBRk4i2wXw9x2RaY2FfIdbQ6X7cycB0pU4PzXXohxzLXHYkbNHViMBSfDMVw/q491qTjNJR5WSLtQWHu0JE0tgrsl4J1CFi+h6aphJWBUevk8dqmDCyHgOUHMtp7EINanXcgPyKDZo0bjZ7xGMStEtaKsoEiRFM1CESJKgMd4fLEtJ7cfrwQzOrh/uv5Ms/XwgtJEBsaXl0Uo4anmMqpDl+PDDIyX1exgdoVcRbdO8d0Upfouk7AeDJOWleOBhKiked7Cpm0/WOBDRQ8pDCAcsQFsVE38GAreo2Qc1p5PcISLBoy8YZqwEIjGfvBiDQzI9FkjyOE03sQ2FF7EAEdEtrbCf8wMGkLrLkGy+wCs0IwmOuRgQRgxEDlDgJTzEzGSoKtI0Sqo2xEJvU22EHVxx9/7vFYP+4QmTfJvFc4abjLYxAv2k6PcbGn3CaYZNVAMgVryrwVDRR4bLjPY3/+cQjX1g7awv1WtVEHRjC8EGS98kghuSHjYAN9NAyTIpmE/TyuxGClg7fpsVm2U2o/vL6lk1yk8+sQgXGSuyO6fCTA6sJhXBnL3JBYpiPY5dcegYzb0/HSqnQyPEmbuoEMMlFHoK7C6a1nQTE3uB09qduRHE2GLg4RXXOigUJJtg8FMR5AXtjsoGkdCJapbUgk/YZYhPoGFZzQd4izPl1/VROGWCUGHSDDFSkyMMNM7ojoTc/cBhJivevFRlLE0wetyQM6kFDqbHbwhX+FDFJVl1yI01GlCCkZpVtIHfg6qgrtktqOI6UCNUDrM4lhXkx5aZOOpN5DS7GIbwvJUSHTsQ720NOy6AIMq4heDuPaNPJkj6QMUU9UaqDiohXNURNmhE5LoLQdkciuFrYs6+J0OCKrmKrK1tH+UFzNoDsQTuv1UUHah+lDuq1qeObS+hQMBmWoI/n+MDLIy881vy2H7FqhCaMDiwxvOl2Nbm613rGokPpkr482RarR7RqqHm2PhtigTvYta4No//SijkhGWEBymtbtdnWFI4GfV9QjxSEV2WlCRuIIE0fvDWgGXRqHdO8O8wqVRyqZXwj1RXEjK+HbdUJHN9DqelE4jmrhPQhVQzEW3kDStHDzKjU3Dej9F015QSAihTdZoLDB7dHGaYAcUdb6rtFamsJHBjVjl8Go/tILdvLKVnOqetQJRlRrKokrqZoRX/KlwbYB90J/IfW37lNqUAu8hhwt3nNVU4aJ6VNOGOR7X5WXhebGPVpFNV7s/mdkDfPo4wYQ/Br1tr1hdRQ1MsgP+B1tpJLZXV8wz5Vf8e+c1sxhF81lo9ffnXWl0GBQPkpaFpwm2oByzc5Xj9Kzkp4rzp41SKkjN8fExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTElMls/emub0SZwjeqTO4bFQO7ND0JZtsbR/TnMkTBVvDjj8nzBf2da83mrcUqtBzP7Zw/W5y2ey8XAbMnM7sVtFqtnN0qBGO71bLhCfrbgJ5TaBUKObtQWMiFwiqYnrm/B4t6bBy0xp7nBgXP9QJ34bre1J0L80JhYs1cQfangjCvTwV/unq6uSPLjse+nfgdmdhjdM7OjekDFgVruePJxGt5k0mhEHxycwXPmz1OZdGbuD5fmPXrq4JvCfapp5hne9Bvf4W6Ow4mK9uHo8Ae2z4648N/6J87m7uzIOfBLz+Yz9zHOJg9mwUzF9imEJKfnMfWJJjbj4VPgufOzcLK5B8fF5bsnxjMhuEtu/AzDwJ3HszLMw+dCexpMA+8ACLMy3nToOy7c88re2M3CGYLz46D5Ww4H9i+7+bGs9lkloNhsJ2Jy0P4CV7dc01vys+FxxODTfsLd47/uc4nYJxMXHfuBKu5NwsCbxG43qMLU2jmzieAjs65AY3FCGwC/g089PM4KUyCsb+w525gQ2b85M5aj+DyScE7deqA0Fv4uSk8+L698sfjFcD646m9Gi/Gfs73p7m5P20tFrnpo++PV4+rXJi2o3UMr1Lw0EIT1m7hUy0bn8O/Wpsz+c1oX5/+PyuPSxYDuzT9D/tQqPVnr6F/AAAAAElFTkSuQmCC"
    },
];

const Item = (item) => {
    console.log(item);
    return (
        <View style={styles.item} >
            <TouchableOpacity
                onPress={() => item.navigation.navigate(item.title)}
            >
                <Image source={{ uri: item.url }} style={{ width: 50, height: 60, alignSelf: "center" }} />
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>

        </View >
    )
};

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} url={item.url} navigation={navigation} />
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ justifyContent: "flex-end", padding: 16 }}>
                <Text>Welcome</Text>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    item: {
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: "#ccc",
        width: width / 2.3,
        height: 100,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: "#777",
        elevation: 2,
        shadowOpacity: 0.5
    },
    title: {
        textAlign: "center",
        fontSize: 14,
    },
});

export default HomeScreen;