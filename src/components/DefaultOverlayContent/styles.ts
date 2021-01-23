import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const Heading = styled.div`
  margin-top: 16.5vh;

  width: 100%;
  text-align: center;

  .heading-wrapper{
    color: #fff;
    padding: 12px;
    border-radius: 6px;

    .first{
      /* background: #000; */
      padding: 12px;

      border-radius: 12px;
    }
    > h1 {
      font-weight: 500;
      font-size: 60px;
      line-height: 48px;
      color: #fff;
      font-weight: bold;

      strong{
        color: rgb(255, 190, 0);
      }
    }
    > h2 {
      font-weight: bold;
      font-size: 22px;
      line-height: 20px;
      color: #fff;
    }
  }
`

export const CodeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 500px;
  height: 200px;
  margin-top: -64px;

  background: rgba(71, 75, 79,1);

  border-radius: 8px;
  padding: 8px;

  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 8px;

    background: rgba(255, 255, 255,0.9);

    .heading{
      display: flex;
      height: 30%;
      width: 100%;
      justify-content: center;
      align-items: center;

      color: rgba(0,0,0,0.5);
    }

    .content{
      display: flex;
      flex-direction: column;
      height: 50%;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      button{
        opacity: 0.8;
        width: 240px;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 20px;
        border: none;
        outline: 0;
        cursor: pointer;
        background: #000;
        color: #fff;
        opacity: 0.65;

        transition: .4s;

        &:hover{
          transform: scaleX(1.09) scaleY(1.09);
          background: rgba(0,0,0,0.3);
        }

      }
    }
  }

  input{
    width: 240px;
    height: 40px;
    border: none;
    
    border-radius: 4px;
    margin-top: -12px;

    &::placeholder{
      color: #ccc;
      padding: 0 12px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 130px;

  > button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;
    width: 240px;


    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }
`
