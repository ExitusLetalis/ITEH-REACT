import Nav from "../components/Nav";
import RezForm from "../components/RezForm";
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";

const Rezervacija = () => {

    var termini = [
        { id: 1, datum: '15.7.2022', vreme: '15:00', teren: 'Centralni', teniser: 'Novak Đoković', trajanje: '2 sata' },
        { id: 2, datum: '16.7.2022', vreme: '14:00', teren: 'Teren dva', teniser: 'Novak Đoković', trajanje: '1 sat' },
        { id: 3, datum: '16.7.2022', vreme: '15:00', teren: 'Teren dva', teniser: 'Rafael Nadal', trajanje: '3 sata' },
        { id: 4, datum: '16.7.2022', vreme: '18:00', teren: 'Teren dva', teniser: 'Nick Kyrgios', trajanje: 'pola sata' },

    ]


    function handleSubmit(termin) {

        console.log(termini);

        const zauzet = false;

        for (let i = 0; i < termini.length; i++) {

            if (termini[i].datum == termin.datum && termini[i].vreme == termin.vreme && termini[i].teren == termin.teren) {

                Swal.fire({
                    icon: 'success',
                    title: 'Info',
                    text: 'Traženi termin je zauzet!'
                })
                zauzet = true;
            }

            if (zauzet) {
                break;
            }
        }

        termini.push(termin)
        Swal.fire({
            icon: 'success',
            title: 'Info',
            text: 'Traženi trening termin je uspešno rezervisan!'
        })

    }


    const p = 'Rezervacija trening termina';


    return (
        <div className="rezervacija-div">

            <Nav />

            <div className="image-home">
                <RezForm naslov={p} handleSubmit={handleSubmit} />
            </div>


        </div>
    )
}

export default Rezervacija;