import { Header } from './components/Header'
import { GlobalStyles } from './components/GlobalStyles'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { ContentContainer, PageContainer } from './components/PageContainer'
import { Projects } from './components/Projects'

function App() {

  return (<>
    <GlobalStyles />
    <PageContainer>
      <ContentContainer>
        <Header />
        <About />
        <Projects />
        <Contact />
      </ContentContainer>
    </PageContainer>
  </>
  )
}

export default App
