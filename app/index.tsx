import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Instagram = () => {

    const storiesData = [
        {
            id: 1,
            name: "Your story",
            avatar: "https://img.freepik.com/free-photo/portrait-happy-young-african-man_171337-8809.jpg?t=st=1746009521~exp=1746013121~hmac=6028cb690b9aadecc9e77444a15de9607265c44ca4172f9728a1c177e69bc4a6&w=1380",
        }, {
            id: 2,
            name: "Muizah",
            avatar: "https://img.freepik.com/free-photo/lady-looking-excited-happy-using-her-phone-carrying-handbag_181624-43869.jpg?t=st=1746009556~exp=1746013156~hmac=498b27b6515323eef05e5c4fe8f0835bc5fc9d6b52b125a9bc544c197726d935&w=740",
        }, {
            id: +3,
            name: "Your story",
            avatar: "https://img.freepik.com/free-photo/portrait-happy-young-african-man_171337-8809.jpg?t=st=1746009521~exp=1746013121~hmac=6028cb690b9aadecc9e77444a15de9607265c44ca4172f9728a1c177e69bc4a6&w=1380",
        }, {
            id: 4,
            name: "Muizah",
            avatar: "https://img.freepik.com/free-photo/lady-looking-excited-happy-using-her-phone-carrying-handbag_181624-43869.jpg?t=st=1746009556~exp=1746013156~hmac=498b27b6515323eef05e5c4fe8f0835bc5fc9d6b52b125a9bc544c197726d935&w=740",
        }, {
            id: 5,
            name: "Your story",
            avatar: "https://img.freepik.com/free-photo/portrait-happy-young-african-man_171337-8809.jpg?t=st=1746009521~exp=1746013121~hmac=6028cb690b9aadecc9e77444a15de9607265c44ca4172f9728a1c177e69bc4a6&w=1380",
        }, {
            id: 6,
            name: "Muizah",
            avatar: "https://img.freepik.com/free-photo/lady-looking-excited-happy-using-her-phone-carrying-handbag_181624-43869.jpg?t=st=1746009556~exp=1746013156~hmac=498b27b6515323eef05e5c4fe8f0835bc5fc9d6b52b125a9bc544c197726d935&w=740",
        }, {
            id: 7,
            name: "Your story",
            avatar: "https://img.freepik.com/free-photo/portrait-happy-young-african-man_171337-8809.jpg?t=st=1746009521~exp=1746013121~hmac=6028cb690b9aadecc9e77444a15de9607265c44ca4172f9728a1c177e69bc4a6&w=1380",
        }, {
            id: 8,
            name: "Muizah",
            avatar: "https://img.freepik.com/free-photo/lady-looking-excited-happy-using-her-phone-carrying-handbag_181624-43869.jpg?t=st=1746009556~exp=1746013156~hmac=498b27b6515323eef05e5c4fe8f0835bc5fc9d6b52b125a9bc544c197726d935&w=740",
        },
    ];

    // const suggestionData = [
    //     {id}
    // ]


    return (
        <View style={styles.page}>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginRight: 15, marginBottom: 18 }}>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Instagram</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={{ uri: "https://img.icons8.com/?size=100&id=87&format=png&color=000000" }} />
                    <View>
                        <Image
                            style={{ height: 25, width: 25, marginLeft: 20 }}
                            source={{ uri: "https://img.icons8.com/?size=100&id=143&format=png&color=000000" }}
                        />
                        <View style={{
                            height: 20, width: 20, borderRadius: 20, backgroundColor: 'red',
                            justifyContent: 'center', alignItems: 'center', position: 'absolute', right: -10, top: -5
                        }}>
                            <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* // stories */}
            <ScrollView>
                <FlatList
                    data={storiesData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginRight: 10, }}>
                                <View style={styles.circle}>
                                    <Image source={{ uri: item.avatar }}
                                        style={{ height: 75, width: 75, borderRadius: 200, }} />
                                </View>
                                <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>{item.name}</Text>
                            </View>
                        )
                    }}
                />

                {/* suggestions  */}
                <View style={{ marginTop: 20, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, marginRight: 15 }}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: 'bold' }}>Suggested for you</Text>
                        <Text style={{ fontSize: 15, color: "blue", fontWeight: 'bold' }}>See all</Text>
                    </View>
                    <FlatList
                        data={storiesData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.box}>
                                    <TouchableOpacity>
                                        <Image
                                            source={{ uri: "https://img.icons8.com/?size=100&id=71200&format=png&color=000000" }}
                                            style={{ height: 17, width: 17, alignSelf: 'flex-end', opacity: 0.5, }}
                                        />
                                    </TouchableOpacity>

                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={{ height: 130, width: 130, borderRadius: 100, alignSelf: 'center', marginTop: 10 }}
                                    />
                                    <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
                                    <TouchableOpacity style={styles.followBtn}>
                                        <Text style={{ fontSize: 13, color: 'white', fontWeight: '600' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>

                {/* POSTS */}
                <View>
                    <FlatList
                        data={storiesData}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.bigBox}>

                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>

        </View>
    )
}

export default Instagram;

const styles = StyleSheet.create({
    page: {
        paddingTop: 55,
        paddingLeft: 15,
    },
    circle: {
        height: 90,
        width: 90,
        borderWidth: 3,
        borderRadius: 200,
        borderColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 260,
        width: 220,
        borderWidth: 1,
        marginRight: 20,
        borderRadius: 5,
        padding: 7,
    },
    followBtn: {
        height: 40,
        width: 200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 5,
    },
    bigBox: {
        height: 400,
        borderWidth: 2,
    },
})