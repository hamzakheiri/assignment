import { useState } from 'react';
import '../App.css';
import Tinput from '../components/Tinput';
import SectionTitle from '../components/SectionTitle';
import useSubmitForm from '../api/useSubmitForm1';
import { Button } from '@mui/material';


function Interface1() {
  const [siteInfo, setSiteInfo] = useState({
    siteName: '',
    siteCode: '',
    siteAddress: '',
    sitePatente: '',
    siteRcNumber: '',
    siteIceNumber: '',
    siteAtel: '',
  });

  const [managerInfo, setManagerInfo] = useState({
    maFullName: '',
    maCineNumber: '',
    maAddress: '',
    maMobileNumber: '',
    maEmail: '',
  });

  const [operatorInfo, setOperatorInfo] = useState({
    opCode: '',
    opFullName: '',
    opCineNumber: '',
    opAddress: '',
    opMobileNumber: '',
    opMachineSerialNumber: '',
  });

  const [stepper, setStepper] = useState(0);
  const [submit, setSubmit] = useState({});
  const [formError, setFormError] = useState(null);
  const [res, isLoading, error] = useSubmitForm(submit);

  const siteInfoChange = (fieldName, value) => {
    setSiteInfo(prevState => ({ ...prevState, [fieldName]: value }));
  };

  function managerInfoChange(fieldName, value) {
    setManagerInfo(prevState => ({ ...prevState, [fieldName]: value }));
  }

  function operatorInfoChange(fieldName, value) {
    setOperatorInfo(prevState => ({ ...prevState, [fieldName]: value }));
  }

  function emptyFields(form) {
    for (const key in form) {
      if (form[key] === '')
        return key;
    }
    return false;
  }

  function checkForm() {
    switch (stepper) {
      case 0:
        if (emptyFields(siteInfo)) {
          setFormError(emptyFields(siteInfo));
          return true;
        }
        break;
      case 1:
        if (emptyFields(managerInfo)) {
          setFormError(emptyFields(managerInfo));
          return true;
        }
        break;
      case 2:
        if (emptyFields(operatorInfo)) {
          setFormError(emptyFields(operatorInfo));
          return true;
        }
        break;
      default:
        return false;
    }
  }

  function submitForm(e) {
    e.preventDefault();
    e.stopPropagation();

    // if(checkForm()) return ;
    // console.log({
    //   siteSection: { ...siteInfo },
    //   managerSection: { ...managerInfo },
    //   operatorSection: { ...operatorInfo }
    // })

    setSubmit({
      siteSection: { ...siteInfo },
      managerSection: { ...managerInfo },
      operatorSection: { ...operatorInfo }
    })
  }

  return (
    <main className="section1">
      {stepper === 0 && <section className='site-section'>
        <SectionTitle >INFORMATIONS SUR LE SITE</SectionTitle>
        <Tinput change={siteInfoChange} error={formError} value={siteInfo.siteCode} fieldName={'siteCode'}>CODE D’IDENTIFICATION DU SITE N°</Tinput>
        <Tinput change={siteInfoChange} error={formError} value={siteInfo.siteName} fieldName={'siteName'}>RAISON SOCIALE DU SITE</Tinput>
        <Tinput change={siteInfoChange} error={formError} value={siteInfo.siteAddress} fieldName={'siteAddress'}>ADRESSE DU SITE</Tinput>
        <div className='bottom-flex'>
          <Tinput change={siteInfoChange} error={formError} value={siteInfo.sitePatente} fieldName={'sitePatente'}>PATENTE N°</Tinput>
          <Tinput change={siteInfoChange} error={formError} value={siteInfo.siteRcNumber} fieldName={'siteRcNumber'}> RC N°</Tinput>
          <Tinput change={siteInfoChange} error={formError} value={siteInfo.siteIceNumber} fieldName={'siteIceNumber'}>ICE N°</Tinput>
          <Tinput change={siteInfoChange} error={formError} value={siteInfo.siteAtel} fieldName={'siteAtel'}>ATEL</Tinput>
        </div>
      </section>
      }

      {stepper === 1 && <section className="manager-section">
        <SectionTitle>INFORMATIONS SUR LE GERANT DU SITE</SectionTitle>
        <Tinput change={managerInfoChange} error={formError} value={managerInfo.maFullName} fieldName={'maFullName'}>2-NOM ET PRENOM DU GERANT DU SITE</Tinput>
        <Tinput change={managerInfoChange} error={formError} value={managerInfo.maCineNumber} fieldName={'maCineNumber'}>3-N° CINE DU GERANT DU SITE</Tinput>
        <Tinput change={managerInfoChange} error={formError} value={managerInfo.maAddress} fieldName={'maAddress'}>4-ADRESSE DU GERANT DU SITE</Tinput>
        <Tinput change={managerInfoChange} error={formError} value={managerInfo.maMobileNumber} fieldName={'maMobileNumber'}>5-N° DE GSM DU GERANT DU SITE</Tinput>
        <Tinput change={managerInfoChange} error={formError} value={managerInfo.maEmail} fieldName={'maEmail'}>5-N° DE GSM DU GERANT DU SITE</Tinput>
      </section>
      }

      {stepper === 2 && <section className="operator-section">
        <SectionTitle>INFORMATIONS SUR L’OPERATEUR DE SAISIE</SectionTitle>
        <Tinput change={operatorInfoChange} error={formError} value={operatorInfo.opCode} fieldName={'opCode'}>1-CODE OPERATEUR DE SAISIE</Tinput>
        <Tinput change={operatorInfoChange} error={formError} value={operatorInfo.opFullName} fieldName={'opFullName'}>2-NOM ET PRENOM DE L’OPERATEUR DE SAISIE</Tinput>
        <Tinput change={operatorInfoChange} error={formError} value={operatorInfo.opCineNumber} fieldName={'opCineNumber'}>3-N° CINE DE L’OPERATEUR DE SAISIE</Tinput>
        <Tinput change={operatorInfoChange} error={formError} value={operatorInfo.opAddress} fieldName={'opAddress'}>4-ADRESSE DE L’OPERATEUR DE SAISIE</Tinput>
        <Tinput change={operatorInfoChange} error={formError} value={operatorInfo.opMobileNumber} fieldName={'opMobileNumber'}>5-N° DE GSM DE L’OPERATEUR DE SAISIE</Tinput>
        <Tinput change={operatorInfoChange} error={formError} value={operatorInfo.opMachineSerialNumber} fieldName={'opMachineSerialNumber'}>6-N° DE SERIE DE LA MACHINE D’EMBOUTISSAGE</Tinput>
      </section>}

      <Button className="submit-button" onClick={() => { if(checkForm()) return; setStepper((cur) => cur < 2 ? cur + 1 : 2) }} variant="contained" color="primary" disabled={stepper === 2}>next</Button>

      <Button className="submit-button" onClick={() => {setStepper((cur) => cur > 0 ? cur - 1 : 0)}} variant="contained" color="primary" disabled={stepper === 0}>previous</Button>

      <Button className="submit-button" onClick={submitForm} variant="contained" color="primary" disabled={stepper !== 2}>{isLoading ? "sending Form" : "submit"}</Button>
      <div className="form-error">
        {/* {formError && <p>Erreur: The {formError} field is required</p>} */}
      </div>
    </main>
  );
}

export default Interface1;