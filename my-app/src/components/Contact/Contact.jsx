import React, {useState, useEffect} from 'react';
import contactRequest from '../Request/ContactRequest';
import './Contact.css';

const initialState = {
    nameAndSurname: "",
    email: "", 
    phoneNumber: "",
    message: "",
};

const Contact = () => {

    const [contactData, setContactData] = useState(initialState);

    const handlerInput = (e) => {
        setContactData({
            ...contactData,
            [e.target.name] : e.target.value
        });
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        setContactData(initialState);
        contactRequest(contactData);
        console.log(contactData);
        alert("Hemos recibido tu mensaje.");
    }
    
    return (
        <div className="contact-container">
            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.259804918483!2d2.1689080151517555!3d41.41187860243998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2cf6b8e20af%3A0x4c2effc0e901bb0b!2sCarrer%20de%20los%20Castillejos%2C%20387B%2C%2008025%20Barcelona!5e0!3m2!1ses!2ses!4v1636713995171!5m2!1ses!2ses" className="map-style"  allowfullscreen="" loading="lazy" title="map"/>
            </div>
            <div>
                <form onSubmit={handlerSubmit}>
                    <label className="nameAndSurname-label">
                        Nombre y Apellido: <br/>
                        <input 
                            id="nameAndSurname"
                            type="text" 
                            name="nameAndSurname" 
                            placeholder="Ingrese su nombre y apellido"
                            onChange={handlerInput}
                            value={contactData.nameAndSurname}
                            required/> <br/>
                    </label>
                    <div className="email-phoneNumber-div">
                    <label>
                        Email: <br/>
                        <input
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="Ingrese su email"
                            onChange={handlerInput}
                            value={contactData.email}
                            required/> <br/>
                    </label>
                    <label>
                        Numero de teléfono: <br/>
                        <input 
                            id="phoneNumber"
                            type="number" 
                            name="phoneNumber" 
                            placeholder="Ingrese su numero de teléfono"
                            onChange={handlerInput}
                            value={contactData.phoneNumber}
                            required/> <br/>
                    </label>
                    </div>
                    <label>
                        Mensaje: <br/>
                        <input 
                            id="message"
                            type="text" 
                            name="message" 
                            placeholder="Ingrese su mensaje"
                            onChange={handlerInput}
                            value={contactData.message}
                            required/> <br/>
                    </label>
                    <label>
                        Al enviar este formulario, acepto los terminos y condiciones.
                    </label>
                    <button
                        id="submit-btn"
                        type="submit" 
                        value="Submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
