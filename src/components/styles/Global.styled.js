import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    html{
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.formatMain.font};
        font-size: 16px;
        scroll-behavior: smooth;
    }

    *,
    *::after,
    *::before{
        box-sizing: inherit;
    }

    body{
        margin: 0;
        overflow-x: hidden;
        color: ${({ theme }) => theme.colors.textColor};   
    }

    a{
        color: ${({ theme }) => theme.colors.linkColor};
        transition: all 0.5s ease-out;
    }

    a:hover{
        opacity: 0.75;
    }

    h1 {
        margin: 0;
        font-size: 2rem;
    }

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }

    h3 {
        margin: 0;
        font-size: 1.25rem;
    }

    h4 {
        margin: 0;
        font-size: 1rem;
    }

    h5 {
        margin: 0;
        font-size: 0.85rem;
    }

    h6 {
        margin: 0;
        font-size: 0.7rem;
    }

    img{
        max-width: 100%;
        height: auto;
    }

    p{
        p{
            line-height: 1.6;
        }
    }
`

export default GlobalStyle
