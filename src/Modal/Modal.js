import React, {Fragment} from "react";
import './Modal.css'

function Modal({ count }) {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <button className={'bt_op'} onClick={() => setOpen(true)}>Open</button>
            {open && (
                <div className={'modal'}>
                    <div className={'modal_body'}>
                        <h3 className={'h1'}>{count}</h3>
                        <p className={'p'}>Some Txt</p>
                        <button className={'bt_cl'} onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Modal