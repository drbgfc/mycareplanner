import FHIR from 'fhirclient'

// TODO: replace remaining local scope vars, and inline iss vars with  env vars to share usage, such as with ProviderLogin.tsx
const allscriptsScope = "launch/patient openid fhirUser offline_access patient/*.read"

// const athenaScopePilot = "launch/patient openid fhirUser offline_access patient/Patient.read patient/Practitioner.read patient/CarePlan.read patient/CareTeam.read patient/Condition.read patient/Goal.read patient/Immunization.read patient/Observation.read patient/Procedure.read patient/MedicationRequest.read patient/RelatedPerson.read patient/ServiceRequest.read patient/Provenance.read";
const athenaScopePilot = "launch/patient openid fhirUser offline_access patient/*.read"

const epicPilotScope = "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/Medication.read patient/ServiceRequest.read patient/Provenance.read patient/Organization.read"

const cernerScopeUSCDI = "launch/patient openid fhirUser offline_access patient/Patient.read user/Practitioner.read user/Location.read user/Organization.read patient/CarePlan.read patient/CareTeam.read patient/Condition.read patient/Goal.read patient/Immunization.read patient/Observation.read patient/MedicationRequest.read patient/RelatedPerson.read patient/Provenance.read"
const cernerScopePilot = process.env.REACT_APP_CERNER_SANDBOX_ENDPOINT_SCOPE

const nexgenScope = "launch launch/patient openid fhirUser offline_access patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/CareTeam.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/Medication.read patient/Provenance.read patient/Organization.read"

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
        scope: process.env.REACT_APP_MELD_SANDBOX_SCOPE
    },
    {
        // Logica sandbox
        issMatch: /\blogicahealth\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_logica,
        scope: "launch launch/patient openid fhirUser patient/Patient.read patient/Practitioner.read patient/RelatedPerson.read patient/Condition.read patient/DiagnosticReport.read patient/Observation.read patient/Procedure.read patient/CarePlan.read patient/Goal.read patient/Immunization.read patient/MedicationRequest.read patient/ServiceRequest.read patient/Task.read patient/Questionnaire.read patient/QuestionnaireResponse.write"
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
        // Athena Practice sandbox
        issMatch: "https://ap22sandbox.fhirapi.athenahealth.com/demoAPIServer/fhir/r4",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_athena_practice_sandbox,
        scope: athenaScopePilot
    },
    {
        // NexGen production and sandbox
        issMatch: "https://fhir.nextgen.com/nge/prod/fhir-api-r4/fhir/r4",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_nexgen,
        scope: nexgenScope
    },
    {
        // Cerner sandbox
        issMatch: process.env.REACT_APP_CERNER_SANDBOX_ENDPOINT_ISS,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_cerner_sandbox,
        scope: cernerScopePilot
    },
    {
        // Cerner production client for USCDI patient app
        issMatch: /\bfhir-myrecord.cerner.com\/r4\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_cerner,
        scope: cernerScopeUSCDI
    },
    {
        // VA sandbox
        issMatch: "https://sandbox-api.va.gov/services/fhir/v0/r4",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_va,
        scope: process.env.REACT_APP_VA_SANDBOX_ENDPOINT_SCOPE,
        pkceMode: "unsafeV1"
        // "unsafeV1" - Use against Smart v1 servers. Smart v1 does not define conformance, so validate your server supports PKCE before using this setting
    },
    {
        // Epic sandbox
        issMatch: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_epic_sandbox,
        scope: epicPilotScope,
        pkceMode: "unsafeV1"
    },
    {
        // Production Epic instance, if the ISS contains the word "epic"
        issMatch: /\bepic\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_epic,
        scope: process.env.REACT_APP_EPIC_SANDBOX_ENDPOINT_SCOPE,
        pkceMode: "unsafeV1"
    },
    {
        // For any other enpoints, try using Epic (not all contain string 'epic')
        issMatch: /\bR4\b/i,
        redirectUri: "./index.html",
        clientId: process.env.REACT_APP_CLIENT_ID_epic,
        scope: process.env.REACT_APP_EPIC_SANDBOX_ENDPOINT_SCOPE,
        pkceMode: "unsafeV1"
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
])
