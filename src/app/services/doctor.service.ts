import { Injectable } from '@angular/core';
import { DoctorDetails_DTO } from '../dtos/doctorDetails.dto';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctorList: DoctorDetails_DTO[] = [
    { doctorName: 'Dr. Smith, MD', nmcNumber: 'NMC123456', department: 'Radiology', digitalSignature: 'assets/signatures/signature1.png' },
    { doctorName: 'Dr. Patel, MD', nmcNumber: 'NMC654321', department: 'Ultrasound', digitalSignature: 'assets/signatures/signature2.png' },
    { doctorName: 'Dr. Kim, MD', nmcNumber: 'NMC789012', department: 'Pathology', digitalSignature: 'assets/signatures/signature3.png' },
    { doctorName: 'Dr. Lee, Neurologist', nmcNumber: 'NMC345678', department: 'Neurology', digitalSignature: 'assets/signatures/signature4.png' },
    { doctorName: 'Dr. Thomas, Pulmonologist', nmcNumber: 'NMC901234', department: 'Pulmonology', digitalSignature: 'assets/signatures/signature5.png' },
    { doctorName: 'Dr. Johnson, Cardiologist', nmcNumber: 'NMC567890', department: 'Cardiology', digitalSignature: 'assets/signatures/signature6.png' },
    { doctorName: 'Dr. Mehta, MD', nmcNumber: 'NMC234567', department: 'General Medicine', digitalSignature: 'assets/signatures/signature7.png' }
  ];

  getDoctors() {
    return this.doctorList;
  }

  getDoctorByName(doctorName: string): DoctorDetails_DTO | undefined {
    return this.doctorList.find(doctor => doctor.doctorName === doctorName);
  }
}
