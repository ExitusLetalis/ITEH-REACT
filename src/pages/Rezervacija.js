import Nav from "../components/Nav";
import RezForm from "../components/RezForm";


const Rezervacija = () => {

    var termini = [
        { id: 1, datum: '15.7.2022', vreme: '15:00', teren: 'Centralni', teniser: 'Novak Đoković', trajanje: '2 sata' },
        { id: 2, datum: '16.7.2022', vreme: '14:00', teren: 'Teren dva', teniser: 'Novak Đoković', trajanje: '1 sat' },
        { id: 3, datum: '16.7.2022', vreme: '15:00', teren: 'Teren dva', teniser: 'Rafael Nadal', trajanje: '3 sata' },
        { id: 4, datum: '16.7.2022', vreme: '18:00', teren: 'Teren dva', teniser: 'Nick Kyrgios', trajanje: 'pola sata' },

    ]

    return (
        <div className="rezervacija-div">

            <Nav />

            <div className="image-home">
                <RezForm />
            </div>


        </div>
    )
}

export default Rezervacija;