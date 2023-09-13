export interface IOverview {
    fName: string
    lName: string
    jenisPembiayaan: string,
    jenisKredit: string,
    nameProyek: string,
    nominalPengajuan: number,
    company: string
    rencanaKredit: string
}

export const OverviewValues: IOverview = {
    fName: 'putra',
    lName: 'nagara',
    jenisPembiayaan: "",
    jenisKredit: "",
    nameProyek: "",
    nominalPengajuan: 0,
    company: 'Start',
    rencanaKredit: 'Start',
  }