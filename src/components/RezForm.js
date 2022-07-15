import { useState } from 'react';

const RezForm = (props) => {

    const [termin, setTermin] = useState({
        id: '',
        datum: '',
        vreme: '',
        teren: '',
        teniser: '',
        trajanje: '',
    });



    return (
        <div className="rezform-div">

            <h1 id="reznaslov">{props.naslov}</h1>

            <form id="rezforma">
                <div className='form-r'>
                    <div>
                        <label>ID</label>
                        <input type="number" className="form-control" value={termin.id} onChange={e => setTermin({ ...termin, id: e.target.value })} />
                    </div>
                    <div>
                        <label>Datum</label>
                        <input type="text" className="form-control" value={termin.datum} onChange={e => setTermin({ ...termin, datum: e.target.value })} />
                    </div>
                    <div>
                        <label>Vreme</label>
                        <input type="text" className="form-control" value={termin.vreme} onChange={e => setTermin({ ...termin, vreme: e.target.value })} />
                    </div>
                    <div>
                        <label>Teren</label>
                        <input type="text" className="form-control" value={termin.teren} onChange={e => setTermin({ ...termin, teren: e.target.value })} />
                    </div>
                    <div>
                        <label>Teniser</label>
                        <input type="text" className="form-control" value={termin.teniser} onChange={e => setTermin({ ...termin, teniser: e.target.value })} />
                    </div>
                    <div>
                        <label>Trajanje</label>
                        <input type="text" className="form-control" value={termin.trajanje} onChange={e => setTermin({ ...termin, trajanje: e.target.value })} />
                    </div>
                </div>
                <button type="button" onClick={() => props.handleSubmit(termin)} id="rezervisi-button" className="btn btn-primary">Rezerviši termin</button>
            </form>
        </div >
    );
}

export default RezForm;