import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Provider as PaperProvider, Searchbar } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CATEGORIAS = ['Most Wanted', 'Best Rated', 'Least Liked', 'Chuck Norris', 'Liked'];

const FILMES_DADOS = [
    {
        id: '1',
        titulo: 'A Empregada',
        autor: 'Freida McFadden',
        preco: 'R$ 45,90',
        descricao: 'A Empregada é um romance de suspense psicológico que segue a história de uma jovem mulher que aceita um emprego como empregada doméstica em uma mansão isolada. À medida que ela se envolve mais na vida da família para a qual trabalha, segredos obscuros começam a emergir, colocando sua própria segurança em risco.',
        tags: ['Design', 'User Interface'],
        imagem: 'https://m.media-amazon.com/images/I/81qjGN2mqPL._UF1000,1000_QL80_.jpg',
    },
    {
        id: '2',
        titulo: 'Grey´s Anatomy',
        autor: 'HULU',
        preco: 'R$ 25,90',
        descricao: 'Grey´s Anatomy é uma série de televisão americana que segue a vida de médicos e residentes do fictício Hospital Seattle Grace. A série é conhecida por seus personagens complexos, tramas emocionantes e momentos dramáticos, explorando temas como amor, amizade, ética médica e desafios profissionais.',
        tags: ['Design', 'User Interface'],
        imagem: 'https://m.media-amazon.com/images/M/MV5BYTVjNWVhYTctMGJkMS00NWFjLWE2N2QtNmQ1Y2FhZDFkNzUwXkEyXkFqcGc@._V1_.jpg',
    },
    {
        id: '3',
        titulo: 'Magic Mickey - The Movie',
        autor: 'Disney',
        preco: 'R$ 59,90',
        descricao: 'Mickey é um camundongo que vive em um mundo mágico e encantado. Ele é conhecido por sua personalidade alegre, otimista e aventureira. Mickey é um personagem icônico da Disney e tem sido amado por gerações de fãs ao redor do mundo.',
        tags: ['Design', 'User Interface'],
        imagem: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/09/15/1885838941-mickey-a-historia-de-um-camundongo-poster-disney-plus.jpg',
    },
    {
        id: '4',
        titulo: 'Braddock',
        autor: 'Paramount+',
        preco: 'R$ 25,90',
        descricao: 'Braddock é um filme de ação e aventura que segue a história de um soldado que se vê envolvido em uma missão perigosa. O filme é conhecido por suas cenas de ação intensas e sua narrativa envolvente.',
        tags: ['Action', 'Adventure'],
        imagem: 'https://m.media-amazon.com/images/I/71HtYr5OlzL._AC_SL1000_.jpg',
    },
    {
        id: '5',
        titulo: 'Rambo Programado para Matar',
        autor: 'Paramount+',
        preco: 'R$ 25,90',
        descricao: 'Rambo Programado para Matar é um filme de ação e aventura que segue a história de um ex-soldado que se vê envolvido em uma missão perigosa. O filme é conhecido por suas cenas de ação intensas e sua narrativa envolvente.',
        tags: ['Action', 'Adventure'],
        imagem: 'https://m.media-amazon.com/images/M/MV5BYzc4ZmQ5YzEtYTQzYy00ZDdiLWI2NmQtZTA3MzM1ZGIyYmUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
        id: '6',
        titulo: 'Texas Walker Ranger',
        autor: 'Paramount+',
        preco: 'R$ 25,90',
        descricao: 'Texas Walker Ranger é uma série de ação e crime centrada em Cordell Walker (Chuck Norris), um Texas Ranger de elite que combate o crime em Dallas utilizando artes marciais e métodos tradicionais. Com um forte código moral, ele e seu parceiro Jimmy Trivette resolvem casos difíceis, misturando faroeste moderno com investigações.',
        tags: ['Action', 'Adventure'],
        imagem: 'https://m.media-amazon.com/images/I/91b4KhYE-aL._AC_SL1500_.jpg',
    }
];

const CardFilme = ({ item }) => {
    const handlePress = () => {
        Alert.alert('Detalhes', `Você clicou em: ${item.titulo}`);
    };

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress} activeOpacity={0.7}>
            <Image source={{ uri: item.imagem }} style={styles.capa} />

            <View style={styles.infoContainer}>
                <Text style={styles.titulo} numberOfLines={2}>
                    {item.titulo}
                </Text>
                <Text style={styles.autor}>{item.autor}</Text>
                <Text style={styles.preco}>{item.preco}</Text>
                <Text style={styles.descricao} numberOfLines={3}>
                    {item.descricao}
                </Text>

                <View style={styles.tagsContainer}>
                    {item.tags.map((tag, index) => (
                        <View key={index} style={styles.tagBadge}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#262A4E" />

                <View style={styles.header}>
                    <Text style={styles.logoText}>R E A C T</Text>
                    <Text style={styles.logoSubText}>MOVIE</Text>
                </View>

                <View style={styles.searchContainer}>
                    <Searchbar
                        placeholder="Pesquisar..."
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={styles.searchBar}
                        inputStyle={styles.searchInput}
                        iconColor="#8A8CB2"
                        placeholderTextColor="#8A8CB2"
                    />
                </View>

                <View style={styles.categoriasWrapper}>
                    <FlatList
                        data={CATEGORIAS}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.categoriaPill}>
                                <Text style={styles.categoriaText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.categoriasContainer}
                    />
                </View>

                <View style={styles.divider} />

                <FlatList
                    data={FILMES_DADOS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CardFilme item={item} />}
                    contentContainerStyle={styles.listaPrincipal}
                    showsVerticalScrollIndicator={false}
                />

                <View style={styles.bottomNav}>
                    <TouchableOpacity>
                        <Ionicons name="grid" size={24} color="#8A8CB2" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="search" size={24} color="#D8D8E9" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="bookmark" size={24} color="#4A528A" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="menu" size={28} color="#4A528A" />
                    </TouchableOpacity>
                </View>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262A4E',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 15,
    },
    logoText: {
        color: '#4A528A',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 4,
    },
    logoSubText: {
        color: '#4A528A',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    searchBar: {
        backgroundColor: '#2D325A',
        borderRadius: 25,
        height: 50,
        borderWidth: 1,
        borderColor: '#3D437A',
    },
    searchInput: {
        color: '#FFF',
        fontSize: 14,
    },
    categoriasWrapper: {
        marginBottom: 15,
    },
    categoriasContainer: {
        paddingHorizontal: 20,
        gap: 10,
    },
    categoriaPill: {
        backgroundColor: '#3D437A',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
    },
    categoriaText: {
        color: '#8A8CB2',
        fontSize: 12,
    },
    divider: {
        height: 1,
        backgroundColor: '#3D437A',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    listaPrincipal: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#262A4E',
    },
    capa: {
        width: 90,
        height: 130,
        borderRadius: 8,
        backgroundColor: '#3D437A',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    titulo: {
        color: '#E0E0E0',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    autor: {
        color: '#8A8CB2',
        fontSize: 12,
        marginBottom: 10,
    },
    preco: {
        color: '#E0E0E0',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    descricao: {
        color: '#8A8CB2',
        fontSize: 12,
        marginBottom: 10,
    },

    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tagBadge: {
        backgroundColor: '#3D437A',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 8,
    },
    tagText: {
        color: '#8A8CB2',
        fontSize: 10,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1E2140',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#2D325A',
    },
});
