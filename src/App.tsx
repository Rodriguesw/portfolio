
import Contato from './components/Contato'
import MeusProjetos from './components/MeusProjetos'
import MeusServiços from './components/MeusServiços'
import SobreMim from './components/SobreMim'

import * as S from './styles'

function App() {

  return (
    <S.Container>
      <SobreMim />

      <MeusProjetos />

      <MeusServiços />

      <Contato />
    </S.Container>
  )
}

export default App
