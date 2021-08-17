import styled from 'styled-components/native';
import { scaleHeight } from '../../utils/scales';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${scaleHeight(56)}px;
    background-color: #FFCE00;
    border-radius: 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
`;