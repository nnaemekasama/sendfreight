import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faShip, faTruck, faUserShield } from '@fortawesome/free-solid-svg-icons'


export default function Service() {

    const [serviceBtn, setServiceBtn] = React.useState('air')
    return(
        <div className="container">
            <h3>Select a service</h3>
            <div className="service-btns">
                <div className="btn-row">
                <button type="button" className={serviceBtn === 'air' ? 'button' : 'button1'} onClick={() => setServiceBtn('air')}>
                    <span className="btn-text">Air Freight</span>
                    <span className="btn-icon"><FontAwesomeIcon icon={faPlane}  className='faplane'></FontAwesomeIcon></span>
                </button>
                <button type="button" className={serviceBtn === 'sea' ? 'button' : 'button1'} onClick={() => setServiceBtn('sea')}>
                    <span className="btn-text">Sea Freight</span>
                    <span className="btn-icon"><FontAwesomeIcon icon={faShip} className='faplane'></FontAwesomeIcon></span>
                </button>
                </div>
                <div className="btn-row">
                <button type="button" className={serviceBtn === 'land' ? 'button' : 'button1'} onClick={() => setServiceBtn('land')}>
                    <span className="btn-text">Inland</span>
                    <span className="btn-icon"><FontAwesomeIcon icon={faTruck} className='faplane'></FontAwesomeIcon></span>
                </button>
                <button type="button" className={serviceBtn === 'custom' ? 'button' : 'button1'} onClick={() => setServiceBtn('custom')}>
                    <span className="btn-text">Customs Clearance</span>
                    <span className="btn-icon"><FontAwesomeIcon icon={faUserShield} className='faplane'></FontAwesomeIcon></span>
                </button>
                </div>
            </div>
        </div>
    )
}