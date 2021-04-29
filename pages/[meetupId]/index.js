import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
    image='https://dc.lnwfile.com/_/dc/_raw/lq/50/za.jpg'
    title='modern luxury'
    price='$450.00'
    detail='Limited Edition Sideboard Designs by Boca do Lobo The best of luxury sideboard design in a selection curated by Boca do Lobo to inspire interior designers looking to finish their projects. Discover the best buffets and sideboards for your Dining Room in mid-century, contemporary, industrial or vintage style by some of the best furniture brands out there.'
    />
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: 'm1',
//         },
//       },
//       {
//         params: {
//           meetupId: 'm2',
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   // fetch data for a single meetup

//   const meetupId = context.params.meetupId;

//   console.log(meetupId);

//   return {
//     props: {
//       meetupData: {
//         image:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//         id: meetupId,
//         title: 'First Meetup',
//         address: 'Some Street 5, Some City',
//         description: 'This is a first meetup',
//       },
//     },
//   };
// }

export default MeetupDetails;
