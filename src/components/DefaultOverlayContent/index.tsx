import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import InfoComponent from 'components/InfoComponent';

import { Container, Heading, CodeInputContainer, Buttons } from './styles'

interface Props {
  label: string
  description: string
  index: number;
}

const DefaultOverlayContent: React.FC<Props> = ({ label, description, index }) => {
  const [viewInfos, setViewInfos] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const key = useMemo(() => "NUPEA2021", []);

  const handleOpenInfos = useCallback(() => {
    if (inputRef.current && inputRef.current.value.toUpperCase() === key) {
      setViewInfos(true);
      console.log(inputRef.current?.value);
    }
  }, [key, setViewInfos]);

  useEffect(()=>{
    if(viewInfos){
      document.body.classList.add('overlayed');
    }
  },[viewInfos]);

  return (
    <Container>
      {!viewInfos && (
        <>
          <Heading>
            <div className="heading-wrapper">

              {index === 0 ? (
                <h1 className="first">
                  RASTREIA <strong>PORK 4.0</strong> 
                </h1>
              ) : (
                  <h1>{label}</h1>
                )}
              <h2>{description}</h2>
            </div>
          </Heading>
          {index === 0 && (
            <CodeInputContainer>
              <div className="wrapper">
                <div className="heading">
                  <h3>CÓDIGO DE RASTREIO DO PRODUTO</h3>
                </div>
                <div className="content">
                  <input ref={inputRef} type="text" placeholder="Aqui vai seu código" />
                  <button onClick={handleOpenInfos} className="white">Rastrear</button>
                </div>
              </div>
            </CodeInputContainer>
          )}
          <Buttons>
            <button>NUPEA 2021</button>
            <button className="white">Avaliar nosso serviço</button>
          </Buttons>
        </>
      )}
      {viewInfos && index === 0 && (
        <InfoComponent />
      )}
    </Container>
  )
}

export default DefaultOverlayContent
