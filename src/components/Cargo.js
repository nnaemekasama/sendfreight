import React from "react"

export default function Cargo() {


const [cargoToggle, setCargoToggle] = React.useState(true)

function toggleCargoBTN() {
    setCargoToggle(prevMode => !prevMode)
}

    return(
        <div className="container">
            <div className="cargo-top">
                <h3>Cargo Details</h3>
                <div className="cargo-toggle">
                    <div onClick={toggleCargoBTN}  className={cargoToggle? 'changed-cargo-toggle-slider' : 'cargo-toggle-slider'}>
                        <div className="slider-circle"></div>
                    </div>
                    <p className="toggle-txt">Dangerous Cargo </p>
                </div>
            </div>
            <div className="cargo-btns">
                <button>Total Dimensions</button>
                <button>Package  Details </button>
            </div>

            <form className="cargo-inputs">
                <div className="form-group">
                    <label>Total Volume</label>
                    <input type='text' placeholder="cbm"></input>
                </div>    
                <div className="form-group">
                    <label>Total Weight</label>
                    <input type='text' placeholder="Kg"></input>
                </div>    
            </form>
            </div>
    
    )
}