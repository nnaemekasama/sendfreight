import React from "react"

export default function Additional() {

    const [addClick1, setAddClick1] = React.useState(true)
    const [addClick2, setAddClick2] = React.useState(true)
    const [addClick3, setAddClick3] = React.useState(true)
    const [addClick4, setAddClick4] = React.useState(true)



    return(
        <div className="container">
            <div className="add-container">
            <h3 className="add-title">Additional Services</h3>
            <p>deez nutz</p>
            <div className="srv-flex">
                <div className="add-toggle">
                <div className="add-toggle-click">
                    <div onClick={() => setAddClick1(!addClick1)} className={addClick1 ? 'new-add-toggle-slider' : 'add-toggle-slider'}>
                        <div className="add-toggle-slider-circle"></div>
                    </div>
                    </div>
                    <div className="add-toggle-text">
                    <h4>Export Forwarding</h4>
                    <p>We handle customs clearance and documentation</p>
                    </div>
                </div>
                <div className="add-toggle">
                <div className="add-toggle-click">
                    <div onClick={() => setAddClick2(!addClick2)} className={addClick2 ? 'new-add-toggle-slider' : 'add-toggle-slider'}>
                        <div className="add-toggle-slider-circle"></div>
                    </div>
                    </div>
                    <div className="add-toggle-text">
                    <h4>Import Customs Clearance</h4>
                    <p>We handle import customs and regulatory requirements</p>
                    </div>
                </div>
            </div>
            <div className="srv-flex">
                <div className="add-toggle">
                <div className="add-toggle-click">
                    <div onClick={() => setAddClick3(!addClick3)} className={addClick3 ? 'new-add-toggle-slider' : 'add-toggle-slider'}>
                        <div className="add-toggle-slider-circle"></div>
                    </div>
                    </div>
                    <div className="add-toggle-text">
                    <h4>Cargo Insurance</h4>
                    <p>Protect  your cargo from logistics risks up to its full value</p>
                    </div>
                </div>
                <div className="add-toggle">
                    <div className="add-toggle-click">
                    <div onClick={() => setAddClick4(!addClick4)} className={addClick4 ? 'new-add-toggle-slider' : 'add-toggle-slider'}>
                        <div className="add-toggle-slider-circle"></div>
                    </div>
                    </div>
                    <div className="add-toggle-text">
                    <h4>Transport/ Delivery</h4>
                    <p>We deliver the cargo to your doorstep from the ports</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}