import { Injectable } from '@angular/core';
import { PatientDetails_DTO } from '../dtos/patientDetails.dto';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientList: PatientDetails_DTO[] = [
    { hospitalCode: 101001, patientId: 100001, patientName: 'John Doe', reportId: 1, age: 30, gender: 'Male', address: '123 Main St, Kathmandu, Nepal', contact: '+977 9841234567', dateOfBirth: '1995-03-15', maritalStatus: 'Single', emergencyContact: '+977 9807654321', bloodType: 'O+', nationality: 'Nepalese', medicalHistory: 'No significant history' },
    { hospitalCode: 101002, patientId: 100002, patientName: 'Jane Smith', reportId: 2, age: 28, gender: 'Female', address: '456 Elm St, Pokhara, Nepal', contact: '+977 9812345678', dateOfBirth: '1997-07-22', maritalStatus: 'Married', emergencyContact: '+977 9801122334', bloodType: 'A-', nationality: 'Nepalese', medicalHistory: 'History of asthma' },
    { hospitalCode: 101003, patientId: 100003, patientName: 'Alice Johnson', reportId: 3, age: 35, gender: 'Female', address: '789 Pine St, Lalitpur, Nepal', contact: '+977 9823456789', dateOfBirth: '1990-10-10', maritalStatus: 'Divorced', emergencyContact: '+977 9832233445', bloodType: 'B+', nationality: 'Nepalese', medicalHistory: 'High blood pressure' },
    { hospitalCode: 101004, patientId: 100004, patientName: 'Bob Brown', reportId: 4, age: 45, gender: 'Male', address: '321 Oak St, Chitwan, Nepal', contact: '+977 9845678910', dateOfBirth: '1980-02-18', maritalStatus: 'Married', emergencyContact: '+977 9805544332', bloodType: 'AB+', nationality: 'Nepalese', medicalHistory: 'Chronic back pain' },
    { hospitalCode: 101005, patientId: 100005, patientName: 'Charlie Davis', reportId: 5, age: 50, gender: 'Male', address: '654 Birch St, Butwal, Nepal', contact: '+977 9856789012', dateOfBirth: '1975-01-01', maritalStatus: 'Single', emergencyContact: '+977 9812233445', bloodType: 'O-', nationality: 'Nepalese', medicalHistory: 'Diabetes, hypertension' },
    { hospitalCode: 101006, patientId: 100006, patientName: 'Diana Evans', reportId: 6, age: 40, gender: 'Female', address: '987 Cedar St, Bhaktapur, Nepal', contact: '+977 9802345678', dateOfBirth: '1985-06-05', maritalStatus: 'Married', emergencyContact: '+977 9809876543', bloodType: 'A+', nationality: 'Nepalese', medicalHistory: 'No significant history' },
    { hospitalCode: 101007, patientId: 100007, patientName: 'Ethan Harris', reportId: 7, age: 60, gender: 'Male', address: '135 Maple St, Kathmandu, Nepal', contact: '+977 9867890123', dateOfBirth: '1965-11-21', maritalStatus: 'Widowed', emergencyContact: '+977 9811122334', bloodType: 'B-', nationality: 'Nepalese', medicalHistory: 'Heart disease' },
    { hospitalCode: 101008, patientId: 100008, patientName: 'Fiona Green', reportId: 8, age: 25, gender: 'Female', address: '159 Cherry St, Lalitpur, Nepal', contact: '+977 9834567890', dateOfBirth: '2000-04-18', maritalStatus: 'Single', emergencyContact: '+977 9801122335', bloodType: 'O+', nationality: 'Nepalese', medicalHistory: 'No significant history' },
    { hospitalCode: 101009, patientId: 100009, patientName: 'George Hill', reportId: 9, age: 70, gender: 'Male', address: '246 Ash St, Pokhara, Nepal', contact: '+977 9843456789', dateOfBirth: '1955-05-30', maritalStatus: 'Married', emergencyContact: '+977 9808765432', bloodType: 'A-', nationality: 'Nepalese', medicalHistory: 'Arthritis, vision problems' },
    { hospitalCode: 101010, patientId: 100010, patientName: 'Hannah King', reportId: 10, age: 38, gender: 'Female', address: '654 Elm St, Chitwan, Nepal', contact: '+977 9861234567', dateOfBirth: '1987-03-03', maritalStatus: 'Married', emergencyContact: '+977 9813445555', bloodType: 'AB+', nationality: 'Nepalese', medicalHistory: 'Pregnancy, diabetes' },
    { hospitalCode: 101011, patientId: 100011, patientName: 'Ian Lee', reportId: 1, age: 28, gender: 'Male', address: '321 Oak St, Kathmandu, Nepal', contact: '+977 9876543210', dateOfBirth: '1997-12-15', maritalStatus: 'Single', emergencyContact: '+977 9812234567', bloodType: 'B+', nationality: 'Nepalese', medicalHistory: 'Asthma' },
    { hospitalCode: 101012, patientId: 100012, patientName: 'Jack Martin', reportId: 2, age: 55, gender: 'Male', address: '456 Pine St, Pokhara, Nepal', contact: '+977 9807654321', dateOfBirth: '1970-09-01', maritalStatus: 'Married', emergencyContact: '+977 9831122334', bloodType: 'A-', nationality: 'Nepalese', medicalHistory: 'High blood pressure' },
    { hospitalCode: 101013, patientId: 100013, patientName: 'Karen Nelson', reportId: 3, age: 60, gender: 'Female', address: '135 Cedar St, Lalitpur, Nepal', contact: '+977 9842345678', dateOfBirth: '1965-08-18', maritalStatus: 'Widowed', emergencyContact: '+977 9814567890', bloodType: 'O+', nationality: 'Nepalese', medicalHistory: 'Arthritis' },
    { hospitalCode: 101014, patientId: 100014, patientName: 'Liam Scott', reportId: 4, age: 46, gender: 'Male', address: '789 Birch St, Chitwan, Nepal', contact: '+977 9856123456', dateOfBirth: '1979-04-10', maritalStatus: 'Single', emergencyContact: '+977 9813345566', bloodType: 'AB-', nationality: 'Nepalese', medicalHistory: 'No significant history' },
    { hospitalCode: 101015, patientId: 100015, patientName: 'Mia Turner', reportId: 5, age: 29, gender: 'Female', address: '222 Maple St, Butwal, Nepal', contact: '+977 9834561234', dateOfBirth: '1996-02-27', maritalStatus: 'Married', emergencyContact: '+977 9823345566', bloodType: 'B+', nationality: 'Nepalese', medicalHistory: 'No significant history' }
  ];

  getPatients() {
    return this.patientList;
  }
}
