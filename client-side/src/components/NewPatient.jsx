import './styles/InputPatient.css'

export default function NewPatient(){
    return(
        <>
            <div className="input-wrapper">
                <input type="text" id="nmPatient" name="nmPatient" placeholder=' '/>
                <label htmlFor="nmPatient">Nome</label>
            </div>

            <div className="input-wrapper">
                <input type="date" id="dtBorn" name="dtBorn" placeholder=' '/>
                <label htmlFor="dtBorn">Data de nascimento</label>
            </div>

            <div className="input-wrapper">
                <input type="email" id="dsEmail" name="dsEmail" placeholder=' '/>
                <label htmlFor="dsEmail">Email</label>
            </div>
            

            <div className="input-wrapper">
                <input type="text" id="nmCountry" name="nmCountry" placeholder=' '/>
                <label htmlFor="nmCountry">Pais</label>
            </div>

            <div className="input-wrapper">
                <input type="text" id="nmCity" name="nmCity" placeholder=' '/>
                <label htmlFor="nmCity">Cidade</label>
            </div>

            <div className="input-wrapper">
                <input type="text" id="nmDistrict" name="nmDistrict" placeholder=' '/>
                <label htmlFor="nmDistrict">Bairro</label>
            </div>

            <div className="input-wrapper">
                <input type="text" id="dsAddress" name="dsAddress" placeholder=' '/>
                <label htmlFor="dsAddress">Endereço</label>
            </div>

            <div className="input-wrapper">
                <input type="number" id="nrAddress" name="nrAddress" placeholder=' '/>
                <label htmlFor="nrAddress">Numero</label>
            </div>

            <div className="input-wrapper">
                <input type="text" id="dsComplement" name="dsComplement" placeholder=' '/>
                <label htmlFor="dsComplement">Complemento</label>
            </div>

            <div className="input-wrapper">
                <input type="text" id="cdCep" name="cdCep" placeholder=' '/>
                <label htmlFor="cdCep">Cep</label>
            </div>

            <div className="input-wrapper">
                <input type="text" id="cdUf" name="cdUf" placeholder=' '/>
                <label htmlFor="cdUf">UF</label>
            </div>
            
            {/*<input type="text" id="dsEmail" name="dsEmail"/>
            <input type="text" id="dtBorn" name="dtBorn"/>
            <input type="text" id="nmCountry" name="nmCountry"/>
            <input type="text" id="nmCity" name="nmCity"/>
            <input type="text" id="nmDistrict" name="nmDistrict"/>
            <input type="text" id="dsAddress" name="dsAddress"/>
            <input type="text" id="nrAddress" name="nrAddress"/>
            <input type="text" id="dsComplement" name="dsComplement"/>
            <input type="text" id="cdCep" name="cdCep"/>
            <input type="text" id="cdUf" name="cdUf"/>
            <button>Submit</button>*/}
        </>
    )
}