import { Injectable } from '@angular/core';
import { ReportDetails_DTO, FooterNote } from './dtos/reportDetails.dto'; // Corrected import path

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reportList: ReportDetails_DTO[] = [
    { 
      reportId: 1, 
      reportName: 'X-ray (Chest - PA View)', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-05 10:30 AM',
          referredBy: 'Dr. Smith, MD'
        },
        clinicalHistory: 'Persistent cough and chest pain for 2 weeks. No history of smoking or prior lung conditions.',
        procedureDetails: 'A posteroanterior (PA) view chest X-ray was performed using digital radiography at 90 kVp and 2 mAs.',
        findings: {
          lungFields: 'Clear lung fields with no focal opacities. Clear lung fields with no focal opacities.Clear lung fields with no focal opacities.Clear lung fields with no focal opacities.Clear lung fields with no focal opacities.Clear lung fields with no focal opacities.Clear lung fields with no focal opacities.',
          heartSize: 'Cardiothoracic ratio within normal limits. Cardiothoracic ratio within normal limits. Cardiothoracic ratio within normal limits. Cardiothoracic ratio within normal limits. Cardiothoracic ratio within normal limits. Cardiothoracic ratio within normal limits. Cardiothoracic ratio within normal limits. ',
          diaphragm: 'Both domes of the diaphragm appear normal. Both domes of the diaphragm appear normal. Both domes of the diaphragm appear normal. Both domes of the diaphragm appear normal. Both domes of the diaphragm appear normal. Both domes of the diaphragm appear normal. Both domes of the diaphragm appear normal. ',
          costophrenicAngles: 'No pleural effusion or blunting of costophrenic angles observed. No pleural effusion or blunting of costophrenic angles observed. No pleural effusion or blunting of costophrenic angles observed. No pleural effusion or blunting of costophrenic angles observed. No pleural effusion or blunting of costophrenic angles observed. ',
          bones: 'No evidence of fracture or lytic lesions in the ribs, clavicles, or spine. No evidence of fracture or lytic lesions in the ribs, clavicles, or spine. No evidence of fracture or lytic lesions in the ribs, clavicles, or spine. No evidence of fracture or lytic lesions in the ribs, clavicles, or spine. No evidence of fracture or lytic lesions in the ribs, clavicles, or spine. ',
          mediastinum: 'Normal mediastinal contours with no widening.',
          trachea: 'Trachea is central with no deviation.',
          softTissues: 'No abnormal soft tissue masses or calcifications.'
        },
        impression: 'Normal chest X-ray. No signs of pneumonia, tuberculosis, or malignancy.',
        recommendations: 'If symptoms persist, consider further evaluation with CT Chest or pulmonary function tests. Follow-up in 2 weeks.',
        additionalNotes: 'Patient advised to avoid exposure to cold and dusty environments. Maintain hydration and take prescribed medications.',
        toDo: 'Continue taking prescribed medications. Maintain hydration. Follow up with your doctor in 2 weeks.',
        toNotDo: 'Avoid exposure to cold and dusty environments. Do not smoke or expose yourself to secondhand smoke.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    },
    { 
      reportId: 2, 
      reportName: 'Ultrasound (Abdomen)', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-05 11:15 AM',
          referredBy: 'Dr. Patel, MD'
        },
        clinicalHistory: 'Abdominal pain and bloating for 3 weeks. No prior history of liver disease or gallstones.',
        procedureDetails: 'Ultrasound performed with a 3.5 MHz convex transducer. Scanning included liver, gallbladder, pancreas, kidneys, and spleen.',
        findings: {
          liver: 'Normal size and echotexture. No focal lesions.',
          gallbladder: 'No gallstones or sludge detected.',
          pancreas: 'Unremarkable appearance.',
          kidneys: 'Normal in size and corticomedullary differentiation.',
          spleen: 'Normal echotexture. No splenomegaly.',
          aorta: 'Aorta is normal in caliber with no aneurysmal dilatation.',
          bladder: 'Bladder is well-distended with no wall thickening or masses.'
        },
        impression: 'No significant abnormality detected in abdominal ultrasound.',
        recommendations: 'Dietary modifications advised. Follow-up if symptoms persist.',
        additionalNotes: 'Patient advised to avoid fatty and spicy foods. Increase intake of fiber and fluids.',
        toDo: 'Follow a balanced diet with high fiber and fluids. Take prescribed medications as directed.',
        toNotDo: 'Avoid fatty and spicy foods. Do not skip meals or overeat.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    },
    { 
      reportId: 3, 
      reportName: 'Blood Test (Complete Blood Count)', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-05 09:45 AM',
          referredBy: 'Dr. Kim, MD'
        },
        clinicalHistory: 'Routine health checkup. No active complaints.',
        procedureDetails: 'Blood sample collected via venipuncture. Automated CBC performed using a Sysmex analyzer.',
        findings: {
          hemoglobin: '14.2 g/dL (Normal)',
          WBC: '7,200 /μL (Normal)',
          platelet: '220,000 /μL (Normal)',
          hematocrit: '42% (Normal)',
          RBC: '4.8 million/μL (Normal)',
          MCV: '88 fL (Normal)',
          MCH: '30 pg (Normal)',
          MCHC: '34 g/dL (Normal)'
        },
        impression: 'Complete blood count within normal limits.',
        recommendations: 'Routine annual follow-up recommended.',
        additionalNotes: 'Patient advised to maintain a balanced diet and regular exercise.',
        toDo: 'Maintain a balanced diet and regular exercise. Follow up with your doctor annually.',
        toNotDo: 'Avoid unhealthy foods and a sedentary lifestyle. Do not skip regular health checkups.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    },
    { 
      reportId: 4, 
      reportName: 'MRI (Brain)', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-04 03:20 PM',
          referredBy: 'Dr. Lee, Neurologist'
        },
        clinicalHistory: 'Frequent headaches and dizziness for one month. No history of seizures or trauma.',
        procedureDetails: 'MRI performed using 3 Tesla scanner. T1, T2, and FLAIR sequences obtained in axial, sagittal, and coronal planes.',
        findings: {
          brainParenchyma: 'No focal lesions or mass effects.',
          ventricles: 'Normal size and configuration.',
          bloodVessels: 'No evidence of aneurysm or stenosis.',
          meninges: 'No signs of inflammation or enhancement.',
          sinuses: 'Paranasal sinuses are clear with no evidence of sinusitis.',
          orbits: 'Orbits are unremarkable with no masses or lesions.'
        },
        impression: 'Unremarkable MRI brain scan. No intracranial pathology detected.',
        recommendations: 'Further evaluation by neurologist if symptoms persist.',
        additionalNotes: 'Patient advised to avoid stress and maintain a regular sleep schedule.',
        toDo: 'Maintain a regular sleep schedule. Follow up with your neurologist if symptoms persist.',
        toNotDo: 'Avoid stress and irregular sleep patterns. Do not ignore persistent symptoms.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    },
    { 
      reportId: 5, 
      reportName: 'CT Scan (Chest)', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-05 08:30 AM',
          referredBy: 'Dr. Thomas, Pulmonologist'
        },
        clinicalHistory: 'Chronic cough for 6 months. Smoker for 30 years.',
        procedureDetails: 'High-resolution CT (HRCT) scan performed at 1mm slice thickness.',
        findings: {
          lungs: 'Mild emphysematous changes noted. No mass lesions or consolidation.',
          pleura: 'No pleural effusion detected.',
          heart: 'Normal cardiac silhouette.',
          bones: 'Mild osteopenia noted.',
          lymphNodes: 'No significant mediastinal or hilar lymphadenopathy.',
          airways: 'No evidence of bronchiectasis or airway obstruction.'
        },
        impression: 'Mild emphysema. No active lung infection or malignancy detected.',
        recommendations: 'Smoking cessation strongly advised. Pulmonary function test recommended.',
        additionalNotes: 'Patient advised to join a smoking cessation program and follow up with pulmonologist.',
        toDo: 'Join a smoking cessation program. Follow up with your pulmonologist.',
        toNotDo: 'Avoid smoking and exposure to secondhand smoke. Do not ignore persistent cough.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    },
    { 
      reportId: 6, 
      reportName: 'ECG (Electrocardiogram)', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-05 02:00 PM',
          referredBy: 'Dr. Johnson, Cardiologist'
        },
        clinicalHistory: 'Episodes of palpitations and mild chest discomfort. No history of heart disease.',
        procedureDetails: 'Standard 12-lead ECG performed at rest. Heart rate and rhythm analyzed.',
        findings: {
          rhythm: 'Normal sinus rhythm at 72 bpm.',
          STSegment: 'No significant ST elevation or depression.',
          QTInterval: 'Normal QT interval.',
          abnormalities: 'No evidence of atrial fibrillation or ventricular arrhythmias.',
          axis: 'Normal QRS axis.',
          intervals: 'PR interval and QRS duration are within normal limits.'
        },
        impression: 'Normal resting ECG. No acute ischemic changes noted.',
        recommendations: 'Routine cardiac evaluation recommended. If symptoms persist, consider Holter monitoring.',
        additionalNotes: 'Patient advised to avoid caffeine and monitor symptoms. Follow up with cardiologist.',
        toDo: 'Avoid caffeine and monitor symptoms. Follow up with your cardiologist.',
        toNotDo: 'Avoid strenuous activities without consulting your doctor. Do not ignore persistent chest discomfort.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    },
    { 
      reportId: 7, 
      reportName: 'Liver Function Test', 
      reportData: JSON.stringify({
        testDetails: {
          testPerformedOn: '2025-02-05 12:30 PM',
          referredBy: 'Dr. Mehta, MD'
        },
        clinicalHistory: 'Routine checkup with mild fatigue and occasional nausea.',
        procedureDetails: 'Blood sample collected via venipuncture. Enzymatic and colorimetric analysis performed.',
        findings: {
          ALT: '30 U/L (Normal)',
          AST: '28 U/L (Normal)',
          Bilirubin: '0.9 mg/dL (Normal)',
          Albumin: '4.2 g/dL (Normal)',
          ALP: '70 U/L (Normal)',
          GGT: '25 U/L (Normal)',
          TotalProtein: '7.0 g/dL (Normal)'
        },
        impression: 'Liver function within normal range.',
        recommendations: 'No further intervention required. Maintain a healthy diet and hydration.',
        additionalNotes: 'Patient advised to avoid alcohol and follow a liver-friendly diet.',
        toDo: 'Maintain a healthy diet and hydration. Follow up with your doctor if symptoms persist.',
        toNotDo: 'Avoid alcohol and fatty foods. Do not ignore persistent symptoms.'
      }),
      footerNote: {
        footerNote: 'This is a computer-generated report and does not require a signature.',
        isChecked: true
      }
    }
  ];

  getReports() {
    return this.reportList;
  }

  getReportName(reportId: number): string {
    const report = this.reportList.find(r => r.reportId === reportId);
    return report ? report.reportName : 'Unknown Report';
  }

  updateReport(updatedReport: ReportDetails_DTO) {
    const index = this.reportList.findIndex(r => r.reportId === updatedReport.reportId);
    if (index !== -1) {
      this.reportList[index] = updatedReport;
    }
  }
}
