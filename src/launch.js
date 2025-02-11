import FHIR from 'fhirclient';

const allscriptsScope = "launch openid fhirUser patient/*.read"
// const allscriptsScope = "launch/patient openid fhirUser offline_access patient/*.read"

const epicScope = "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/Medication.read patient/Provenance.read patient/Organization.read";

const epicPilotScope = "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/Medication.read patient/ServiceRequest.read patient/Provenance.read patient/Organization.read";

const cernerScopeUSCDI = "launch/patient openid fhirUser online_access patient/Patient.read user/Practitioner.read user/Location.read user/Organization.read patient/CarePlan.read patient/CareTeam.read patient/Condition.read patient/Goal.read patient/Immunization.read patient/Observation.read patient/Procedure.read patient/MedicationRequest.read patient/RelatedPerson.read patient/Provenance.read"

const cernerScopePilot = "launch/patient openid fhirUser online_access patient/Patient.read user/Practitioner.read user/Location.read user/Organization.read patient/CarePlan.read patient/CareTeam.read patient/Condition.read patient/Goal.read patient/Immunization.read patient/Observation.read patient/Procedure.read patient/MedicationRequest.read patient/RelatedPerson.read patient/ServiceRequest.read patient/Provenance.read"

FHIR.oauth2.authorize([
    {
        // OHSU FHIR dev
        issMatch: /\bepicmobile.ohsu.edu\/FHIRDEV\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_ohsu_fhirdev,
        scope: epicPilotScope
    },
    {
        // OHSU FHIR production
        issMatch: /\bepicmobile.ohsu.edu\/FHIRPRD\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_ohsu_fhirprd,
        scope: epicPilotScope
    },
    {
        // Meld CarePlanning QA sandbox
        issMatch: /\bgw.interop.community\/CarePlanningQA\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_meld_qa,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write patient/Goal.write patient/MedicationRequest.write patient/Condition.write"
    },
    {
        // Meld Synthea test data sandbox
        issMatch: /\bgw.interop.community\/SyntheaTest8\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_meld_synthea,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write patient/Goal.write patient/MedicationRequest.write patient/Condition.write"
    },
    {
        // Meld MCC CarePlanning sandbox
        issMatch: /\bgw.interop.community\/CarePlanning\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_meld_mcc,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write patient/Goal.write patient/MedicationRequest.write patient/Condition.write"
    },
    {
        // Gravity Project sandbox
        issMatch: /\bapi.logicahealth.org\/GravitySandboxNew\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_gravity,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write"
    },
    {
        // Logica sandbox
        issMatch: /\blogicahealth\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_logica,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write"
    },
    {
        // Meld MPC sandbox
        issMatch: /\bgw.interop.community\/mpc\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_meld_mpc,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write"
    },
    {
        // ACF ODH sandbox
        issMatch: /\bdev-fhirproxy.myodh.org\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_acf_odh,
        scope: "openid offline_access launch launch/patient fhirUser patient/*.read"
    },
    {
        // Allscripts sandbox
        issMatch: "https://allscriptsfhirconnect.open.allscripts.com/R4/fhir-InfernoStageStandalone",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_allscripts_sandbox,
        scope: allscriptsScope
    },
    {
        // Allscripts sandbox (open)
        issMatch: "https://allscriptsfhirconnect.open.allscripts.com/R4/open-InfernoStageStandalone",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_allscripts_sandbox,
        scope: allscriptsScope
    },
    {
        // Cerner sandbox
        issMatch: "https://fhir-myrecord.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_cerner_sandbox,
        scope: cernerScopePilot
    },
    {
        // Cerner production client for USCDI patient app
        issMatch: "https://fhir-myrecord.cerner.com/r4",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_cerner,
        scope: cernerScopeUSCDI
    },
    {
        // Epic sandbox
        issMatch: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_epic_sandbox,
        scope: epicPilotScope
    },
    {
        // Production Epic instance, if the ISS contains the word "epic"
        issMatch: /\bepic\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_epic,
        scope: epicScope
    },
    {
        // For any other enpoints, try using Epic (not all contain string 'epic')
        issMatch: /\bR4\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_epic,
        scope: epicScope
    }

    /*
    {
        // This config will be used if the ISS is local
        issMatch: iss => iss.startsWith("http://localhost") || iss.startsWith("http://127.0.0.1"),
        redirectUri: "./index.html",
        clientId: "my_local_client_id",
        scope: "...",
        patientId: "123", // include if you want to emulate selected patient ID
        encounterId: "234", // include if you want to emulate selected encounter ID
        launch: "whatever",
        fakeTokenResponse: { // include if you want to emulate current user
            // We are only parsing the JWT body so tokens can be faked like so
            id_token: `fakeToken.${btoa('{"profile":"Practitioner/345"}')}.`
        }
    }
    */
]);
