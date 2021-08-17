import styled from 'styled-components/native';
import { scaleHeight } from '../../utils/scales';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #292929;
`;

export const AvatarTile = styled.View`
    width: 100%;
    height: ${scaleHeight(70)}px;
    background-color: #1F1F1F;
    z-index: -10;
`;

export const Avatar = styled.Image`
    height: ${scaleHeight(115)}px;
    aspect-ratio: 1;
    z-index: 10;
    margin-top: -${scaleHeight(55)}px;
    border-radius: 55px;
    margin-bottom: ${scaleHeight(39)}px;
`;

export const NameInfo = styled.View`
    width: 100%;
    margin-bottom: ${scaleHeight(44)}px;
`;

export const InfoText = styled.Text`
    margin-left: 24px;
    color: white;
    font-size: 18px;
    text-align: justify;
    padding-right: 18px;
`;