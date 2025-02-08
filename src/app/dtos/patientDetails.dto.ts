export class PatientDetails_DTO {
  hospitalCode: number;
  patientId: number;
  patientName: string;
  reportId: number;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  contact: string;
  dateOfBirth: string;
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
  emergencyContact: string;
  bloodType: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  nationality: string;
  medicalHistory: string;
}