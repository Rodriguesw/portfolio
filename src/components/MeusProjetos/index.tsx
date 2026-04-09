
import ViewProjects from '../ViewProjects'
import TitleAndDescription from '../TitleAndDescription'

import bg1 from '../../assets/bg1.png'

import * as S from './styles'

export default function MeusProjetos() {
  return (
    <S.Container>
      <S.Wrapper id="projects">
        <TitleAndDescription 
          title="Meu trabalho" 
          description="Veja os projetos em destaque" 
        />

        <S.ContainerProjects>
          <ViewProjects image={bg1} title="Projeto 1" description="Rede social onde as pessoas mostram os registros de suas viagens pelo mundo" />
          <ViewProjects image={bg1} title="Projeto 2" description="Aplicação de gerenciamento de tarefas" />
          <ViewProjects image={bg1} title="Projeto 3" description="Plataforma de aprendizagem" />
          <ViewProjects image={bg1} title="Projeto 4" description="Sistema de gerenciamento de projetos" />
          <ViewProjects image={bg1} title="Projeto 5" description="Aplicação de gerenciamento de recursos humanos" />
          <ViewProjects image={bg1} title="Projeto 6" description="Plataforma de aprendizagem" />
        </S.ContainerProjects>
      </S.Wrapper>
    </S.Container>
  )
}
