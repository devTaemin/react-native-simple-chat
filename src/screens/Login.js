import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';
import { Image } from '../components';
import { images } from '../utils/images';

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Login = ({ navigation }) => {
    return (
        <Container>
            <Image 
                url={images.logo}
                imageStyle={{ borderRadius: 8 }}
            />
            <Button
                title="signup" 
                onPress={() => navigation.navigate('Signup')} 
            />
        </Container>
    );
}

export default Login;