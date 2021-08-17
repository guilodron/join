import styled from 'styled-components/native';
import { scaleHeight } from '../../utils/scales';

export const Container = styled.View`
    width: 100%;
    height: ${scaleHeight(42)}px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
`;

export const ColorLabel = styled.View`
    height: 100%;
    width: 10px;
    background-color: #FFCE00;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-right: 14px;
`;

export const TitleText = styled.Text`
    color: white;
    font-size: 26px;
    font-weight: bold;
`;