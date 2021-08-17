import styled from 'styled-components/native'
import { scaleHeight } from '../../utils/scales';

export const Container = styled.View`
    width: 100%;
    height: ${scaleHeight(56)}px;
    background-color: white;
    border-radius: 12px;
    margin: ${scaleHeight(48)}px 0 ${scaleHeight(19)}px 0;
    padding: 0 20px;
    position: relative;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 100%;
    font-size: 20px;
    /* font-family: Roboto; */
`;

export const ErrorText = styled.Text`
    position: absolute;
    right: 20px;
    top: 18px;
    color: #EB2D2D;
    font-size: 14px;
`;