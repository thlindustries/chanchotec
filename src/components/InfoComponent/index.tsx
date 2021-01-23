import React, { useState, useCallback } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import * as data from 'data/info';

import { Container, CardInfo } from './styles';

import produtor from 'assets/produtor.png';
import ciclo from 'assets/ciclo.png';
import transporte from 'assets/transporte.png';
import granja from 'assets/granja.png';
import ismael from 'assets/ismael.jpg';

const InfoComponent: React.FC = () => {
    const [selected, setSelected] = useState(0);

    const handleChangeCard = useCallback((position: number) => {
        setSelected(position);
    }, [setSelected]);

    const selectInfo = useCallback(() => {
        switch (selected) {
            case 0:
                return (
                    data.granja.map(item => (
                        <div className="data-info-item">
                            <p>{item.description}</p>
                            {item.state ? (<FaCheck size={40} color="#009c4e" />) : (<FiX size={40} color="e03b2f" />)}
                        </div>
                    ))
                )
            case 1:
                return (
                    <>
                        <div className="image-productor">
                            <img src={ismael} alt="ismael" />
                            <p>Produtor Ismael França</p>
                        </div>
                        {data.produtores.map(item => (
                            <div className="data-info-item">
                                <p>{item.description}</p>
                                {item.state ? (<FaCheck size={40} color="#009c4e" />) : (<FiX size={40} color="e03b2f" />)}
                            </div>
                        ))}
                    </>
                )
            case 2:
                return (
                    <>
                        {data.producao.map(item => (
                            <div className="subitem-container">
                                <h1>{item.Maternidade.name}</h1>
                                {item.Maternidade.value.map(subitem => (
                                    <div className="subitem-container-item">
                                        <span>{subitem.description}</span>
                                        <p>{subitem.state}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {data.producao.map(item => (
                            <div className="subitem-container">
                                <h1>{item.unidadeCreche.name}</h1>
                                {item.unidadeCreche.value.map(subitem => (
                                    <div className="subitem-container-item">
                                        <span>{subitem.description}</span>
                                        <p>{subitem.state}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="subitem-container">
                            <h1>Dados coletados</h1>
                            <div className="subitem-container-item link">
                                <span onClick={() => window.open("https://drive.google.com/file/d/1sKRnUdGtnuS5RojyuIvlneo9PS1kjRtj/view?usp=sharing")}>CO 2</span>
                            </div>
                            <div className="subitem-container-item link">
                                <span onClick={() => window.open("https://drive.google.com/file/d/1eUH5X0pa2KedTtwrTNHxrkCE1gfed4nK/view?usp=sharing")}>Temperatura e Umidade</span>
                            </div>
                            <div className="subitem-container-item link">
                                <span onClick={() => window.open("https://drive.google.com/file/d/1a6dxjPvNB1HuR6b40_2uKPm1d1y7ht7Z/view?usp=sharing")}>Temperatura da água</span>
                            </div>
                        </div>
                    </>
                )
            case 3:
                return (
                    data.transporte.map(item => (
                        <div className="data-info-item">
                            <p>{item.description}</p>
                            {item.state ? (<FaCheck size={40} color="#009c4e" />) : (<FiX size={40} color="e03b2f" />)}
                        </div>
                    ))
                )
            default:
                break;
        }
    }, [selected]);

    return (
        <Container>
            <div className="info-wrapper">
                <CardInfo onClick={() => handleChangeCard(0)} isSelected={selected === 0}>
                    <div className="img-container">
                        <img className="prod" src={granja} alt="produtor" />
                    </div>
                    <h3>Conheça a granja</h3>
                </CardInfo>
                <CardInfo onClick={() => handleChangeCard(1)} isSelected={selected === 1}>
                    <div className="img-container">
                        <img src={produtor} alt="produtor" />
                    </div>
                    <h3>Conheça o produtor</h3>
                </CardInfo>
                <CardInfo onClick={() => handleChangeCard(2)} isSelected={selected === 2}>
                    <div className="img-container">
                        <img className="prod" src={ciclo} alt="ciclo" />
                    </div>
                    <h3>Veja como foi feita a produção</h3>
                </CardInfo>
                <CardInfo onClick={() => handleChangeCard(3)} isSelected={selected === 3}>
                    <div className="img-container">
                        <img className="prod" src={transporte} alt="ciclo" />
                    </div>
                    <h3>Conheça o sistema de transporte</h3>
                </CardInfo>
            </div>
            <div className="logo-container">
                <div className="wrapper">
                    <div className="data-info">
                        {selectInfo()}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default InfoComponent;