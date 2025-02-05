import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { PatientService } from './patient.service';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'print-report-page';
  patientList = [];
  reportList = [];
  doctorList = [];
  selectedReport: any = null;
  selectedPatient: any = null;
  selectedDoctors: any[] = [];

  constructor(
    private reportService: ReportService,
    private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.patientList = this.patientService.getPatients();
    this.reportList = this.reportService.getReports();
    this.doctorList = this.doctorService.getDoctors();
  }

  getReportName(reportId: number): string {
    return this.reportService.getReportName(reportId);
  }

  ViewReport(report: any) {
    this.selectedReport = this.reportService.getReports().find(r => r.reportId === report.reportId);
    this.selectedPatient = this.patientList.find(p => p.patientId === report.patientId);
    this.selectedDoctors = [];
  }

  closePopup() {
    this.selectedReport = null;
    this.selectedPatient = null;
    this.selectedDoctors = [];
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  addDoctor(event: any) {
    const doctorName = event.target.value;
    const doctor = this.doctorService.getDoctorByName(doctorName);
    if (doctor && !this.selectedDoctors.includes(doctor)) {
      this.selectedDoctors.push(doctor);
    }
  }

  removeDoctor(index: number) {
    this.selectedDoctors.splice(index, 1);
  }

  printReport() {
    const printContent = document.getElementById('printableArea');
    const WindowPrt = window.open('', '', 'width=900,height=650');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
