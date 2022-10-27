import React, {Fragment} from "react";
import './Modal.css'


export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <Fragment>
                <button className={'bt_op'} onClick={() => this.setState({isOpen: true})}>Open</button>
                {this.state.isOpen && (
                    <div className={'modal'}>
                        <div className={'modal_body'}>
                            <h3 className={'h1'}>Modal Tittle</h3>
                            <p className={'p'}>Some Txt</p>
                            <button className={'bt_cl'} onClick={() => this.setState({isOpen: false})}>Close</button>
                        </div>
                    </div>
                )}
            </Fragment>
        )
    }
}

