import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCaretDown, faCircleInfo, faDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function ServiceII() {
    return(
        <div className='container'>
            <FontAwesomeIcon icon={faCircleInfo} className='fainfo' />
            <div className='topflex'>
            <div className='twotwins'>
                <button type='button'>Import</button>
                <button type='button'>Export</button>
            </div> 
            <form className='form-input'>
                <div className='input-field'>
                    <span><FontAwesomeIcon icon={faLocationDot} className='faloc'/></span>
                    <input className='srv-input' type='text' placeholder='From City or port'/>
                </div>
                <div className='input-field'>
                    <span><FontAwesomeIcon icon={faLocationDot} className='faloc'/></span>
                    <input className='srv-input' type='text' placeholder='To City or port'/>
                </div>
            </form>
            </div>
            <div className='flex'>
                <form>
                <div className='input-field2'>
                    <span><FontAwesomeIcon icon={faCalendar} className='faloc'/></span>
                    <input type='text' placeholder='Ready Date'/>
                </div>
                <div className='input-field2'>
                    <span><FontAwesomeIcon icon={faCaretDown} className='faloc'/></span>
                    <input type='text' placeholder='Incoterms'/>
                </div>
                <div className='input-field2'>
                    <span><FontAwesomeIcon icon={faDollar} className='faloc'/></span>
                    <input type='text' placeholder='Total Cargo Value'/>
                </div>
                </form>
            </div>
        </div>
    )
}