export const resumeExperience: { label: string, number: number }[] = [
  { label: 'Years of Experience', number: 7 },
  { label: 'Complete Project', number: 8 },
  { label: 'Client', number: 6 },
]

interface IResumeWorking {
  startDate: string,
  endDate?: string,
  role: string,
  company: string,
  activity: string
}

export const resumeWorking: IResumeWorking[] = [
  {
    startDate: '2021-02-01',
    role: 'Senior Front End Developer',
    company: 'Dasa',
    activity: 'I worked as responsible for the restructuring of one of the products Using some best practices and talking and deciding with the UX UI staff on ways to simplify the product so that it doesn t become something out of control in the future.'
  },
  {
    startDate: '2020-02-01',
    endDate: '2021-02-01',
    role: 'Senior Front End Developer',
    company: 'Hospital Israelista Albert Einstein',
    activity: 'I worked as responsible for the restructuring of one of the products Using some best practices and talking and deciding with the UX UI staff on ways to simplify the product so that it doesn t become something out of control in the future.'
  },
  {
    startDate: '2019-10-01',
    endDate: '2020-02-01',
    role: 'Full/Senior Front End Developer',
    company: 'Webmotors',
    activity: 'I worked as responsible for the restructuring of one of the products Using some best practices and talking and deciding with the UX UI staff on ways to simplify the product so that it doesn t become something out of control in the future.'
  },
  {
    startDate: '2019-06-01',
    endDate: '2019-10-01',
    role: 'Full Front End Developer',
    company: 'Digital Republic',
    activity: 'I worked in a Z-Tech Group project called Bario. Bario is the ideal front box system for bars and restaurants. With it, it is possible to issue tax receipts, manage sales and stock. The technologies used to develop this platform were: ReactJS, GraphQL, Electron, Jest (Test Units), CyPress (Test End-To-End), AWS Cognito and PiPeDrive.'
  },
  {
    startDate: '2017-08-01',
    endDate: '2019-05-01',
    role: 'Junior Front End Developer',
    company: 'Just Digital Br',
    activity: 'My job was to help the team develop different products for different clients using the technologies that were used: Drupal 8, SCSS, CSS3, HTML5, ES6, React, Redux, VueJS, PHP, Symphony, NodeJS and so on.'
  }
]