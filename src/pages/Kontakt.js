import Nav from "../components/Nav";
import { useState } from 'react'
import Swal from 'sweetalert2';


const Kontakt = () => {

    const [message, setMessage] = useState({
        imeprezime: '',
        email: '',
        telefon: '',
        poruka: '',
    });

    const sendMessage = () => {

        console.log(message);

        Swal.fire({
            icon: 'success',
            title: 'Info',
            text: 'Poštovani ' + message.imeprezime + ', vaša poruka je uspešno poslata!'
        })
    }


    return (
        <div className="kontakt-div">

            <Nav />
            <div className="image-home">

                <h1 id="kont-naslov">Kontakt strana</h1>


                <form id="rezforma">
                    <div className='form-r'>
                        <div>
                            <label>Ime i prezime</label>
                            <input type="text" className="form-control" value={message.imeprezime} onChange={e => setMessage({ ...message, imeprezime: e.target.value })} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" className="form-control" value={message.email} onChange={e => setMessage({ ...message, email: e.target.value })} />
                        </div>
                        <div>
                            <label>Broj telefona</label>
                            <input type="text" className="form-control" value={message.telefon} onChange={e => setMessage({ ...message, telefon: e.target.value })} />
                        </div>
                        <div>
                            <label>Poruka</label>
                            <textarea type="text" className="form-control" value={message.poruka} onChange={e => setMessage({ ...message, poruka: e.target.value })} />
                        </div>
                        <button type="button" onClick={sendMessage} id="sendmessage-button" className="btn btn-primary">Pošalji</button>

                    </div>
                </form>
            </div >

        </div>
    )
}

export default Kontakt;