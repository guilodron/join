import styled from 'styled-components/native';
import { scaleHeight, scaleWidth } from '../../utils/scales';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${scaleHeight(108)}px;
    flex-direction: row;
    align-items: center;
    padding-right: 23px;
`;

export const ColorLabel = styled.View`
    height: ${scaleHeight(42)}px;
    width: 10px;
    background-color: #FFCE00;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-right: 14px;
`;

export const Avatar = styled.Image`
    height: ${scaleHeight(64)}px;
    aspect-ratio: 1;
    border-radius: 32px;
`;

export const UserName = styled.Text`
    font-size: 16px;
    color: white;
    margin-left: ${scaleWidth(32)}px;
    margin-right: auto;
`;