import { useMutation } from '@tanstack/react-query'
import ErrorMessage from './ErrorMessage'
import './styles/NewEditPatient.css'

export default function NewPatient(props){
    const patientMutation = useMutation({
        mutationFn: (newPatient) => {
            return fetch("http://localhost:22194/patients", {
                    method: "POST",
                    body: JSON.stringify(newPatient),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then((res) => res.json())
                .then((resJson) => {
                    if(resJson?.error)
                        throw resJson.error
                    return resJson
                })
        },
        onSuccess: props.closeClipboard
    })

    function handleSubmit(event){
        event.preventDefault()
    
        const form = event.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
    
        patientMutation.mutate(formJson)
    }
    
    return(
        <>
            {(patientMutation.isError) && <ErrorMessage errorResponse={patientMutation.error} />}

            <h1 className='form-title'>Novo paciente</h1>

            <form className='form-patient' onSubmit={handleSubmit} >
                <div className='personal-data'>
                    <div id='nmPatient-wrapper'>
                        <input type="text" id="nmPatient" name="nmPatient" placeholder=' ' required/>
                        <label htmlFor="nmPatient">Nome</label>
                    </div>
                    <div id='dtBorn-wrapper'>
                        <input type="date" id="dtBorn" name="dtBorn" placeholder=' ' required max={new Date().toISOString().slice(0,10)}/>
                        <label htmlFor="dtBorn">Data de nascimento</label>
                    </div>
                    <div id='dsEmail-wrapper'>
                        <input type="email" id="dsEmail" name="dsEmail" placeholder=' ' required/>
                        <label htmlFor="dsEmail">Email</label>
                    </div>
                </div>
                

                <div className='location-data'>
                    <div id='nmCountry-wrapper'>
                        <input type="text" id="nmCountry" name="nmCountry" placeholder=' ' required/>
                        <label htmlFor="nmCountry">Pais</label>
                    </div>
                    <div id='nmCity-wrapper'>
                        <input type="text" id="nmCity" name="nmCity" placeholder=' '/>
                        <label htmlFor="nmCity">Cidade</label>
                    </div>
                    <div id='nmDistrict-wrapper'>
                        <input type="text" id="nmDistrict" name="nmDistrict" placeholder=' '/>
                        <label htmlFor="nmDistrict">Bairro</label>
                    </div>
                    <div id='dsAddress-wrapper'>
                        <input type="text" id="dsAddress" name="dsAddress" placeholder=' ' required/>
                        <label htmlFor="dsAddress">Endereço</label>
                    </div>
                    <div id='nrAddress-wrapper'>
                        <input type="number" id="nrAddress" name="nrAddress" placeholder=' '/>
                        <label htmlFor="nrAddress">Numero</label>
                    </div>
                    <div id='dsComplement-wrapper'>
                        <input type="text" id="dsComplement" name="dsComplement" placeholder=' '/>
                        <label htmlFor="dsComplement">Complemento</label>
                    </div>
                    <div id='cdCep-wrapper'>
                        <input type="text" id="cdCep" name="cdCep" placeholder=' '/>
                        <label htmlFor="cdCep">Cep</label>
                    </div>
                    <div id='cdUf-wrapper'>
                        <input type="text" id="cdUf" name="cdUf" placeholder=' '/>
                        <label htmlFor="cdUf">UF</label>
                    </div>
                </div>
                
                <button type="submit" value="Submit" id='submit-btn'>Submit</button>
            </form>
        </>
    )
}