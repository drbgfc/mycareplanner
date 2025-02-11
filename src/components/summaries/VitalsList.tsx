import '../../Home.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { FHIRData, displayDate } from '../../data-services/models/fhirResources'
import { PatientSummary, ScreeningSummary, ObservationSummary } from '../../data-services/models/cqlSummary'
import { getVitalSignSummary } from '../../data-services/mccCqlService'
import { Summary } from './Summary'

interface VitalsListProps {
  fhirData?: FHIRData,
  patientSummary?: PatientSummary,
  screenings?: [ScreeningSummary]
}

interface VitalsListState {
  vitalSignSummary?: ObservationSummary[]
}

export const VitalsList: React.FC<VitalsListProps> = (props: VitalsListProps) => {

  const [vitalSignSummary, setVitalSignSummary] = useState<ObservationSummary[] | undefined>([
    { ConceptName: 'init', DisplayName: 'init', ResultText: 'init' }
  ])

  useEffect(() => {
    console.time('getVitalSignSummary()')
    setVitalSignSummary(getVitalSignSummary(props.fhirData))
    console.timeEnd('getVitalSignSummary()')
  }, [props.fhirData])

  return (
    <div className="home-view">
      <div className="welcome">

        <h4 className="title">Vitals</h4>

        {vitalSignSummary && vitalSignSummary.length > 0 && vitalSignSummary[0]?.ConceptName === 'init'
          ? <p>Loading...</p>
          : !vitalSignSummary || vitalSignSummary.length < 1
            ? <p>No records found.</p>
            :
            <>
              {vitalSignSummary?.map((obs, idx) => (

                <Summary key={idx} id={idx} rows={[
                  {
                    isHeader: true,
                    twoColumns: false,
                    data1: obs.DisplayName,
                    data2: '',
                  },
                  {
                    isHeader: false,
                    twoColumns: true,
                    data1: obs.ResultText,
                    data2: displayDate(obs.Date),
                  },
                  {
                    isHeader: false,
                    twoColumns: false,
                    data1: "Performed by: " + (obs.Performer ?? 'Unknown'),
                    data2: '',
                  },
                ]} />

              ))}
            </>
        }

      </div>
    </div>
  )

}
