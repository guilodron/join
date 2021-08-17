import styled from "styled-components/native";
import { scaleHeight } from "../../utils/scales";

export const Container = styled.View`
    margin-bottom: 20px;
`;

export const Text = styled.Text`
    margin-left: 24px;
    color: white;
    font-size: 15px;
    text-align: justify;
    padding-right: 18px;
`;

export const StarredAndPermission = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-top: ${scaleHeight(14)}px;
    margin-bottom: ${scaleHeight(34)}px;
`;

export const Line = styled.View`
    height: 1px;
    background-color: #7070705A;
`;
