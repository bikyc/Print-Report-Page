export class ReportDetails_DTO {
  reportId: number;
  reportName: string;
  reportData: string;
  footerNote: FooterNote;
}

export class FooterNote {
  footerNote: string;
  isChecked: boolean;
}