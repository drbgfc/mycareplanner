import '../../Home.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FHIRData, hasScope, displayDate } from '../../data-services/models/fhirResources'
import { PatientSummary, ScreeningSummary, ConditionSummary } from '../../data-services/models/cqlSummary'
import { getConditionSummary } from '../../data-services/mccCqlService'

interface ConditionListProps {
  fhirData?: FHIRData,
  patientSummary?: PatientSummary,
  screenings?: [ScreeningSummary]
}

interface ConditionListState {
  conditionSummary?: [ConditionSummary]
}

export const ConditionList: React.FC<ConditionListProps> = (props: ConditionListProps) => {

  const [conditionSummary, setConditionSummary] = useState<ConditionSummary[] | undefined>([{ ConceptName: 'init' }])

  useEffect(() => {
    console.time('getConditionSummary()')
    setConditionSummary(getConditionSummary(props.fhirData))
    console.timeEnd('getConditionSummary()')
  }, [props.fhirData])

  return (
    <div className="home-view">
      <div className="welcome">

        <h4 className="title">Current Health Issues</h4>

        {hasScope(props.fhirData?.clientScope, 'Goal.write')
          ? <p><Link to={{ pathname: '/condition-edit', state: { fhirData: props.fhirData } }}>Add a Health Concern</Link></p>
          : <p />}

        {conditionSummary && conditionSummary.length > 0 && conditionSummary[0]?.ConceptName === 'init' ? <p>Loading...</p> : !conditionSummary || conditionSummary.length < 1 ? <p>No records found.</p> :
          <table><tbody>
            {conditionSummary?.map((cond, idx) => (
              <tr key={idx}><td>
                <table><tbody>
                  <tr>
                    <td colSpan={4}><b><i>{cond.Category ?? ''}</i></b></td>
                  </tr>
                  <tr>
                    <td colSpan={4}>{cond.ConditionType === null ? '' : <b>{cond.CommonName ?? ''} ({cond.ConditionType})</b>}</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>{cond.ConceptName}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Author: {cond.Recorder ?? cond.Asserter ?? 'Unknown'}</td>
                    <td align="right">{cond.LearnMore === undefined || cond.LearnMore === null ? '' :
                      <Link to="route" target="_blank" onClick={(event) => { event.preventDefault(); window.open(cond.LearnMore); }}><i>Learn&nbsp;More</i></Link>}</td>
                  </tr>
                  {(cond.RecordedDate === null && cond.AssertedDate === null) ? <tr /> :
                    <tr>
                      <td colSpan={2}>{cond.RecordedDate === null ? '' : 'Recorded: ' + displayDate(cond.RecordedDate)}</td>
                      <td colSpan={2}>{cond.AssertedDate === null ? '' : 'Asserted: ' + displayDate(cond.AssertedDate)}</td>
                    </tr>}
                  <tr>
                    <td colSpan={4}>{cond.OnsetDate === null ? '' : 'When it started: ' + displayDate(cond.OnsetDate)}</td>
                  </tr>
                  {cond.Notes?.map((note) => (
                    <tr><td colSpan={4}>Note: {note}</td></tr>
                  ))}
                </tbody></table>
              </td></tr>
            ))}
          </tbody></table>
        }

      </div>
    </div>
  )

}
