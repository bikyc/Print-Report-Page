import { Component, OnInit } from '@angular/core';
import { PatientDetails_DTO } from './dtos/patientDetails.dto';
import { ReportDetails_DTO } from './dtos/reportDetails.dto';
import { DoctorDetails_DTO } from './dtos/doctorDetails.dto';
import { ReportService } from './services/report.service';
import { PatientService } from './services/patient.service';
import { DoctorService } from './services/doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'print-report-page';
  patientList: PatientDetails_DTO[] = [];
  reportList: ReportDetails_DTO[] = [];
  doctorList: DoctorDetails_DTO[] = [];
  selectedReport: ReportDetails_DTO | null = null;
  selectedPatient: PatientDetails_DTO | null = null;
  selectedDoctors: DoctorDetails_DTO[] = [];
  dropdownSelectedDoctors: DoctorDetails_DTO[] = [];
  parsedReportData: any = null;
  dropdownSettings = {};
  isEditing: boolean = false;
  showHeader: boolean = true;

  constructor(
    private reportService: ReportService,
    private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.patientList = this.patientService.getPatients();
    this.reportList = this.reportService.getReports();
    this.doctorList = this.doctorService.getDoctors();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'doctorName',
      textField: 'doctorName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getReportName(reportId: number): string {
    return this.reportService.getReportName(reportId);
  }

  ViewReport(report: any) {
    this.selectedReport = this.reportService.getReports().find(r => r.reportId === report.reportId) || null;
    this.selectedPatient = this.patientList.find(p => p.patientId === report.patientId) || null;
    this.selectedDoctors = [];
    this.dropdownSelectedDoctors = [];
    if (this.selectedReport) {
      this.parsedReportData = JSON.parse(this.selectedReport.reportData);
    }
  }

  closePopup() {
    this.selectedReport = null;
    this.selectedPatient = null;
    this.selectedDoctors = [];
    this.dropdownSelectedDoctors = [];
    this.parsedReportData = null;
    this.isEditing = false;
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  onDoctorSelect(item: DoctorDetails_DTO) {
    if (item) {
      const selDoc = this.doctorList.find(d => d.doctorName === item.doctorName)
      this.selectedDoctors.push(selDoc);
    }
  }

  onDoctorDeSelect(item: DoctorDetails_DTO) {
    this.selectedDoctors = this.selectedDoctors.filter(d => d.doctorName !== item.doctorName);
  }

  onSelectAll(items: DoctorDetails_DTO[]) {
    this.selectedDoctors = items;
  }

  onDeSelectAll() {
    this.selectedDoctors = [];
  }

  printReport() {
    const printContent = document.getElementById('printableArea').innerHTML;
    const printWindow = window.open('', '', 'width=900,height=650');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Report</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 20px 0;
            }
            th, td {
              padding: 12px;
              border: 1px solid #ddd;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            tr:hover {
              background-color: #f1f1f1;
            }
            button {
              padding: 6px 12px;
              background-color: #4CAF50;
              color: white;
              border: none;
              cursor: pointer;
            }
            button:hover {
              background-color: #45a049;
            }
            .popup {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
            .popup-content {
              background-color: white;
              padding: 20px;
              border-radius: 5px;
              width: 98%;
              max-width: 1000px;
              position: relative;
              max-height: 90%;
              overflow-y: auto;
            }
            .close {
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 24px;
              cursor: pointer;
              background-color: red;
              color: white;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .patient-info {
              display: flex;
              justify-content: space-between;
              background-color: #f1f1f1;
              margin-bottom: 20px;
              border-radius: 5px;
              border: 1px solid black;
            }
            .patient-info-left,
            .patient-info-right {
              flex: 1;
              padding: 0 10px 0 10px;
            }
            .report-details {
              margin-top: 20px;
            }
            .scrollable {
              max-height: 400px;
              overflow-y: auto;
            }
            .doctor-info-container {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              justify-content: space-between;
              background-color: #f8f8f8;
            }
            .doctor-info {
              flex: 1 1 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 20px;
            }
            .signature-img {
              width: 100px;
              height: 50px;
              object-fit: contain;
            }
            .footer {
              margin-top: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            #doctorSelect {
              padding: 6px;
              font-size: 16px;
            }
            .doctor-info p {
              margin: 2px 0;
            }
            @media (min-width: 600px) {
              .doctor-info {
                flex: 1 1 calc(50% - 20px);
              }
            }
            @media (min-width: 900px) {
              .doctor-info {
                flex: 1 1 calc(33.333% - 20px);
              }
            }
            .doctor-info-container.one-doctor .doctor-info {
              justify-content: center;
              align-items: flex-start;
            }
            .doctor-info-container.two-doctors .doctor-info:nth-child(1) {
              justify-content: center;
            }
            .doctor-info-container.two-doctors .doctor-info:nth-child(2) {
              justify-content: flex-end;
            }
            .doctor-info-container.three-doctors .doctor-info:nth-child(1) {
              justify-content: flex-start;
            }
            .doctor-info-container.three-doctors .doctor-info:nth-child(2) {
              justify-content center;
            }
            .doctor-info-container.three-doctors .doctor-info:nth-child(3) {
              justify-content: flex-end;
            }
            .footer-note {
              margin-top: 10px;
            }
            .no-print {
              display: none;
            }
          </style>
        </head>
        <body onload="window.print();window.close()">
          ${printContent}
          ${this.selectedReport.footerNote.isChecked ? `<div class="footer-note">${this.selectedReport.footerNote.footerNote}</div>` : ''}
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  editReport() {
    this.isEditing = true;
  }

  saveReport() {
    if (this.selectedReport) {
      this.selectedReport.reportData = JSON.stringify(this.parsedReportData);
      this.reportService.updateReport(this.selectedReport);
      this.isEditing = false;
    }
  }
}
