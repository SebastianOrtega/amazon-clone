import React, { Component } from 'react';
import "./css/home.css";
import Product from './product';

class Home extends Component {
    state = {};
    render () {
        return (
            <div className="home">
                <div className="home_container">
                    <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/33/img20/Fiestas_Patrias_2020/fiestaspatrias_1500x600._CB407790752_.jpg" alt="Banner" />

                    <div className="home_row">
                        <Product key="5oj35mf" id={ "5oj35mf" } title="E10 Respuesta Automática Música Bluetooth Casco de Media Cara USB para Motocicleta Scooter Vehículo Eléctrico Bicicleta" image="https://images-na.ssl-images-amazon.com/images/I/41e1vKcI7NL._AC_SY200_.jpg" price={ 2501.55 } rating={ 4 } />
                        <Product key="5oj35md" id={ "5oj35md" } title="Generador de señal DDS Generador de funciones de forma de onda arbitraria de 3 canales Medidor de frecuencia 4 Salida de nivel " image="https://images-na.ssl-images-amazon.com/images/I/51XdlsNMrcL._AC_SY200_.jpg" price={ 5524.33 } rating={ 3 } />


                    </div>
                    <div className="home_row">
                        <Product key="5oj35mt" />
                        <Product key="5oj35my" />
                        <Product key="5oj35mi" />

                    </div>
                    <div className="home_row">


                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

