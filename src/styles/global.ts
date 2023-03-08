import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
    }
}


html, body {
    font-family: 'Nunito', sans-serif;
    background-color: ${props => props.theme['base-background']};
}
`