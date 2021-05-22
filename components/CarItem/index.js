import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton'
import styles from './styles';

const CarItem = (props) => {

    const { name, tagLine, tagLineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
            style={styles.image}/>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagLine}
                    {' '}
                    <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type="primary" 
                    content={"Custom Order"}
                    onPress={() => {
                        console.warm('Anta mala nop')
                    }}
                />

                <StyledButton 
                    type="secondary" 
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warm('Anta mala nop')
                    }}
                />
            </View>


      </View>
    );
};

export default CarItem;