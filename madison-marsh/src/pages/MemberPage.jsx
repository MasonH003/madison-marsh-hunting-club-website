import { Header, Footer } from '../sections';
import { Card } from '../components';
import birds from '../assets/images/birds.jpg';
import center from '../assets/images/center.jpg';

const MemberPage = () => {

  return (
    <div className = "">
        <Header/>
            <h1 className = "flex flex-row justify-center text-4xl p-4">Welcome Member</h1>
            <div className = "flex flex-row space-x-6 justify-center pt-6 pb-6 bg-accent">
                <Card
                    imageUrl={birds}
                    altText="Photo Gallery"
                    title="Photo Gallery"
                    description="Click here to view members only pictures"
                    href = "/ClubRules"
                />
                <Card
                    imageUrl={center}
                    altText="Private Forum"
                    title="Private Forum"
                    description="Click here to communicate with other club members"
                    href = "/ClubRules"
                />
                <Card
                    imageUrl={center}
                    altText="Reserve Feeders & Stands"
                    title="Reserve Feeders & Stands"
                    description="Click here to reserve feeders and stands on the property"
                    href = "/ClubRules"
                />
            </div>
        <Footer/>
    </div>
  )
}

export default MemberPage;