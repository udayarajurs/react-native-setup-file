import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {fetchMovies, addToWishList, removeFromWishlist} from '../redux/actions';
import {BASE_URL} from '../utilities';

const SearchScreeen = props => {
  const {movieReducer, fetchMovies, addToWishList, removeFromWishlist} = props;

  const {movies, wishlist} = movieReducer;

  const [currentMovie, setCurrentMovie] = useState(undefined);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setCurrentMovie(movies[0]);
    }
  }, [movies]);

  const didTapCurrentMovie = movie => {
    setCurrentMovie(movie);
  };

  const onTapAddToWishlist = movie => {
    addToWishList(movie);
  };

  const onTapRemoveFromWishlist = movie => {
    removeFromWishlist(movie);
  };

  const isExist = movie => {
    if (wishlist.filter(item => item._id === movie._id).length > 0) {
      return true;
    }

    return false;
  };

  return (
    <View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={({item}) => (
            <View style={styles.movieCard}>
              <TouchableOpacity
                style={{flex: 1, justifyContent: 'space-between'}}
                onPress={() => didTapCurrentMovie(item)}>
                <Image
                  resizeMode="stretch"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={{
                    uri: `${BASE_URL}/s3_images/${item.thumbnail}`,
                  }}
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', padding: 20}}>
                {' '}
                {item.title}{' '}
              </Text>
              {isExist(item) ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#208103',
                    width: '100%',
                    height: 44,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => onTapRemoveFromWishlist(item)}>
                  <Text
                    style={{color: '#FFF', fontSize: 12, fontWeight: '600'}}>
                    {' '}
                    Remove from Wishlist
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#D92F24',
                    width: '100%',
                    height: 44,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => onTapAddToWishlist(item)}>
                  <Text
                    style={{color: '#FFF', fontSize: 12, fontWeight: '600'}}>
                    {' '}
                    Add to Wishlist
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  movieReducer: state.movieReducer,
});

const ASearchScreeen = connect(mapStateToProps, {
  fetchMovies,
  addToWishList,
  removeFromWishlist,
})(SearchScreeen);

export default ASearchScreeen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  posterView: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listView: {
    width: Dimensions.get('screen').width,
    flex: 5,
    padding: 10,
  },
  poster: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    height: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  movieCard: {
    height: 150,
    width: 200,
  },
});
