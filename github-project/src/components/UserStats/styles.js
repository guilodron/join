import styled from 'styled-components/native'
import { scaleHeight } from '../../utils/scales';

export const Container = styled.View`
    flex-direction: row;
    height: ${scaleHeight(97)}px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #5252525D;
    margin-bottom: ${scaleHeight(47)}px;
`;

export const Value = styled.View`
    align-items: center;
`;
  
export const Number = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: white;
`;

export const Label = styled.Text`
    font-size: 17px;
    color: white;
`;