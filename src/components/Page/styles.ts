import styled from 'styled-components'

import animaisGranja from 'assets/2.jpeg';
import porquinhos from 'assets/porquinhos.jpg';
import porquinhos2 from 'assets/porquinhos2.jpg';
import corredor from 'assets/corredor.jpg';
import porquinhos3 from 'assets/porquinhos3.jpg';
import porquinha from 'assets/porquinha.jpg';

export const Container = styled.div`
  position: relative;

  .colored:nth-child(1) {
    background-image: url(${animaisGranja});
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;background-size: cover;                      /* <------ */
    background-position: center center;  
  }

  .colored:nth-child(2) {
    background-image: url(${porquinhos});
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;                 
    background-position: center center;  
  }

  .colored:nth-child(3) {
    background-image: url(${porquinhos2});
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;                 
    background-position: center center;  
  }
  .colored:nth-child(4) {
    background-image: url(${corredor});
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;                 
    background-position: center center;  
  }
  .colored:nth-child(5) {
    background-image: url(${porquinhos3});
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;                 
    background-position: center center;  
  }
  .colored:nth-child(6) {
    background-image: url(${porquinha});
    object-fit: contain;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;                 
    background-position: center center;  
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.3);
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`
