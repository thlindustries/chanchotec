import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Overlay, Spacer } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <Overlay/>
      <ModelsWrapper>
        <div>
          {[
            'Rastreia',
            'Acesso à informação',
            'Transparência',
            'Consistência dos dados',
            '100% digital',
            'Análise inteligente'
          ].map((modelName,index) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Rastreabilidade 4.0 é o futuro!"
                  index={index}
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
