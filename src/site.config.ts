// Contact details and links used across the site. Edit here, not in the pages.
export const site = {
  name: 'Haus of Shades Studio',
  domain: 'hausofshades.com.au',

  phone: '0494 576 823',
  phoneHref: 'tel:+61494576823',
  email: 'saba@hausofshades.com.au',

  locality: 'Doreen',
  region: 'VIC',
  postcode: '3754',
  serviceArea: 'Victoria',
  // Taken from the Fresha listing. Leave empty to hide.
  hours: 'Open 7 days, 10am to 9pm',
  openingHoursSchema: 'Mo-Su 10:00-21:00',

  instagram: 'https://www.instagram.com/hausofshades.saba/',
  instagramHandle: '@hausofshades.saba',
  fresha: 'https://www.fresha.com/a/haus-of-shades-studio-melbourne-13-glass-crescent-ej6u9r1v',

  // Enquiries are saved as responses to a Formbricks survey, through its public
  // Client API (no API key). Until both IDs are filled in, the form opens the
  // visitor's email app with the enquiry written out, addressed to `email`.
  formbricks: {
    appUrl: 'https://app.formbricks.com', // or your own address if you self-host
    workspaceId: 'cmvgsq93k230p01ropjc54k2s',
    surveyId: 'cmvguegu1gsz101qv5jkt960n',
    // The survey's question ID for each form field. If you give the questions
    // these IDs in Formbricks, nothing here needs changing.
    questionIds: {
      enquiry_for: 'enquiry_for',
      name: 'name',
      email: 'email',
      phone: 'phone',
      company: 'company',
      date: 'date',
      location: 'location',
      people: 'people',
      message: 'message',
    },
  },
};
