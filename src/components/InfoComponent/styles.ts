import styled,{css} from 'styled-components';

interface CardProps{
    isSelected: boolean;
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    width: 80vw;
    height: 800px;

    margin-top: 80px;
    border-radius: 6px;
    padding: 20px;
     
    background: rgba(0,0,0,0.3);

    .info-wrapper{
        display: flex;
        flex-wrap: wrap;
        row-gap: 40px;
        justify-content: center;
        align-items: center;

        width: 50%;
        height: 100%;

        padding: 40px 30px;
        border-radius: 6px;
    }

    .prod{
        width: 50%;
    }

    .logo-container{
        display: flex;
        width: 50%;
        height: 100%;

        justify-content: center;
        align-items: center;

    .image-productor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-bottom: 48px;
    }
    .subitem-container{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 64px;

        .link{
            transition: .4s;
            &:hover{
                cursor: pointer;
                color: aquamarine;
                transform: scaleX(1.09) scaleY(1.09);
            }
        }

        .subitem-container-item{
            display: flex;
            justify-content: space-between;
            margin-top: 12px;

            span{
                width: 400px;
                font-weight: bold;
                font-size: 24px;
            }

            p{
                margin-right: 32px;
                font-size: 24px;
            }
        }

        
        h1{
            font-size: 64px;
        }
        p{
            margin-bottom: 12px;
        }
    }

        .wrapper{
            display: flex;
            width: 100%;
            height: 100%;

            border-radius: 6px;
            background: #fff;
            box-shadow: inset 0px 0px 6px 4px rgba(0,0,0,0.75);
            overflow-y: scroll;

            .data-info{
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                padding: 20px;

                .data-info-item{
                    display: flex;
                    p{
                        width: 500px;
                        font-size: 24px;
                    }
                    svg{
                        margin-left: 16px;
                    }
                    margin-bottom: 32px;
                }
            }
        }

        img{
            width: 50%;
        }
    }
`; 

export const CardInfo = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 220px;
    height: 220px;

    border-radius: 4px;

    background: rgba(106, 134, 141);
    margin-right: 40px;

    -webkit-box-shadow: inset 0px 0px 6px 4px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 6px 4px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 6px 4px rgba(0,0,0,0.75);

    transition: .4s;
    padding: 0 20px;

    h3{
        font-size: 24px;
        color: rgba(0,0,0,0.6);
        height: 40%;
    }

    &:hover{
        cursor: pointer;
        background: rgba(107, 107, 107,0.3);
    }

    ${props=>props.isSelected && css`
        background: rgba(255, 107, 107);
    `}  

    .img-container{
        display: flex;
        width: 100%;
        height: 40%;
        justify-content: center;
        align-items: center;
    }
`