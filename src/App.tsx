import { Header } from './components/Header'
import { GlobalStyles } from './components/GlobalStyles'
import { About } from './components/About'
import { ContentContainer, PageContainer } from './components/PageContainer'

function App() {

  return (<>
    <GlobalStyles />
    <PageContainer>
      <ContentContainer>
        <Header />
        <About />
      </ContentContainer>
    </PageContainer>
  </>
  )
}

export default App
