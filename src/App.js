import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/styles/Global.styled'
import TopBar from './components/topBar'
import SideBar from './components/sideBar'
const theme = {
  colors: {
    firstColor: '#d90062',
    firstAlphaColor: 'rgba(217, 0, 98, 0.75)',
    secondColor: '#14192d',
    secondAlphaColor: 'rgba(20, 25, 45, 0.75)',
    thirdColor: '#50146420',
    thirdAlphaColor: 'rgba(80, 20, 100, 0.75)',
    whiteColor: '#fff',
    grayLightColor: '#f3f3f3',
    grayColor: '#ccc',
    grayDarkColor: '#666',
    blackColor: '#000',
    linkColor: '#509ee340',
    titleColor: '#333',
    textColor: '#222',
    whiteAlphaColor: 'rgba(255, 255, 255, 0.5)',
    blackAlphaColor: 'rgba(0, 0, 0, 0.5)'
  },

  formatMain: {
    font: 'Raleway, sans-serif',
    maxWidth: '1200px',
    headerHeight: '4rem',
    boxShadow1: '0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25)'
  }

}
function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <TopBar />
        <div className='container'>
          <SideBar />
          <div className='pages'></div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
