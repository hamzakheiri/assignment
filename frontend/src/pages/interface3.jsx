import React, { useRef, useState } from 'react'
import Tinput from '../components/Tinput';
import useSubmitForm3 from '../api/useSubmitForm3';
import CheckBoxInput from '../components/CheckBoxInput';
import '../css/interface3.css'
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

const Interface3 = () => {
    const ownerInfo = useRef({
        lastName: "",
        firstName: "",
        cineNumber: "",
        ownerAddress: "",
        ownerCineValidationDate: "",
        ownerPhoneNumber: "",
        ownerEmail: "",
    });

    const companyInfo = useRef({
        companyName: "",
        rc: "",
        address: "",
        ownerFullName: "",
        ownerCineNumber: "",
        mandatoryCineNumber: "",
        phoneNumber: "",
        email: "",
    });

    const perVehi = useRef({
        cinAuth: false,
        vehiReg: false,
        cinScan: false,
        vehiRegiScan: false,
    });


    const comVehi = useRef({
        rcAndVehiReg: false,
        rcScan: false,
        CineScan: false,
        vehiRegScan: false,
        comProcurator: false,
    });


    const [formError, setFormError] = useState(null);


    const [submited, setSubmited] = useState({});
    const [isLoading] = useSubmitForm3(submited);

    const [type, setType] = useState('personal');

    const handleChange = (event, newT) => {setType(newT)};

    const ownerInfoChange = (field, val) => {
        ownerInfo.current = { ...ownerInfo.current, [field]: val };
        
    }

    const companyInfoChange = (field, val) => {
        companyInfo.current = { ...companyInfo.current, [field]: val };
        
    }

    const perVehiChange = (field, val) => {
        perVehi.current = { ...perVehi.current, [field]: val };
        
    }

    const comVehiChange = (field, val) => {
        comVehi.current = { ...comVehi.current, [field]: val };
        
    }

    function emptyFields(form) {
        for (const key in form) {
            if (form[key] === '') {
                return key;
            }
        }
        return undefined;
    }

    const submitForm = () => {
        if (type === "personal") {
            if (emptyFields(ownerInfo.current)) {
                setFormError(emptyFields(ownerInfo.current));
                return;
            }
            setSubmited({
                type: "personal",
                top: { ...ownerInfo.current },
                bottom: { ...perVehi.current }
            });
        } else {
            if (emptyFields(companyInfo.current)) {
                setFormError(emptyFields(companyInfo.current));
                return;
            }
            setSubmited({
                type: "company",
                top: { ...companyInfo.current },
                bottom: { ...comVehi.current }
            });
        }
    }

    return (
        <main className='interface3'>
            <ToggleButtonGroup
                color="primary"
                value={type}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="company">Informations de la société propriétaire</ToggleButton>
                <ToggleButton value="personal">Informations du propriétaire particulier</ToggleButton>
            </ToggleButtonGroup>

            {type === 'personal' && <section className='owner-section'>
                {/* <SectionTitle> INFORMATIONS DU PROPRIETAIRE DU VEHICULE </SectionTitle> */}
                <div className="top-part">
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'lastName'}>NOM</Tinput>
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'firstName'}>PRENOM</Tinput>
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'cineNumber'}>CINE N°</Tinput>
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'ownerAddress'}>ADRESSE DU PROPRIETAIRE DU VEHICULE COMME INDIQUEE DANS LA CINE</Tinput>
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'ownerCineValidationDate'}>DATE DE VALIDITE DE LA CINE DU PROPRIETAIRE DU VEHICULE</Tinput>
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'ownerPhoneNumber'}>N° DE GSM DU PROPRIETAIRE DU VEHICULE</Tinput>
                    <Tinput change={ownerInfoChange} error={formError} fieldName={'ownerEmail'}>EMAIL DU PROPRIETAIRE DU VEHICULE</Tinput>
                </div>
                <div className="bottom-part">
                    <CheckBoxInput change={perVehiChange} field={'cinAuth'}>VERIFICATION SUR L’AUTHENTICITE DE LA CINE VIA L’OUTIL DE CONTROL </CheckBoxInput>
                    <CheckBoxInput change={perVehiChange} field={'vehiReg'}>VERIFICATION DES INFORMATIONS INDIQUEES SUR LA CARTE GRISE DU VEHICULE </CheckBoxInput>
                    <CheckBoxInput change={perVehiChange} field={'cinScan'}>SCAN RECTO ET VERSO DE LA CINE DU PROPRIETAIRE DU VEHICULE </CheckBoxInput>
                    <CheckBoxInput change={perVehiChange} field={'vehiRegiScan'}>SCAN RECTO ET VERSO DE LA CARTE GRISE DU VEHICULE </CheckBoxInput>
                </div>
            </section>}

            {type === 'company' && <section className='company-section'>
                {/* <SectionTitle> INFORMATIONS DE LA SOCIETE </SectionTitle> */}
                <div className="top-part">

                    <Tinput change={companyInfoChange} error={formError} fieldName={'companyName'}>RAISON SOCIAL DE LA SOCIETE</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'rc'}>RC N°</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'address'}>ADRESSE</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'ownerFullName'}>NOM ET PRENOM DU PROPRIETAIRE</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'ownerCineNumber'}>CINE DU PROPRIETAIRE</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'mandatoryCineNumber'}>CINE DU MANDATAIRE</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'phoneNumber'}>TEL</Tinput>
                    <Tinput change={companyInfoChange} error={formError} fieldName={'email'}>EMAIL</Tinput>
                </div>

                <div className="bottom-part">
                    <CheckBoxInput change={comVehiChange} field={'rcAndVehiReg'}> VERIFICATION DES INFORMATIONS INDIQUEES SUR LE RC ET DE LA CARTE GRISE DU VEHICULE</CheckBoxInput>
                    <CheckBoxInput change={comVehiChange} field={'rcScan'}> SCAN RECTO ET VERSO DU RC</CheckBoxInput>
                    <CheckBoxInput change={comVehiChange} field={'CineScan'}> SCAN RECTO ET VERSO DE LA CINE DU PROPRIETAIRE DU VEHICULE</CheckBoxInput>
                    <CheckBoxInput change={comVehiChange} field={'vehiRegScan'}> SCAN RECTO ET VERSO DE LA CARTE GRISE DU VEHICULE</CheckBoxInput>
                    <CheckBoxInput change={comVehiChange} field={'comProcurator'}> SCAN DE LA PROCURATION DE LA SOCIETE</CheckBoxInput>
                </div>
            </section>}
            <Button className="submit-button" onClick={submitForm} variant="contained" color="primary">{isLoading ? "sending Form" : "submit"}</Button>
        </main>
    )
}

export default Interface3